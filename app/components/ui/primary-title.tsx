import React from "react";

export default function PrimaryTitle({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <h1 className="text-2xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-2xl sm:leading-10 mb-2 py-4 md:py-2">
      {children}
    </h1>
  );
}
