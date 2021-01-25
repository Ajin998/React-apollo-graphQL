import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import CircularProgress from "@material-ui/core/CircularProgress";
const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;
function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);

  if (loading) return <CircularProgress />;
  if (error) console.log(error);
  return (
    <>
      <h1 className="display-4 my-3">Launches</h1>
      <MissionKey />
      {data.launches.map((launch) => (
        <LaunchItem key={launch.flight_number} launch={launch} />
      ))}
      <button className="btn btn-primary">Read More</button>
    </>
  );
}

export default Launches;
