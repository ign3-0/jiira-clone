"use client";

import { AlertTriangleIcon } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const ErrorPage = () => {
  return (
    <div className="h-screen flex flex-col gap-y-4 items-center justify-center">
      <AlertTriangleIcon className="size-6 text-yellow-300" />
      <p className="text-sm">Something went Wrong</p>
      <Button variant="secondary">
        <Link href={"/"}>Back to Home</Link>
      </Button>
    </div>
  );
};

export default ErrorPage;
