import {DateTime} from "luxon";
import React from "react";
import type {Game} from "~/types";
import TableComponent from "~/components/ui/table/TableComponent";
import TableRow from "~/components/ui/table/TableRow";
import TableCell from "~/components/ui/table/TableCell";
import {formatDateFromIsoString} from "~/lib/date";
import {TeamLogo} from "~/components/ui/TeamLogo";

type IProps = {
  games: Game[];
};

export default function GameList({ games }: IProps) {
  return (
    <TableComponent>
      {games.map((game, index) => (
        <TableRow key={index} index={index}>
          <TableCell className="hidden xl:block">{index + 1}</TableCell>
          <TableCell>
            {formatDateFromIsoString(game.date_time)} <br />
            <span className="text-xs leading-5 font-semibold text-gray-500">
              {DateTime.fromISO(game.date_time, {
                zone: "Europe/Zurich",
              }).toFormat("HH:mm")}
            </span>{" "}
            <br />
            <span className="text-xs leading-5 font-semibold text-gray-500 md:hidden">
              {game.game_type.name}
            </span>
          </TableCell>
          <TableCell className="text-xs leading-5 font-semibold text-gray-500 hidden md:block">
            {game.game_type.name}
          </TableCell>
          <TableCell>
            <div className="flex flex-row items-center">
              <div className="mx-4 hidden sm:block">
                <TeamLogo team={game.home_team} />
              </div>
              <span className="hidden lg:block">
                {game.home_team.club.name}
              </span>
              <span className="lg:hidden">{game.home_team.club.code}</span>
            </div>
          </TableCell>
          <TableCell className="font-extrabold">{game.result}</TableCell>
          <TableCell>
            <div className="flex flex-row items-center">
              <span className="hidden lg:block">
                {game.away_team.club.name}
              </span>
              <span className="lg:hidden">{game.away_team.club.code}</span>
              <div className="mx-4 hidden sm:block">
                <TeamLogo team={game.away_team} />
              </div>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableComponent>
  );
}
