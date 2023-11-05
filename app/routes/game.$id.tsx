import SingleColumnPage from "~/components/ui/SingleColumnPage";
import { useLoaderData } from "@remix-run/react";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getGame } from "~/lib/api";
import { Timeline } from "~/components/Timeline";
import { GameHeader } from "~/components/GameHeader";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "~/components/ui/tabs";
import GameRoster from "~/components/GameRoster";

// export const meta: MetaFunction<typeof loader> = ({ data }) => {
//   return [
//     { title: data?.title || "SHC Belpa 1107" },
//     { name: "description", content: data?.description || "" },
//   ];
// };

export const loader = async ({ params }: LoaderFunctionArgs) => {
  invariant(params.id, "params.id is required");

  return await getGame(params.id);
};

const pages = [
  { name: "NLA", href: "/1/season/2324", current: false },
  { name: "Saison 2023/2024", href: "#", current: true },
];

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
