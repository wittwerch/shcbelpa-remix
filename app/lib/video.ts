import type { Video } from "~/types";

export const fetchVideos = async () => {
  // await new Promise(resolve => setTimeout(resolve, 2000));

  const teams = [
    "shc-belpa-1107-nla-904033923",
    "shc-belpa-1107-2-liga-904033924",
    "shc-belpa-1107-u18-904033925",
    "shc-belpa-1107-u15-904043337",
    "shc-belpa-1107-u12-904043338",
    "shc-belpa-1107-damen-904043362",
  ];

  try {
    const response = await fetch("https://sport.video/search/search-api/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search_data: {
          game_detail: {
            index_name: "game",
            filter: {
              "league.channel.slug.keyword": "streethockey",
              "away_team.slug.keyword|home_team.slug.keyword": teams.join("|"),
            },
            filter_range: { created: { key: "any_time" } },
            full_text: {},
            full_text_boost: {},
            sort: {
              sort_1: "-created",
            },
            from: 0,
            size: 9,
          },
        },
      }),
    });

    // @TODO: include other teams as well

    const data = await response.json();
    return data.game_detail.hits.hits as Video[];
  } catch (e) {
    return [];
  }
};
