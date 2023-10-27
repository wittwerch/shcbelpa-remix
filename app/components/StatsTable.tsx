import React from "react";
import type {Stat} from "~/types";
import SecondaryTitle from "~/components/ui/secondary-title";
import TableComponent from "./ui/table/TableComponent";
import TableRow from "~/components/ui/table/TableRow";
import TableHeader from "~/components/ui/table/TableHeader";
import TableCell from "~/components/ui/table/TableCell";

type IProps = {
  title: string;
  stats: Stat[];
};

export default function StatsTable({ title, stats }: IProps) {
  return (
    <>
      <SecondaryTitle>{title}</SecondaryTitle>

      <TableComponent>
        <TableRow type="head">
          <TableHeader className="hidden md:block">#</TableHeader>
          <TableHeader>Name</TableHeader>
          <TableHeader>GP</TableHeader>
          <TableHeader>G</TableHeader>
          <TableHeader>A</TableHeader>
          <TableHeader>P</TableHeader>
          <TableHeader>ØP</TableHeader>
          <TableHeader>PIM</TableHeader>
          <TableHeader>ØPIM</TableHeader>
        </TableRow>

        {stats.map((stat, index) => (
          <TableRow key={index} index={index}>
            <TableCell className="hidden md:block">{index + 1}</TableCell>
            <TableCell>
              {stat.player.first_name} {stat.player.last_name}
            </TableCell>
            <TableCell>{stat.gp}</TableCell>
            <TableCell>{stat.goal}</TableCell>
            <TableCell>{stat.assist}</TableCell>
            <TableCell className="font-extrabold">{stat.points}</TableCell>
            <TableCell>{Number((stat.points / stat.gp).toFixed(2))}</TableCell>
            <TableCell>{stat.pm}</TableCell>
            <TableCell>{Number((stat.pm / stat.gp).toFixed(2))}</TableCell>
          </TableRow>
        ))}
      </TableComponent>
    </>
  );
}
