import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
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
  return <>
    {
        data.launches.map(launch=>(
            <LaunchItem key ={launch.flight_number} launch={launch}/>
        ))
    }
  </>
}

export default Launches;
