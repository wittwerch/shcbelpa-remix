import type { MetaFunction } from "@remix-run/node";
import { defer } from "@remix-run/node";
import { useLoaderData, useNavigation } from "@remix-run/react";
import VideoList from "~/components/VideoList";
import { fetchVideos } from "~/lib/video";
import AlbumList from "~/components/AlbumList";
import { fetchAlbums } from "~/lib/flickr";
import Resultbox from "~/components/Resultbox";
import { getLatestPosts, getLatestResults, getUpcomingGames } from "~/lib/api";
import BlogpostList from "~/components/BlogpostList";
import { cn } from "~/lib/utils";
import React, { Suspense } from "react";
import { Skeleton } from "~/components/ui/Skeleton";
import { Await } from "react-router";
import UpcomingGames from "~/components/UpcomingGames";

export const meta: MetaFunction = () => {
  return [
    { title: "SHC Belpa 1107" },
    {
      name: "description",
      content:
        "Offizielle Website des Belpa 1107. Hier gibt es aktuelle News, Statistiken, Informationen zur Mannschaft und den kommenden Spielen!",
    },
  ];
};

export function headers() {
  return {
    "Cache-Control": "s-maxage=1, stale-while-revalidate=59",
  };
}

export const loader = async () => {
  const albums = fetchAlbums();
  const videos = fetchVideos();
  const posts = getLatestPosts();
  //const teams = fetchTeams()

  const latestResults = await getLatestResults();
  const upcomingGames = await getUpcomingGames();

  return defer({ latestResults, upcomingGames, videos, albums, posts });
};

export default function Index() {
  const navigation = useNavigation();
  const { latestResults, upcomingGames, albums, videos, posts } =
    useLoaderData<typeof loader>();

  return (
    <>
      <header className="bg-gray-800 shadow">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          {/*{nextHomeGame && (*/}
          {/*  <div className="flex flex-row items-center">*/}
          {/*    <BellAlertIcon className="h-8 sm:h-5 w-8 md:w-5 text-gray-200" />*/}
          {/*    <h1 className="tracking-tight ml-4 md:ml-2 text-gray-200">*/}
          {/*      Nächstes Heimspiel: {nextHomeGame.away_team.club.name} (*/}
          {/*      {nextHomeGame.league.name}) /{" "}*/}
          {/*      {formatDateTimeFromIsoString(nextHomeGame.date_time)}*/}
          {/*    </h1>*/}
          {/*  </div>*/}
          {/*)}*/}
        </div>
      </header>

      <div
        className={cn(
          navigation.state == "loading" ? "opacity-20" : "",
          "bg-gray-800 ",
        )}
      >
        <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
          <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-6 bg-gray-50 rounded-sm">
            <div className="w-full flex flex-col flex-wrap md:flex-row -mx-2">
              <div className="md:w-1/3 lg:w-1/4 px-2 pb-4 order-1">
                <Resultbox games={latestResults} />
              </div>
              <div className="md:w-2/3 lg:w-2/2 px-2 pb-4 order-3 md:order-2">
                <Suspense fallback={<Skeleton title="News" />}>
                  <Await resolve={posts}>
                    {(posts) => <BlogpostList posts={posts} />}
                  </Await>
                </Suspense>

                <UpcomingGames games={upcomingGames} />

                <Suspense fallback={<Skeleton title="Videos" />}>
                  <Await resolve={videos}>
                    {(videos) => <VideoList videos={videos} />}
                  </Await>
                </Suspense>
                <Suspense fallback={<Skeleton title="Gallery" />}>
                  <Await resolve={albums}>
                    {(albums) => <AlbumList albums={albums} />}
                  </Await>
                </Suspense>
              </div>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
