import type { LoaderFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getRoster } from "~/lib/api";
import invariant from "tiny-invariant";
import PlayerList from "~/components/PlayerList";

export async function loader({ params }: LoaderFunctionArgs) {
  invariant(params.teamId, "Missing teamId param");

  const data = await getRoster(params.teamId);

  return {
    ...data,
  };
}

export default function Page() {
  const data = useLoaderData<typeof loader>();

  return (
    <>
      <PlayerList players={data.players}></PlayerList>
    </>
  );
}
