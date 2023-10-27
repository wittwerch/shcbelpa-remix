import type {BlogPost, Game, Player, Season, Sponsor, Stat, Table, Team,PlayerWithPosition} from '~/types';

export const apiEndpoint = process.env.API_ENDPOINT || "http://localhost:8117";

type homeResponse = {
  games: Array<{
    last: Game;
    next: Game;
  }>;
  posts: BlogPost[];
  teams: Team[];
};

export const homeData = async () => {
  const res = await fetch(`${apiEndpoint}/api/home`, {
    cache: "no-cache",
  });
  return (await res.json()) as homeResponse;
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
