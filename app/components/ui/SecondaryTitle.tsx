import React from "react";
import { cn } from "~/lib/utils";

export default function SecondaryTitle({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <h2
      className={cn(
        className,
        "text-2xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-2xl sm:leading-10 mb-2",
      )}
    >
      {children}
    </h2>
  );
}
