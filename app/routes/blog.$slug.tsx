import SingleColumnPage from "~/components/ui/SingleColumnPage";
import PrimaryTitle from "~/components/ui/primary-title";
import {useLoaderData} from "@remix-run/react";
import {getPost} from "~/lib/api";
import type {LoaderFunctionArgs} from "@remix-run/node";
import invariant from "tiny-invariant";
import {formatDateFromIsoString} from "~/lib/date";

export const loader = async ({ params, }: LoaderFunctionArgs) => {

    invariant(params.slug, "params.slug is required");

    return await getPost(params.slug);
};

export default function Blog() {
    const { title, description, content, user, publish_date } = useLoaderData<typeof loader>();

    return (
        <SingleColumnPage>
            <PrimaryTitle>{title}</PrimaryTitle>
            <div className="py-4 font-semibold">{description}</div>
            <div dangerouslySetInnerHTML={{ __html: content }} />
            <div className="py-4 font-semibold">
                {user.name}, {formatDateFromIsoString(publish_date)}
            </div>
        </SingleColumnPage>
    );
}