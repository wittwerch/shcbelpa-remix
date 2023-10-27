import React from "react";

export default function TableComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <table className="min-w-full divide-y overflow-x-auto">
      <tbody>{children}</tbody>
    </table>
  );
}
