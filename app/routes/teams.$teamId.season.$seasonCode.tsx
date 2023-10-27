import type {LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import GamesWithSwitcher from "~/components/GamesWithSwitcher";
import Standings from "~/components/Standings";
import {getSeason} from "~/lib/api";
import invariant from "tiny-invariant";

export async function loader({ params, }: LoaderFunctionArgs) {

    invariant(params.teamId, "Missing teamId param");
    invariant(params.seasonCode, "Missing seasonCode param");

    const data = await getSeason(params.teamId, params.seasonCode);

    // wait 2s
    // await new Promise(resolve => setTimeout(resolve, 2000));

    return {
        ...data,
        seasonCode: params.seasonCode,
        teamId: params.teamId
    }
}

export default function Season() {

    const data = useLoaderData<typeof loader>();

    return  <>

        <>
            <GamesWithSwitcher
                teamId={data.teamId}
                seasonCode={data.seasonCode}
                seasons={data.seasons}
                games={data.games}
            ></GamesWithSwitcher>
            <div className="py-10">
                <Standings table={data.table}></Standings>
            </div>
        </>
    </>

}