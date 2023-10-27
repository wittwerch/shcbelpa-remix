import React from "react";
import type {Table} from "~/types";
import SecondaryTitle from "./ui/secondary-title";
import TableComponent from "~/components/ui/table/TableComponent";
import TableRow from "~/components/ui/table/TableRow";
import TableHeader from "~/components/ui/table/TableHeader";
import TableCell from "~/components/ui/table/TableCell";

type IProps = {
  table: Table;
};

export default function Standings({ table }: IProps) {
  if (table.length === 0) {
    return null;
  }

  return (
    <>
      <SecondaryTitle>Tabelle</SecondaryTitle>

      <TableComponent>
        <TableRow type="head">
          <TableHeader>#</TableHeader>
          <TableHeader>Team</TableHeader>
          <TableHeader>SP</TableHeader>
          <TableHeader>Tore</TableHeader>
          <TableHeader>Punkte</TableHeader>
        </TableRow>

        {table.map((line, index) => (
          <TableRow
            key={line.team.club.code}
            index={index}
            className={
              line.team.club.name == "SHC Belpa 1107" ? "bg-red-100" : ""
            }
          >
            <TableCell>{index + 1}</TableCell>
            <TableCell className="md:hidden">{line.team.club.code}</TableCell>
            <TableCell className="hidden md:block">
              {line.team.club.name}
            </TableCell>
            <TableCell>{line.gp}</TableCell>
            <TableCell>{line.diff}</TableCell>
            <TableCell>{line.points}</TableCell>
          </TableRow>
        ))}
      </TableComponent>
    </>
  );
}
