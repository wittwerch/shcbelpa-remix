import React from "react";
import type { Game } from "~/types";
import SecondaryTitle from "~/components/ui/SecondaryTitle";
import TableComponent from "./ui/table/TableComponent";
import TableRow from "~/components/ui/table/TableRow";
import TableHeader from "~/components/ui/table/TableHeader";
import TableCell from "~/components/ui/table/TableCell";

type IProps = {
  game: Game;
  home: Array<{
    name: string;
    number: string;
    goals: number;
    assists: number;
  }>;
  away: Array<{
    name: string;
    number: string;
    goals: number;
    assists: number;
  }>;
};

export default function GameRoster({ game, home, away }: IProps) {
  const sortedHomePlayers = [...home].sort(
    (a, b) => b.goals + b.assists - (a.goals + a.assists),
  );
  const sortedAwayPlayers = [...away].sort(
    (a, b) => b.goals + b.assists - (a.goals + a.assists),
  );

  return (
    <>
      <SecondaryTitle>{game.home_team.club.name}</SecondaryTitle>

      <TableComponent>
        <TableRow type="head">
          <TableHeader>#</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>G</TableHeader>
          <TableHeader>A</TableHeader>
          <TableHeader className="font-bold">P</TableHeader>
        </TableRow>

        {sortedHomePlayers.map((player, index) => (
          <TableRow key={index} index={index}>
            <TableCell>#{player.number}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.goals}</TableCell>
            <TableCell>{player.assists}</TableCell>
            <TableCell>{player.goals + player.assists}</TableCell>
          </TableRow>
        ))}
      </TableComponent>

      <SecondaryTitle className="mt-8">
        {game.away_team.club.name}
      </SecondaryTitle>

      <TableComponent>
        <TableRow type="head">
          <TableHeader>#</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>G</TableHeader>
          <TableHeader>A</TableHeader>
          <TableHeader className="font-bold">P</TableHeader>
        </TableRow>

        {sortedAwayPlayers.map((player, index) => (
          <TableRow key={index} index={index}>
            <TableCell>#{player.number}</TableCell>
            <TableCell>{player.name}</TableCell>
            <TableCell>{player.goals}</TableCell>
            <TableCell>{player.assists}</TableCell>
            <TableCell>{player.goals + player.assists}</TableCell>
          </TableRow>
        ))}
      </TableComponent>
    </>
  );
}
