import { cn } from "@/lib/utils";
import React from "react";

export const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return <div className={cn("min-h-screen", "w-screen"  )}>{children}</div>;
};
