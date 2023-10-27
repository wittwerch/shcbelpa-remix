export type Season = {
  id: number;
  start_date: string;
  end_date: string;
  code: string;
  lm_id: number | null;
};

export type Club = {
  id: number;
  name: string;
  code: string;
  city: string;
  website: string;
  created_at: string | null;
  updated_at: string;
  logo: string;
  aliases: (string | null)[];
};

export type League = {
  id: number;
  name: string;
  is_junior: number;
  created_at: string;
  updated_at: string;
};

export type Team = {
  id: number;
  club_id: number;
  league_id: number;
  level: string;
  club: Club;
  league: League;
};

export type Game = {
  id: number;
  season_id: number;
  league_id: number;
  game_type_id: number;
  home_team_id: number;
  away_team_id: number;
  date_time: string;
  location: string;
  result: string;
  lm_id: number;
  home_team: Team;
  away_team: Team;
  game_type: {
    id: number;
    name: string;
    created_at: string | null;
    updated_at: string | null;
  };
  league: League;
  season: {
    id: number;
    start_date: string;
    end_date: string;
    code: string;
    lm_id: number | null;
    created_at: string;
    updated_at: string;
  };
};

export type Player = {
  id: number;
  first_name: string;
  last_name: string;
  number: string;
  born: string; // You might want to use a Date type here
  height: number | null;
  weight: number | null;
  shoots: string | null;
  photo: string;
  slug: string;
  created_at: string | null; // You might want to use a Date type here
  updated_at: string | null; // You might want to use a Date type here
  background: string | null;
};

export type PlayerWithPosition = {
  player: Player;
  position: string;
};

export type Stat = {
  league: League;
  player: Player;
  gp: number;
  goal: number;
  assist: number;
  points: number;
  pm: number;
};

export type Video = {
  _id: string;
  _source: {
    thumbnail: string;
    name: string;
    slug: string;
  };
};

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  content: string;
  user: {
    name: string;
    email: string;
  };
  slug: number;
  publish_date: string;
};

export type TableLine = {
  id: number;
  season_id: number;
  league_id: number;
  game_type_id: number;
  position: number;
  team: Team;
  gp: number;
  win: number;
  loss: number;
  tie: number;
  diff: string;
  points: number;
  created_at: string | null;
  updated_at: string;
};

export type Table = TableLine[];

export type Sponsor = {
  id: number;
  name: string;
  address: string;
  url: string;
  logo: string;
  created_at: string | null; // You might want to use a Date type here
  updated_at: string; // You might want to use a Date type here
};

export type FlickrAlbum = {
  id: string;
  owner: string;
  username: string;
  primary: string;
  secret: string;
  server: string;
  farm: number;
  count_views: string;
  count_comments: string;
  count_photos: number;
  count_videos: number;
  title: {
    _content: string;
  };
  description: {
    _content: string;
  };
  can_comment: number;
  date_create: string;
  date_update: string;
  photos: number;
  videos: number;
  visibility_can_see_set: number;
  needs_interstitial: number;
  primary_photo_extras: {
    url_m: string;
    height_m: number;
    width_m: number;
  };
};
