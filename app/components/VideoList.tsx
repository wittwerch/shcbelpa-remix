import PrimaryTitle from "~/components/ui/primary-title";
import { PlayCircleIcon } from "@heroicons/react/20/solid";
import {Link} from "@remix-run/react";
import type {Video} from "~/types";

const ALL_VIDEOS_URL =
  "https://www.swiss-streethockey.ch/de-de/meisterschaft/highlightvideos.aspx";


type IProps = {
  videos: Array<Video>;
};

export default function VideoList({ videos }: IProps) {

  if (videos.length == 0) {
    return <></>;
  }

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-12 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <PrimaryTitle>Videos</PrimaryTitle>
          <a
            href={ALL_VIDEOS_URL}
            className="hidden text-sm font-medium text-red-600 hover:text-red-500 md:block"
            target="_blank" rel="noreferrer"
          >
            Alle Videos
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {videos.map((video) => (
            <article
              key={video._id}
              className="flex flex-col items-start justify-between"
            >
              <Link to={`/video/${video._source.slug}`}>
                <div className="relative w-full">
                  <img
                    width={211}
                    height={141}
                    src={video._source.thumbnail}
                    alt=""
                    className="aspect-[16/9] w-full rounded-sm bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <PlayCircleIcon className="absolute bottom-2 left-2 h-12 w-12 md:h-8 md:w-8 text-white" />
                </div>
                <div className="max-w-xl">
                  <div className="flex items-center gap-x-2 text-xs"></div>
                  <div className="group relative">
                    <h3 className="mt-2 font-semibold leading-5 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {video._source.name}
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {/*{post.description}*/}
                    </p>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>

        <div className="mt-8 text-sm md:hidden">
          <a
            href={ALL_VIDEOS_URL}
            className="font-medium text-red-600 hover:text-red-500"
          >
            Alle Videos
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
