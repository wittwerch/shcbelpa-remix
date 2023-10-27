import type {Team} from "~/types";

export function TeamLogo({ team }: { team: Team }) {
  return (
    <img
      height={32}
      width={32}
      className="h-8"
      src={
        team.club.logo
          ? `https://shcbelpa.ch/storage/${team.club.logo}`
          : "/img/nologo.png"
      }
      alt={`Logo ${team.club.name}`}
    />
  );
}
