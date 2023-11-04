import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getStats } from "~/lib/api";
import invariant from "tiny-invariant";
import StatsWithSwitcher from "~/components/StatsWithSwitcher";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, "Missing teamId param");
  invariant(params.seasonCode, "Missing seasonCode param");

  const data = await getStats(params.teamId, params.seasonCode);

  return {
    ...data,
    seasonCode: params.seasonCode,
    teamId: params.teamId,
  };
}

export default function Season() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <>
        <StatsWithSwitcher
          teamId={data.teamId}
          seasonCode={data.seasonCode}
          seasons={data.seasons}
          stats={data.stats}
        ></StatsWithSwitcher>
      </>
    </>
  );
}
