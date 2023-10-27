import React from "react";
import {cn} from "~/lib/lib";

export default function TableRow({
  children,
  type = "body",
  index = null,
  className,
}: {
  children: React.ReactNode;
  type?: "head" | "body";
  index?: number | null;
  className?: string;
}) {
  let defaultClassName =
    type === "head" ? "bg-gray-900 text-white font-bold" : "bg-white";

  if (index) {
    defaultClassName = cn(
      defaultClassName,
      index % 2 === 0 ? "bg-white" : "bg-gray-100",
    );
  }

  if (className) {
    defaultClassName = cn(defaultClassName, className);
  }

  return <tr className={defaultClassName}>{children}</tr>;
}
