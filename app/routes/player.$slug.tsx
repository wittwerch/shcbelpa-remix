import React from "react";
import { DateTime } from "luxon";
import SingleColumnPage from "~/components/ui/SingleColumnPage";
import TableComponent from "~/components/ui/table/TableComponent";
import TableRow from "~/components/ui/table/TableRow";
import TableHeader from "~/components/ui/table/TableHeader";
import TableCell from "~/components/ui/table/TableCell";
import type { LoaderFunctionArgs } from "@remix-run/node";
import invariant from "tiny-invariant";
import { getPlayer } from "~/lib/api";
import { useLoaderData } from "@remix-run/react";
import { IKImage } from "imagekitio-react";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.slug, "Missing slug param");

  return await getPlayer(params.slug);
}

export default function Player({ params }: { params: { slug: string } }) {
  const { player, stats } = useLoaderData<typeof loader>();

  let age = null;
  if (player.born) {
    const birthDate = DateTime.fromISO(player.born);
    age = Math.floor(DateTime.now().diff(birthDate, "years").years);
  }

  const backgroundStyle = {
    backgroundImage: "url(/img/pattern.png)",
  };

  return (
    <SingleColumnPage>
      <div
        className="flex bg-repeat bg-center h-48 -mx-4 sm:-mx-6 lg:-mx-8"
        style={backgroundStyle}
      >
        <div className="m-auto mt-8 text-gray-700 text-4xl font-extrabold">
          {player.number && <># {player.number}</>}
        </div>
      </div>

      <div className="flex flex-col h-64 -mx-4 sm:-mx-6 lg:-mx-8 -mt-16">
        <IKImage
          path={
            player.photo
              ? `/storage/${player.photo}`
              : `/storage/empty-profile.jpg?`
          }
          transformation={[
            {
              height: "152",

              width: "152",
            },
            {
              focus: "auto",
              effectGray: "1",
            },
          ]}
          loading="lazy"
          lqip={{ active: true }}
          alt={`${player.first_name} ${player.last_name}`}
          className="bg-white w-40 h-40 rounded-full mx-auto object-cover p-1"
        />

        <h1 className="text-center text-4xl font-bold">
          {player.first_name} {player.last_name}
        </h1>
        <span className="text-center tracking-wide pt-3 text-gray-700">
          {player.height && player.height != 0 && `${player.height}cm • `}
          {player.weight && player.weight != 0 && `${player.weight}kg • `}
          {age && `Alter: ${age}`}
        </span>
      </div>

      <div className="pt-10">
        <TableComponent>
          <TableRow type="head">
            <TableHeader>Team</TableHeader>
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
              <TableCell>{stat.league.name}</TableCell>
              <TableCell>{stat.gp}</TableCell>
              <TableCell>{stat.goal}</TableCell>
              <TableCell>{stat.assist}</TableCell>
              <TableCell className="font-extrabold">{stat.points}</TableCell>
              <TableCell>
                {Number((stat.points / stat.gp).toFixed(2))}
              </TableCell>
              <TableCell>{stat.pm}</TableCell>
              <TableCell>{Number((stat.pm / stat.gp).toFixed(2))}</TableCell>
            </TableRow>
          ))}
        </TableComponent>
      </div>
    </SingleColumnPage>
  );
}
