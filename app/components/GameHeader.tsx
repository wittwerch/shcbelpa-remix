import type { Game } from "~/types";
import React from "react";
import { formatDateFromIsoString } from "~/lib/date";
import { DateTime } from "luxon";
import { TeamLogo } from "~/components/ui/TeamLogo";

export function GameHeader({ game }: { game: Game }) {
  const result = game.result.split(" ");

  return (
    <div className="py-6 flex flex-col sm:py-8">
      <div className="flex flex-col items-center text-sm">
        <span>
          {formatDateFromIsoString(game.date_time)} -{" "}
          {DateTime.fromISO(game.date_time, {
            zone: "Europe/Zurich",
          }).toFormat("HH:mm")}
        </span>
        <span>{game.location}</span>
      </div>

      <div className="flex flex-row border-gray-300 border bg-gray-100 text-sm mt-4 justify-center items-center gap-x-6 p-4">
        <TeamLogo size="l" team={game.home_team} />
        <div className="text-xl sm:text-2xl">{game.home_team.club.code}</div>

        <div className="flex flex-row gap-y-2 items-center">
          <span className="text-3xl tracking-widest">{result[0]}</span>{" "}
          {result[1] && <span className="text-xs ml-2">{result[1]}</span>}
        </div>

        <div className="text-2xl">{game.away_team.club.code}</div>
        <TeamLogo size="l" team={game.away_team} />
      </div>
    </div>
  );
}
