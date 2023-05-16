//
import { useQuery } from "@apollo/client";
import { v4 as uuidv4 } from "uuid";
// GraphQL Queries
import { LAUNCHES_QUERY } from "../graphql/queries";
// Components
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissonKey";

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      Launch
      <MissionKey />
      {loading ? "loading..." : null}
      {error ? "error" : null}
      {data ? (
        <>
          {data.launches
            .map((launch) => {
              return <LaunchItem key={uuidv4()} launch={launch} />;
            })
            .reverse()}
        </>
      ) : null}
    </>
  );
};

export default Launches;
