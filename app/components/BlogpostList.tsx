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

        <ul role="list" className="">
          {posts.map((post) => (
            <Link to={`blog/${post.slug}`}>
              <li
                key={post.slug}
                className="relative flex justify-between py-2 bg-gray-100 pl-2 my-4"
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
      </div>
    </div>
  );
}
