import React from "react";
import {cn} from "~/lib/lib";

export default function TableHeader({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <th
      className={cn(
        "px-2 md:px-6 py-3 text-left text-xs leading-4 uppercase tracking-wider",
        className,
      )}
    >
      {children}
    </th>
  );
}
