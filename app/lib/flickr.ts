import type {FlickrAlbum} from "~/types";

const FLICKR_USER_ID = "142317525@N03";

export const fetchAlbums = async () => {

    const apiUrl = "https://api.flickr.com/services/rest";
    const params = new URLSearchParams({
        method: "flickr.photosets.getList",
        api_key: process.env.FLICKR_API_KEY || "",
        user_id: FLICKR_USER_ID,
        page: "1",
        per_page: "6",
        primary_photo_extras: "url_m",
        format: "json",
        nojsoncallback: "1",
    });

    try {
        const response = await fetch(`${apiUrl}?${params.toString()}`);

        if (response.ok) {
            const json = await response.json();

            return json.photosets.photoset as FlickrAlbum[];
        } else {
            // @TODO: log error
            // throw new Error(
            //     `Failed to fetch data from Flickr API: ${response.status} - ${response.statusText}`,
            // );

            return []
        }
    }
    catch (e) {
        return []
    }

};