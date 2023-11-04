import PrimaryTitle from "~/components/ui/primary-title";

function Skeleton({ title }: { title: string }) {
  // loop 6 times
  const skeletons = Array.from({ length: 6 }, (_, i) => i);

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <PrimaryTitle>{title}</PrimaryTitle>
        </div>

        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {skeletons.map((album, idx) => (
            <article
              key={idx}
              className="w-48 h-32 flex flex-col items-start justify-between animate-pulse rounded-md bg-gray-200"
            ></article>
          ))}
        </div>
      </div>
    </div>
  );
}

export { Skeleton };
