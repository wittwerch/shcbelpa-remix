import { getAwayGoals, getHomeGoals, toOvertime, toShootout } from "~/lib/game";
import type { Game } from "~/types";
import PrimaryTitle from "~/components/ui/PrimaryTitle";
import { TeamLogo } from "~/components/ui/TeamLogo";
import { NavLink } from "@remix-run/react";
import React from "react";
import { Gamepad2Icon } from "lucide-react";

// create props to pass to the component
type IProps = {
  games: Game[];
};

export default function Resultbox({ games }: IProps) {
  return (
    <div className="">
      <PrimaryTitle>Resultate</PrimaryTitle>

      {games.map((game) => {
        return (
          game && (
            <div
              key={game.id}
              className="flex flex-col mb-5 border rounded-md p-4 divide-y divide-gray-400 md:divide-gray-200 bg-gray-200 md:bg-gray-100"
            >
              <div className="pb-2">
                <div>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
                    {game.league.name} {game.game_type.name}{" "}
                    {toOvertime(game) && "/ n.V."}{" "}
                    {toShootout(game) && "/ n.P."}
                  </span>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <div className="flex flex-row items-center">
                    <div>
                      <TeamLogo team={game.home_team}></TeamLogo>
                    </div>
                    <div className="ml-1">{game.home_team.club.name}</div>
                  </div>
                  <div className="font-bold">{getHomeGoals(game)}</div>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <div className="flex flex-row items-center">
                    <div>
                      <TeamLogo team={game.away_team}></TeamLogo>
                    </div>
                    <div className="ml-1">{game.away_team.club.name}</div>
                  </div>
                  <div className="font-bold">{getAwayGoals(game)}</div>
                </div>
              </div>

              <div className="pt-2 text-sm md:text-xs leading-5 font-bold text-gray-600 md:text-gray-500 truncate flex flex-row items-center">
                <Gamepad2Icon className="h-4 mr-1" />
                <NavLink to={`/game/${game.id}`}>Gamecenter</NavLink>
              </div>

              {/*{next && (*/}
              {/*  <div className="pt-2 text-sm md:text-xs leading-5 font-bold text-gray-600 md:text-gray-500 truncate flex flex-row items-center">*/}
              {/*    <CalendarDaysIcon*/}
              {/*      className={cn(*/}
              {/*        atHome(next) ? "text-red-700" : "",*/}
              {/*        "h-4 mr-1",*/}
              {/*      )}*/}
              {/*    />*/}
              {/*    {atHome(next)*/}
              {/*      ? `${next.away_team.club.code} (in Belp)`*/}
              {/*      : `${next.home_team.club.code} (auswärts)`}*/}
              {/*    / {shortDateTime(next.date_time)}*/}
              {/*  </div>*/}
              {/*)}*/}
            </div>
          )
        );
      })}
    </div>
  );
}
