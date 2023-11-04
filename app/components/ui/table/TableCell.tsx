import React from "react";
import { cn } from "~/lib/utils";

export default function TableCell({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <td
      className={cn(
        "px-2 md:px-6 py-4 whitespace-no-wrap text-sm leading-5 font-medium text-gray-900",
        className,
      )}
    >
      {children}
    </td>
  );
}
