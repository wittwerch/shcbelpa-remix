import React from "react";
import {
  Outlet,
  useLoaderData,
  useNavigation,
  useRouteLoaderData,
} from "@remix-run/react";
import TeamHero from "~/components/TeamHero";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getCurrentSeason } from "~/lib/api";
import PrimaryTitle from "~/components/ui/primary-title";
import { TeamTabs } from "~/components/ui/TeamTabs";
import { cn } from "~/lib/utils";
import type { Team } from "~/types";

// export const metadata: Metadata = {
//     title: "SHC Belpa 1107",
// };

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, "Missing teamId param");

  const season = await getCurrentSeason(params.teamId);

  return {
    teamId: params.teamId,
    currentSeason: season,
  };
}

export default function Teams() {
  const navigation = useNavigation();
  const { teamId, currentSeason } = useLoaderData<typeof loader>();

  const { teams } = useRouteLoaderData("root") as { teams: Team[] };
  const team = teams.filter((team) => team.id.toString() == teamId)[0];

  return (
    <div className="bg-gray-800">
      <div className="mx-auto max-w-7xl py-0 md:py-6 sm:px-6 lg:px-8">
        <main className="flex min-h-screen flex-col items-center justify-between  bg-gray-50 rounded-sm">
          <div className="w-full">
            <TeamHero team={team} />

            <div className="p-3 md:p-6">
              <PrimaryTitle>{team.league.name}</PrimaryTitle>
              <TeamTabs team={team} season={currentSeason} />
              <div
                className={cn(
                  navigation.state == "loading" ? "opacity-20" : "",
                  "mt-6",
                )}
              >
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
