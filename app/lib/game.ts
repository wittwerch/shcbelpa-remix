import type {Game} from "~/types";

export const toOvertime = (game: Game) => {
  return game.result.includes("n.V.");
};

export const toShootout = (game: Game) => {
  return game.result.includes("n.P.");
};

export const atHome = (game: Game) => {
  return game.home_team.club.name === "SHC Belpa 1107";
};

export const getHomeGoals = (game: Game) => {
  if (game.result) {
    return game.result.split(":")[0];
  }
  return "";
};

export const getAwayGoals = (game: Game) => {
  if (game.result) {
    if (toOvertime(game) || toShootout(game)) {
      return game.result.split(":")[1].split(" ")[0];
    } else {
      return game.result.split(":")[1];
    }
  }
  return "";
};
