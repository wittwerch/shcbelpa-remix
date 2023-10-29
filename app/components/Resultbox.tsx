import CalendarDaysIcon from "@heroicons/react/20/solid/CalendarDaysIcon";
import {
  atHome,
  getAwayGoals,
  getHomeGoals,
  toOvertime,
  toShootout,
} from "~/lib/game";
import type { Game } from "~/types";
import PrimaryTitle from "~/components/ui/primary-title";
import { TeamLogo } from "~/components/ui/TeamLogo";
import { shortDateTime } from "~/lib/date";
import { cn } from "~/lib/lib";

// create props to pass to the component
type IProps = {
  games: Array<{
    last: Game;
    next: Game;
  }>;
};

export default function Resultbox({ games }: IProps) {
  return (
    <div className="">
      <PrimaryTitle>Resultate</PrimaryTitle>

      {games.map(({ last, next }) => {
        return (
          last && (
            <div
              key={last.id}
              className="flex flex-col mb-5 border rounded-md p-4 divide-y divide-gray-400 md:divide-gray-200 bg-gray-200 md:bg-gray-100"
            >
              <div className="pb-2">
                <div>
                  <span className="inline-flex items-center rounded-md bg-gray-100 px-2 py-1 text-xs font-bold text-gray-600">
                    {last.league.name} {last.game_type.name}{" "}
                    {toOvertime(last) && "/ n.V."}{" "}
                    {toShootout(last) && "/ n.P."}
                  </span>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <div className="flex flex-row items-center">
                    <div>
                      <TeamLogo team={last.home_team}></TeamLogo>
                    </div>
                    <div className="ml-1">{last.home_team.club.name}</div>
                  </div>
                  <div className="font-bold">{getHomeGoals(last)}</div>
                </div>

                <div className="flex flex-row justify-between items-center mt-2">
                  <div className="flex flex-row items-center">
                    <div>
                      <TeamLogo team={last.away_team}></TeamLogo>
                    </div>
                    <div className="ml-1">{last.away_team.club.name}</div>
                  </div>
                  <div className="font-bold">{getAwayGoals(last)}</div>
                </div>
              </div>
              {next && (
                <div className="pt-2 text-sm md:text-xs leading-5 font-bold text-gray-600 md:text-gray-500 truncate flex flex-row items-center">
                  <CalendarDaysIcon
                    className={cn(
                      atHome(next) ? "text-red-700" : "",
                      "h-4 mr-1",
                    )}
                  />
                  {atHome(next)
                    ? `${next.away_team.club.code} (in Belp)`
                    : `${next.home_team.club.code} (auswärts)`}
                  / {shortDateTime(next.date_time)}
                </div>
              )}
            </div>
          )
        );

        // return (
        //   <div className="" key={game.id}>
        //     <h4 className="my-4 text-center text-sm text-gray-600 border-t-2 pt-4 font-semibold">
        //       {game.league_id} &bull; {game.game_type_id}
        //     </h4>
        //
        //     <div className="flex justify-center items-center flex-row w-50 pb-4">
        //       <div className="w-1/5 my-auto text-right font-semibold text-gray-700 text-lg md:text-base">
        //         {game.home_team_id}
        //       </div>
        //       <div className="w-1/5">
        //         <img
        //           className="w-auto h-12 md:h-6 mx-auto"
        //           src="https://shcbelpa.ch/storage/logos/qbUhDc36dE5fquyj09p0BA47DquNH6MjW93fiW1x.png"
        //         />
        //       </div>
        //       <div className="w-1/5 my-auto text-center bg-red-500 text-white font-bold border-r-2">
        //         {game.result}
        //       </div>
        //       <div className="w-1/5">
        //         <img
        //           className="w-auto h-12 md:h-6 mx-auto"
        //           src="https://shcbelpa.ch/storage/logos/qbUhDc36dE5fquyj09p0BA47DquNH6MjW93fiW1x.png"
        //         />
        //       </div>
        //       <div className="w-1/5 my-auto font-semibold text-gray-700 text-lg md:text-base">
        //         {game.away_team_id}
        //       </div>
        //     </div>
        //   </div>
        // );
      })}
    </div>
  );
}
