import { DateTime } from "luxon";
import React from "react";
import type { Game } from "~/types";
import { formatDateFromIsoString } from "~/lib/date";
import { TeamLogo } from "~/components/ui/TeamLogo";
import PrimaryTitle from "~/components/ui/PrimaryTitle";

type IProps = {
  games: Game[];
};

export default function UpcomingGames({ games }: IProps) {
  if (games.length === 0) {
    return <></>;
  }

  return (
    <>
      <div className="">
        <div className="mx-auto max-w-2xl px-4 pb-8 sm:px-6 sm:pb-12 lg:max-w-7xl lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <PrimaryTitle>Nächsten Spiele</PrimaryTitle>
          </div>

          <ul role="list">
            {games.map((game) => (
              <li
                key={game.id}
                className="flex py-4 divide-gray-200 sm:py-2 items-center"
              >
                <div className="w-96 flex flex-col sm:flex-row sm:items-center justify-between bg-gray-100 p-4">
                  <div className="flex flex-row sm:items-center">
                    <div>
                      {formatDateFromIsoString(game.date_time)}{" "}
                      <span className="sm:hidden">
                        (
                        {DateTime.fromISO(game.date_time, {
                          zone: "Europe/Zurich",
                        }).toFormat("HH:mm")}
                        )
                      </span>{" "}
                      <br />
                      <span className="hidden sm:block text-xs leading-5 font-semibold text-gray-500">
                        {DateTime.fromISO(game.date_time, {
                          zone: "Europe/Zurich",
                        }).toFormat("HH:mm")}
                      </span>{" "}
                    </div>
                    <div className="sm:text-xs ml-8 sm:leading-5 font-semibold sm:text-gray-500">
                      {game.league.name}
                    </div>
                  </div>

                  <div>
                    <div className="mt-4 sm:ml-8 flex flex-row gap-x-2 justify-start items-center">
                      <div>
                        <TeamLogo team={game.home_team} />
                      </div>
                      <div>{game.home_team.club.code}</div>
                      <div className="font-bold">vs.</div>
                      <div>{game.away_team.club.code}</div>
                      <div>
                        <TeamLogo team={game.away_team} />
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/*<TableComponent>*/}
          {/*  {games.map((game, index) => (*/}
          {/*    <TableRow key={index} index={index}>*/}
          {/*      <TableCell>*/}
          {/*        {formatDateFromIsoString(game.date_time)} <br />*/}
          {/*        <span className="text-xs leading-5 font-semibold text-gray-500">*/}
          {/*          {DateTime.fromISO(game.date_time, {*/}
          {/*            zone: "Europe/Zurich",*/}
          {/*          }).toFormat("HH:mm")}*/}
          {/*        </span>{" "}*/}
          {/*        <br />*/}
          {/*        <span className="text-xs leading-5 font-semibold text-gray-500 md:hidden">*/}
          {/*          {game.league.name}*/}
          {/*        </span>*/}
          {/*      </TableCell>*/}
          {/*      <TableCell className="text-xs leading-5 font-semibold text-gray-500 hidden md:block">*/}
          {/*        {game.league.name}*/}
          {/*      </TableCell>*/}
          {/*      <TableCell>*/}
          {/*        <div className="flex flex-row items-center">*/}
          {/*          <div className="mx-4 hidden sm:block">*/}
          {/*            <TeamLogo team={game.home_team} />*/}
          {/*          </div>*/}
          {/*          <span>{game.home_team.club.code}</span>*/}
          {/*        </div>*/}
          {/*      </TableCell>*/}
          {/*      <TableCell>*/}
          {/*        <div className="flex flex-col items-center">*/}
          {/*          <div className="font-extrabold">vs.</div>*/}
          {/*        </div>*/}
          {/*      </TableCell>*/}
          {/*      <TableCell>*/}
          {/*        <div className="flex flex-row items-center">*/}
          {/*          <span>{game.away_team.club.code}</span>*/}
          {/*          <div className="mx-4 hidden sm:block">*/}
          {/*            <TeamLogo team={game.away_team} />*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*      </TableCell>*/}
          {/*    </TableRow>*/}
          {/*  ))}*/}
          {/*</TableComponent>*/}
        </div>
      </div>
    </>
  );
}
