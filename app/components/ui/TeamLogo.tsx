import type { Team } from "~/types";
import { IKImage } from "imagekitio-react";
import React from "react";

const logoSizeConfig = {
  xs: {
    className: "h-4",
    height: 16,
    width: 16,
  },
  m: {
    className: "h-8",
    height: 32,
    width: 32,
  },
  l: {
    className: "h-12 sm:h-16",
    height: 64,
    width: 64,
  },
};

export function TeamLogo({
  team,
  size = "m",
}: {
  team: Team;
  size?: "xs" | "m" | "l";
}) {
  const sizeConfig = logoSizeConfig[size] || logoSizeConfig.m; // Default to 'm' if size is not recognized

  return (
    <IKImage
      path={team.club.logo ? `/storage/${team.club.logo}` : "/img/nologo.png"}
      transformation={[
        {
          height: sizeConfig.height.toString(),
          width: sizeConfig.width.toString(),
        },
      ]}
      className={sizeConfig.className}
      alt={`Logo ${team.club.name}`}
    />
  );
}
