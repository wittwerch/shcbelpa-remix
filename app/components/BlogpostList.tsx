import PrimaryTitle from "~/components/ui/PrimaryTitle";
import type { BlogPost } from "~/types";
import { ChevronRightIcon } from "lucide-react";
import { formatDateFromIsoString } from "~/lib/date";
import { Link } from "@remix-run/react";

// create props to pass to the component
type IProps = {
  posts: Array<BlogPost>;
};

export default function BlogpostList({ posts }: IProps) {
  if (posts.length == 0) {
    return <></>;
  }

  return (
    <div className="">
      <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-12 lg:max-w-7xl lg:px-8">
        <div className="md:flex md:items-center md:justify-between">
          <PrimaryTitle>News</PrimaryTitle>
        </div>

        <ul role="list" className="border-t border-gray-200 mt-3">
          {posts.map((post) => (
            <Link to={`blog/${post.slug}`}>
              <li
                key={post.slug}
                className="relative flex justify-between py-3"
              >
                <div className="flex gap-x-5 pr-6">
                  <div className="text-sm leading-6 text-gray-500">
                    {formatDateFromIsoString(post.publish_date)}
                  </div>
                  <div className="text-sm font-semibold leading-6 text-gray-900">
                    {post.title}
                  </div>
                </div>
                <div>
                  <ChevronRightIcon
                    className="h-5 w-5 flex-none text-gray-600"
                    aria-hidden="true"
                  />
                </div>
              </li>
            </Link>
          ))}
        </ul>

        {/*<div className="mx-auto mt-5 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 border-t border-gray-200 pt-5 lg:mx-0 lg:max-w-none lg:grid-cols-3">*/}
        {/*  {posts.map((post) => (*/}
        {/*    <article*/}
        {/*      key={post.id}*/}
        {/*      className="flex max-w-xl flex-col items-start p-4"*/}
        {/*    >*/}
        {/*      <div className="flex items-center gap-x-4 text-xs">*/}
        {/*        <time dateTime={`${new Date()}`} className="text-gray-500">*/}
        {/*          {formatDateFromIsoString(post.publish_date)}*/}
        {/*        </time>*/}
        {/*      </div>*/}
        {/*      <div className="group relative">*/}
        {/*        <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">*/}
        {/*          <Link to={`blog/${post.slug}`}>*/}
        {/*            <span className="absolute inset-0" />*/}
        {/*            {post.title}*/}
        {/*          </Link>*/}
        {/*        </h3>*/}
        {/*        <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">*/}
        {/*          {post.description}*/}
        {/*        </p>*/}
        {/*      </div>*/}
        {/*    </article>*/}
        {/*  ))}*/}
        {/*</div>*/}
      </div>
    </div>
  );
}
