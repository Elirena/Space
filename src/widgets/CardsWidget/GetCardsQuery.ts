import { gql } from '@apollo/client';

export const GetLaunches = gql`
query getCards ($limit: Int, $offset: Int) {
  launches(limit: $limit, offset: $offset) {
    id
    missionName: mission_name
    launchDate: launch_date_unix
    details
    rocket {
      rocketName: rocket_name
    }
    links {
      pressKit: presskit
    }
  }
}
`;