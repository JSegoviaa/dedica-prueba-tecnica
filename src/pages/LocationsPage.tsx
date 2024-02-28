import { FC } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Response, Location } from '../interfaces';
import { useNavigate } from 'react-router-dom';

const LOCATIONS_QUERY = gql`
  query {
    locations(page: 1) {
      results {
        id
        name
      }
    }
  }
`;

const LocationsPage: FC = () => {
  const { data, loading, error } =
    useQuery<Response<Location[]>>(LOCATIONS_QUERY);
  const navigate = useNavigate();

  if (error) return <h1>There was an error</h1>;

  return (
    <div>
      {loading ? (
        <h1>Cargando personajes</h1>
      ) : (
        <div>
          {data?.locations?.results.map((location) => (
            <div key={location.id}>
              <h1>{location.name}</h1>
              <p onClick={() => navigate(`/locations/${location.id}`)}>
                More info
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationsPage;
