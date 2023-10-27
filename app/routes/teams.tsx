import React from "react";
import {Outlet, useLoaderData, useNavigation} from "@remix-run/react";
import TeamHero from "~/components/TeamHero";
import type {LoaderFunctionArgs} from "@remix-run/node";
import invariant from "tiny-invariant";
import {currentSeason, getRoster} from "~/lib/api";
import PrimaryTitle from "~/components/ui/primary-title";
import {TeamTabs} from "~/components/ui/TeamTabs";
import {cn} from "~/lib/lib";

// export const metadata: Metadata = {
//     title: "SHC Belpa 1107",
// };

export async function loader({ params, }: LoaderFunctionArgs) {

    invariant(params.teamId, "Missing teamId param");

    const season = await currentSeason(params.teamId);
    const {team} = await getRoster(params.teamId)

    return {
        team: team,
        currentSeason: season
    }
}

export default function Teams() {

    const navigation = useNavigation();
    const data = useLoaderData<typeof loader>();

    return (
        <div className="bg-gray-800">
            <div className="mx-auto max-w-7xl py-0 md:py-6 sm:px-6 lg:px-8">
                <main className="flex min-h-screen flex-col items-center justify-between  bg-gray-50 rounded-sm">
                    <div className="w-full">
                        <TeamHero team={data.team} />

                        <div className="p-3 md:p-6">

                            <PrimaryTitle>{data.team.league.name}</PrimaryTitle>
                            <TeamTabs team={data.team} season={data.currentSeason} />
                            <div className={cn(navigation.state == 'loading' ? 'opacity-20' : '', "mt-6")}>
                                <Outlet />
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
