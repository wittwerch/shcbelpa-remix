import type { FlickrAlbum } from "~/types";
import PrimaryTitle from "~/components/ui/PrimaryTitle";
import { Link } from "@remix-run/react";

const FLICKR_URL = "https://www.flickr.com/photos/142317525@N03/albums";

type IProps = {
  albums: Array<FlickrAlbum>;
};

export default function AlbumList({ albums }: IProps) {
  if (albums.length == 0) {
    return <></>;
  }

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <PrimaryTitle>Gallery</PrimaryTitle>
          <a
            href={FLICKR_URL}
            className="hidden text-sm font-medium text-red-600 hover:text-red-500 md:block"
            target="_blank"
            rel="noreferrer"
          >
            Alle Bilder
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>

        <div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {albums.map((album) => (
            <article
              key={album.id}
              className="flex flex-col items-start justify-between"
            >
              <Link to={`${FLICKR_URL}/${album.id}`} target="_blank">
                <div className="relative w-full">
                  <img
                    width={album.primary_photo_extras.width_m}
                    height={album.primary_photo_extras.height_m}
                    src={album.primary_photo_extras.url_m}
                    alt=""
                    className="aspect-[16/9] w-full rounded-sm bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                </div>
                <div className="max-w-xl">
                  <div className="flex items-center gap-x-2 text-xs"></div>
                  <div className="group relative">
                    <h3 className="mt-2 font-semibold leading-5 text-gray-900 group-hover:text-gray-600">
                      <span className="absolute inset-0" />
                      {album.title._content}
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
            href={FLICKR_URL}
            className="font-medium text-red-600 hover:text-red-500"
          >
            Alle Bilder
            <span aria-hidden="true"> &rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}
