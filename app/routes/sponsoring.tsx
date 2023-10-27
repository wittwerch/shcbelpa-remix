import type {Sponsor} from "~/types";
import {getSponsors} from "~/lib/api";
import type {LoaderFunctionArgs} from "@remix-run/node";
import {useLoaderData} from "@remix-run/react";
import SingleColumnPage from "~/components/ui/SingleColumnPage";
import PrimaryTitle from "~/components/ui/primary-title";

const IMAGEKIT_PARAMS = "tr=w-252";

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => (
  <div className="flex flex-col rounded-lg shadow-md overflow-hidden">
    <a href={sponsor.url} target="_blank" className="block" rel="noreferrer">
      <div className="flex-shrink-0">
        <img
          width={252}
          height={192}
          className="h-48 w-full object-contain"
          src={`https://ik.imagekit.io/shcbelpa/${sponsor.logo}?${IMAGEKIT_PARAMS}`}
          alt={sponsor.name}
        />
      </div>
      <div className="flex-1 bg-white p-6 flex flex-col justify-between">
        <div className="flex-1">
          <h3 className="mt-2 text-xl leading-7 text-center font-semibold text-gray-900">
            {sponsor.name}
          </h3>
        </div>
      </div>
    </a>
  </div>
);

export async function loader({ params, }: LoaderFunctionArgs) {
    const sponsors = await getSponsors();
    return { sponsors }
}

export default function Page() {

    const data = useLoaderData<typeof loader>();

  return (
    <SingleColumnPage>
      <PrimaryTitle>Sponsoren</PrimaryTitle>

      <div className="mt-3 max-w-2xl text-xl leading-7 text-gray-500 sm:mt-4">
        Ein grosses Merci an unsere treuen Sponsoren!
      </div>

      <div className="bg-white mt-12 grid gap-12 max-w-lg mx-auto md:grid-cols-2 lg:grid-cols-4 lg:max-w-none">
        {data.sponsors.map((sponsor, index) => (
          <SponsorCard key={index} sponsor={sponsor} />
        ))}
      </div>
    </SingleColumnPage>
  );
}
