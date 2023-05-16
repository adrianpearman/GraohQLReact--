// import React from "react";
import { Link } from "react-router-dom";

const LaunchItem = ({ launch }) => {
  const { flight_number, launch_date_local, launch_success, mission_name } =
    launch;
  return (
    <div className="card card-body mb-3">
      <div className="row">
        <div className="col-md-9">
          <h4>
            Mission:
            <span className={launch_success ? "text-success" : "text-danger"}>
              {mission_name}
            </span>
          </h4>
          <p>Date: {launch_date_local}</p>
        </div>
        <div className="col-md-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            Launch Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LaunchItem;
