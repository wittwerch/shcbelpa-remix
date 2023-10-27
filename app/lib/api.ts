import type {BlogPost, Game, Player, PlayerWithPosition, Season, Sponsor, Stat, Table, Team} from '~/types';

export const apiEndpoint = process.env.API_ENDPOINT || "http://localhost:8117";

type resultsResponse = {
  games: Array<{
    last: Game;
    next: Game;
  }>;
};

export const fetchResults = async () => {
  const res = await fetch(`${apiEndpoint}/api/results`);
  return (await res.json()) as resultsResponse;
};

export const getSeason = async (teamId: string | number, seasonCode: string) => {
  const res = await fetch(
      `${apiEndpoint}/api/${teamId}/season/${seasonCode}`
  );

  return (await res.json()) as {
    team: Team;
    seasons: Season[];
    games: Game[];
    table: Table,
  };
};

export const getRoster = async (teamId: string | number) => {
  const res = await fetch(`${apiEndpoint}/api/roster/${teamId}`);

  return (await res.json()) as {
    team: Team;
    players: PlayerWithPosition[];
  };
};


export const currentSeason = async (teamId: string | number) => {
  const res = await fetch(`${apiEndpoint}/api/${teamId}/season`, {
    cache: "no-cache",
  });
  return (await res.json()) as Season;
};

type statsResponse = {
  team: Team;
  selectedSeason: Season;
  seasons: Season[];
  stats: {
    [key: string]: Stat[];
  };
};

export const getStats = async (teamId: string | number, seasonCode: string) => {
  const res = await fetch(`${apiEndpoint}/api/${teamId}/stats/${seasonCode}`, {
    cache: "no-cache",
  });
  return (await res.json()) as statsResponse;
};

type playerResponse = {
  player: Player;
  stats: Stat[];
};

export const getPlayer = async (slug: string) => {
  const res = await fetch(`${apiEndpoint}/api/player/${slug}`);
  return (await res.json()) as playerResponse;
};

export const getPlayers = async () => {
  const res = await fetch(`${apiEndpoint}/api/player`);
  return (await res.json()) as Player[];
};

export const fetchLatestPosts = async () => {
  const json = await fetch(`${apiEndpoint}/api/blog/latest`).then((res) => res.json());

  return json as BlogPost[];
};

export const getBlogPosts = async () => {
  const json = await fetch(`${apiEndpoint}/api/blog`).then((res) => res.json());

  return json.posts as BlogPost[];
};

export const getBlogPost = async (slug: string) => {
  const res = await fetch(`${apiEndpoint}/api/blog/${slug}`, {
    cache: "no-cache",
  });

  return (await res.json()) as BlogPost;
};

export const getSponsors = async () => {
  const json = await fetch(`${apiEndpoint}/api/sponsoring`).then((res) =>
    res.json(),
  );

  return json as Sponsor[];
};

export const fetchTeams = async () => {
  const json = await fetch(`${apiEndpoint}/api/teams`).then((res) =>
      res.json(),
  );

  return json as Team[];
};
