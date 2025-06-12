"use client";

import { Loader2Icon } from "lucide-react";

const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <Loader2Icon className="size-6 animate-bounce" />
    </div>
  );
};

export default LoadingPage;
