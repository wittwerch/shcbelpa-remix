import type {LinksFunction} from "@remix-run/node";
import {Links, LiveReload, Meta, Outlet, Scripts, ScrollRestoration, useLoaderData,} from "@remix-run/react";
import stylesheet from "~/tailwind.css";
import Footer from "~/components/ui/Footer";
import {NavBar} from "~/components/ui/NavBar";
import {fetchTeams} from "~/lib/api";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export const loader = async () => {

    // @TODO: Use a getTeams call here
    const teams = await fetchTeams();

    return { teams };
};

export default function App() {

    const data = useLoaderData<typeof loader>();

  return (
    <html lang="en" className="h-full bg-gray-100">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">

      <div className={`min-h-full`}>
        <NavBar teams={data.teams} />
        <Outlet />
      </div>
      <Footer />

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
