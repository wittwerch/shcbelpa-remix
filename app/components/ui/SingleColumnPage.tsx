import React from "react";

export default function SingleColumnPage({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-gray-800 md:pt-10">
      <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
        <main className="flex min-h-screen flex-col items-center justify-between p-6 bg-gray-50 rounded-sm">
          <div className="px-2 pb-4 w-full">{children}</div>
        </main>
      </div>
    </div>
  );
}
