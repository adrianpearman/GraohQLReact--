// NPM Modules
import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
// GraphQL Queries
import { LAUNCH_QUERY } from "../graphql/queries";

const Launch = () => {
  const { flight_number } = useParams();
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number: parseInt(flight_number) },
  });

  return (
    <div>
      {loading ? "loading..." : null}
      {error ? "error" : null}
      {data ? (
        <div>
          <h1 className="display-4 my-3">
            Mission:{" "}
            <span className="text-dark">{data.launch.mission_name}</span>
          </h1>
          <h4 className="mb-3">Launch Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Flight Number: {data.launch.flight_number}
            </li>
            <li className="list-group-item">
              Launch Year: {data.launch.launch_year}
            </li>
            <li className="list-group-item">
              Launch Successful:
              <span
                className={
                  data.launch.launch_success ? "text-success" : "text-danger"
                }
              >
                {data.launch.launch_success ? "Yes" : "No"}
              </span>
            </li>
          </ul>
          <h4 className="my-3">Rocket Details</h4>
          <ul className="list-group">
            <li className="list-group-item">
              Rocket ID: {data.launch.rocket.rocket_id}
            </li>
            <li className="list-group-item">
              Rocket Name: {data.launch.rocket.rocket_name}
            </li>
            <li className="list-group-item">
              Rocket Type: {data.launch.rocket.rocket_type}
            </li>
          </ul>
          <hr />
          <Link className="btn btn-secondary" to="/">
            Back
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Launch;
