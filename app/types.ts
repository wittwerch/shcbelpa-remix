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

export type Event = {
  time: string;
  type: "penalty" | "goal" | "period" | string;
  result?: string | null;
  team: string;
  player: string;
  assist1?: string | null;
  assist2?: string | null;
  penalty?: string | null;
  description?: string | null;
};

export type GameWithEvents = {
  game: Game;
  events: Event[];
  roster: {
    home: Array<{
      name: string;
      number: string;
      goals: number;
      assists: number;
    }>;
    away: Array<{
      name: string;
      number: string;
      goals: number;
      assists: number;
    }>;
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
  _index: string;
  _type: string;
  _id: string;
  _score: number | null;
  _source: {
    country: {
      header_image: string | null;
      postroll_images: any[];
      code: string;
      flag: string;
      created: string;
      prefix: string;
      is_removed: boolean;
      language: string;
      disable_all_ads: boolean;
      video_branding: string | null;
      visible_in_filter: boolean;
      preroll_videos: any[];
      name: string;
      modified: string;
      id: number;
      disable_registration: boolean;
      disable_postroll: boolean;
      header_image_url: string | null;
      slug: string;
      order: number;
    };
    paused: string;
    num_of_videos: number;
    user_name: string;
    watermark_views: any[];
    total_views: number;
    is_livestream: boolean;
    is_removed: boolean;
    break_duration: number;
    away_team: {
      ext_id: string | null;
      created: string;
      name: string;
      club: any;
      team_type_id: number;
      team_type: string;
      id: number;
      slug: string;
      status: string;
    };
    home_goals: number;
    banner_views: any[];
    clubs: number[];
    modified: string;
    id: number;
    slug: string;
    postroll_views: any[];
    recording_started: string;
    thumbnail: string;
    header_views: any[];
    teams: number[];
    leagues: string[];
    created: string;
    league: {
      channel: any;
      name: string;
      country_slug: string;
      id: number;
      sports_slug: string;
      sport: any;
      url: string;
      slug: string;
    };
    offline_id: string;
    away_goals: number;
    version: string;
    url: string;
    iframe_url: string;
    name: string;
    status_from_mobile: string;
    imei: string;
    country_slug: string;
    preroll_views: any[];
    sports_slug: string;
    home_team: {
      ext_id: string | null;
      created: string;
      name: string;
      club: any;
      team_type_id: number;
      team_type: string;
      id: number;
      slug: string;
      status: string;
    };
    resumed: string;
    status_changed: string;
    user: number;
    status: string;
  };
  sort: number[];
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
