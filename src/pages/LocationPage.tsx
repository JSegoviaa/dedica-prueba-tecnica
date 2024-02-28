import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Response, Location } from '../interfaces';
import Loader from '../components/Loader';

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

  return (
    <div className="w-full h-full flex justify-center flex-col items-center my-4">
      {loading ? (
        <Loader />
      ) : (
        <div
          className="shadow-md shadow-sky-400 my-4 mx-7 lg:mx-2 p-4 border border-green-400 flex flex-col justify-center items-center h-96 w-5/6 transition-all ease-linear 
        cursor-pointer  xl:w-6/6 "
        >
          <h1 className="text-3xl text-center">{data?.location?.name}</h1>
          <p className="pt-2">{data?.location?.dimension}</p>
        </div>
      )}
    </div>
  );
};

export default LocationPage;
