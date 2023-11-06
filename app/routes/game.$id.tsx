import SingleColumnPage from "~/components/ui/SingleColumnPage";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs, MetaFunction } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getGame } from "~/lib/api";
import { Timeline } from "~/components/Timeline";
import { GameHeader } from "~/components/GameHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import GameRoster from "~/components/GameRoster";
import React from "react";

export const meta: MetaFunction<typeof loader> = ({ data }) => {
  return [{ title: "SHC Belpa 1107" }];
};

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "params.id is required");

  return await getGame(params.id);
};

export default function Game() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <SingleColumnPage>
        <GameHeader game={data.game} />

        <div className="py-6 flex flex-col justify-center sm:py-1">
          <div className="py-1 sm:max-w-xl sm:mx-auto w-full px-2 sm:px-0 ">
            <Tabs defaultValue="timeline" className="justify-center">
              <TabsList>
                <TabsTrigger value="timeline">Spielverlauf</TabsTrigger>
                <TabsTrigger value="roster">Statistik</TabsTrigger>
              </TabsList>
              <TabsContent value="timeline" className="mt-10">
                <Timeline events={data.events} game={data.game} />
              </TabsContent>
              <TabsContent value="roster" className="mt-10">
                <GameRoster
                  game={data.game}
                  home={data.roster.home}
                  away={data.roster.away}
                />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </SingleColumnPage>
    </>
  );
}

export function ErrorBoundary() {
  return (
    <SingleColumnPage>
      <div
        className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative flex flex-col"
        role="alert"
      >
        <strong className="font-bold">Oh nein, 2min für uns!</strong>
        <span className="block sm:inline mt-2">
          Irgendwas hat beim Laden der Seite nicht geklappt. Falls das Problem
          weiterhin besteht, melde dich bei unter{" "}
          <a
            href="mailto:webmaster@shcbelpa.ch"
            className="underline hover:text-red-900"
          >
            webmaster@shcbelpa.ch
          </a>
        </span>
      </div>
    </SingleColumnPage>
  );
}
