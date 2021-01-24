import React from "react";
import { useQuery, gql } from "@apollo/client";
import { Link } from "react-router-dom";
import classnames from "classnames";
import CircularProgress from "@material-ui/core/CircularProgress";
import Moment from "react-moment";

const LAUNCH_QUERY = gql`
  query LaunchQuery($flight_number: Int!) {
    launch(flight_number: $flight_number) {
      flight_number
      mission_name
      launch_year
      launch_success
      launch_date_local
      rocket {
        rocket_id
        rocket_name
        rocket_type
      }
    }
  }
`;
function Launch(props) {
  let { flight_number } = props.match.params;
  flight_number = parseInt(flight_number);
  const { loading, error, data } = useQuery(LAUNCH_QUERY, {
    variables: { flight_number },
  });
  if (loading) return <CircularProgress />;
  if (error) console.log("Error while fetching", error);
  const {
    mission_name,
    launch_success,
    launch_year,
    launch_date_local,
    rocket: { rocket_id, rocket_name, rocket_type },
  } = data.launch;
  return (
    <div>
      <h2 className="display-3 my-3">
        <span className="text-dark">Mission:</span>
        {mission_name}
      </h2>
      <h4 className="mb-3">Launch Details</h4>
      <ul className="list-group">
        <li className="list-group-item">
          Flight Number: {data.launch.flight_number}
        </li>
        <li className="list-group-item">Launced Year: {launch_year}</li>
        <li className="list-group-item">
          Launched at: <Moment format="DD/MM/YYYY">{launch_date_local}</Moment>
        </li>
        <li className="list-group-item">
          Launched Success:{" "}
          <span
            className={classnames({
              "text-success": launch_success,
              "text-danger": !launch_success,
            })}
          >
            {launch_success ? "Yes" : "No"}
          </span>
        </li>
      </ul>
      {/* Rocket details */}
      <h4 className="my-3 ">Rocket Details</h4>
      <ul className="list-group">
        <li className="list-group-item">Rocket Number: {rocket_id}</li>
        <li className="list-group-item">Rocket Name: {rocket_name}</li>
        <li className="list-group-item">Rocket Type: {rocket_type}</li>
      </ul>
      <Link to ="/" className="btn btn-secondary mt-3">Back</Link>
    </div>
  );
}

export default Launch;
