'use client'

import Link from "next/link";
import { useRouter } from "next/navigation";

import { DottedSeparator } from "@/components/dotted-separator";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { useJoinWorkspace } from "../api/use-join-workspace";
import { useInviteCode } from "../hooks/use-invite-code";
import { useWorkspaceId } from "../hooks/use-workspace-id";

interface JoinWorkspaceFormProps {
  initialValues: {
    name: string;
  };
}

export const JoinWorkspaceForm = ({
  initialValues,
}: JoinWorkspaceFormProps) => {
  const router = useRouter();
  const workspaceId = useWorkspaceId();
  const inviteCode = useInviteCode();
  const { mutate, isPending } = useJoinWorkspace();

  const onSubmit = () => {
    mutate(
      {
        param: { workspaceId },
        json: { code: inviteCode },
      },
      {
        onSuccess: ({ data }) => {
          router.push(`/workspaces/${data.$id}`);
        },
      }
    );
  };

  return (
      <Card className="w-full h-full border-none shadow-none">
        <CardHeader className="p-7">
          <CardTitle className="text-xl font-bold items-center text-center justify-center">
            Join Workspace
          </CardTitle>
          <CardDescription>
            You have been invited to join <strong>{initialValues.name}</strong>{" "}
            workspace
          </CardDescription>
        </CardHeader>
        <div className="px-7">
          <DottedSeparator />
        </div>
        <CardContent className="p-7">
          <div className="flex flex-col lg:flex-row gap-2 items-center justify-between">
            <Button
              variant="secondary"
              type="button"
            //   asChild
              size="lg"
              disabled={isPending}
              className="w-full lg:w-fit"
            >
              <Link href="/"></Link>
              Cancel
            </Button>
            <Button
              size={"lg"}
              type="button"
              className="w-full lg:w-fit"
              onClick={onSubmit}
              disabled={isPending}
            >
              Join Workspace
            </Button>
          </div>
        </CardContent>
      </Card>
  );
};
