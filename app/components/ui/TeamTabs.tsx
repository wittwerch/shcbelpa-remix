import React from "react";
import { NavLink, useParams } from "@remix-run/react";
import { cn } from "~/lib/utils";

import type { Season, Team } from "~/types";

export type Tab = {
  name: string;
  href: string;
  match: string;
};

interface IProps {
  team: Team;
  season: Season;
}

export function TeamTabs({ team, season }: IProps) {
  const params = useParams();

  const teamId = team.id;

  // Fallback to season from loader data if not in params (on roster page for example)
  const seasonCode = params.seasonCode || season.code;

  const tabs: Tab[] = [
    {
      name: "Spiele",
      href: `/${teamId}/season/${seasonCode}`,
      match: "season",
    },
    {
      name: "Kader",
      href: `/${teamId}/players`,
      match: "players",
    },
    {
      name: "Stats",
      href: `/${teamId}/stats/${seasonCode}`,
      match: "stats",
    },
  ];

  return (
    <nav
      className="flex space-x-4 border-b-2 border-gray-300"
      aria-label="Tabs"
    >
      {tabs.map((tab) => (
        <NavLink
          key={tab.name}
          to={tab.href}
          className={({ isActive }) =>
            cn(
              isActive ? "bg-gray-200 text-red-700" : "",
              "px-3 py-2 text-sm font-medium mt-4",
            )
          }
        >
          {tab.name}
        </NavLink>
      ))}
    </nav>
  );
}
