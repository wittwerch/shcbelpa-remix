import type {MetaFunction} from "@remix-run/node";
import {useLoaderData, useNavigation} from "@remix-run/react";
import {BellAlertIcon} from "@heroicons/react/24/outline";
import {shortDateTime} from "~/lib/date";
import VideoList from "~/components/VideoList";
import {fetchVideos} from "~/lib/video";
import AlbumList from "~/components/AlbumList";
import {fetchAlbums} from "~/lib/flickr";
import Resultbox from "~/components/Resultbox";
import {homeData} from "~/lib/api";
import BlogpostList from "~/components/BlogpostList";
import {cn} from "~/lib/lib";

export const meta: MetaFunction = () => {
  return [
    { title: "SHC Belpa 1107" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};



const parseDateTime = (dateTime: string) => new Date(dateTime);

export const loader = async () => {

    const [data, videos, albums] = await Promise.all([
        homeData(),
        fetchVideos(),
        fetchAlbums(),
    ]);

    return { ...data, videos, albums };
};

export default function Index() {

    const navigation = useNavigation();
    const data = useLoaderData<typeof loader>();

    const { next: nextHomeGame } = data.games.reduce((closestGame, game) => {
        if (game.next == null) return closestGame;
        const gameDate = parseDateTime(game.next.date_time);
        if (!closestGame || gameDate < parseDateTime(closestGame.next.date_time)) {
            return game;
        }
        return closestGame;
    });

  return (
      <>
          <header className="bg-gray-800 shadow">
              <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
                  {nextHomeGame && (
                      <div className="flex flex-row items-center">
                          <BellAlertIcon className="h-8 sm:h-5 w-8 md:w-5 text-gray-200" />
                          <h1 className="tracking-tight ml-4 md:ml-2 text-gray-200">
                              Nächstes Heimspiel: {nextHomeGame.away_team.club.name} (
                              {nextHomeGame.league.name}) /{" "}
                              {shortDateTime(nextHomeGame.date_time)}
                          </h1>
                      </div>
                  )}
              </div>
          </header>

              <div className={cn(navigation.state == 'loading' ? 'opacity-20' : '', "bg-gray-800 ")}>
              <div className="mx-auto max-w-7xl pb-6 sm:px-6 lg:px-8">
                  <main className="flex min-h-screen flex-col items-center justify-between p-2 md:p-6 bg-gray-50 rounded-sm">
                      <div className="w-full flex flex-col flex-wrap md:flex-row -mx-2">
                          <div className="md:w-1/3 lg:w-1/4 px-2 pb-4 order-1">
                              <Resultbox games={data.games} />
                          </div>
                          <div className="md:w-2/3 lg:w-2/2 px-2 pb-4 order-3 md:order-2">
                              <BlogpostList posts={data.posts} />
                              <VideoList videos={data.videos} />
                              <AlbumList albums={data.albums} />
                          </div>
                      </div>
                  </main>
              </div>
          </div>
      </>
  );
}
