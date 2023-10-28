import type { Team } from "~/types";
import { IKImage } from "imagekitio-react";
import React from "react";

export function TeamLogo({ team }: { team: Team }) {
  return (
    <IKImage
      path={team.club.logo ? `/storage/${team.club.logo}` : "/img/nologo.png"}
      transformation={[
        {
          height: "32",
          width: "32",
        },
      ]}
      className="h-8"
      alt={`Logo ${team.club.name}`}
    />
  );
}
