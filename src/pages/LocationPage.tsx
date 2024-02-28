import { gql, useQuery } from '@apollo/client';
import { FC } from 'react';
import { Response, Location } from '../interfaces';
import { useParams } from 'react-router-dom';

const LOCATION_QUERY = gql`
  query Location($id: ID!) {
    location(id: $id) {
      id
      name
      dimension
    }
  }
`;

const LocationPage: FC = () => {
  const params = useParams();
  const { data, loading, error } = useQuery<Response<Location>>(
    LOCATION_QUERY,
    { variables: { id: params.id } }
  );

  if (error) return <h1>There was an error</h1>;

  console.log(data?.location?.name, data?.location?.name);
  return (
    <div>
      {loading ? (
        <h1>Cargando</h1>
      ) : (
        <div>
          <h1>{data?.location?.name}</h1>
          <p>{data?.location?.dimension}</p>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
