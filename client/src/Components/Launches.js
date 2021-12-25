import React, { Component, Fragment } from 'react';
import { useQuery, gql } from '@apollo/client';
import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';
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

export function Launches() {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <h4>Loading...</h4>;
  if (error) return <h4>Error :(</h4>;
  return (
    <Fragment>
      <h3 className='display-4 my-3'>Launches</h3>
      <MissionKey />
      <Fragment>
        {data.launches.map((launch) => (
          <LaunchItem key={launch.flight_number} launch={launch} />
        ))}
      </Fragment>
    </Fragment>
  );
}

export default Launches;
