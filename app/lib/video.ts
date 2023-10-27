import type {Video} from "~/types";

export const fetchVideos = async () => {

    // await new Promise(resolve => setTimeout(resolve, 2000));


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
                            "away_team.slug.keyword|home_team.slug.keyword":
                                "shc-belpa-1107-nla-904033923",
                        },
                        filter_range: { created: { key: "any_time" } },
                        full_text: {},
                        full_text_boost: {},
                        sort: {
                            sort_1: "-created",
                        },
                        from: 0,
                        size: 10,
                    },
                },
            }),
        });

        // @TODO: include other teams as well

        const data = await response.json();
        return data.game_detail.hits.hits as Video[];
    }
    catch (e) {
        return [];
    }

};