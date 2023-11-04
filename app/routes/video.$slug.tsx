import SingleColumnPage from "~/components/ui/SingleColumnPage";
import PrimaryTitle from "~/components/ui/primary-title";
import { useParams } from "@remix-run/react";

export default function Page() {
  const params = useParams();

  return (
    <SingleColumnPage>
      <PrimaryTitle>Highlight Video</PrimaryTitle>
      <div className="pt-10">
        <iframe
          width="100%"
          height="900px"
          src={`https://sport.video/embed-game/${params.slug}/7beec0c6-d5c5-45df-9f7b-ca5b113accf9`}
          scrolling="no"
          frameBorder="0"
        ></iframe>
      </div>
    </SingleColumnPage>
  );
}
