import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { gql, useQuery } from '@apollo/client';
import { Response, Location } from '../interfaces';
import Loader from '../components/Loader';

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
    <div className="w-full h-full flex justify-center flex-col items-center my-4">
      {loading ? (
        <Loader />
      ) : (
        <div className="flex w-12/12 flex-wrap justify-center items-center h-full">
          {data?.locations?.results.map((location) => (
            <div
              className="shadow-md shadow-sky-400 my-4 mx-7 lg:mx-2 p-4 border border-green-400 flex flex-col justify-center items-center h-52 w-full group  hover:bg-green-400 transition-all ease-linear 
            cursor-pointer xl:h-80 xl:w-1/6 lg:h-60 lg:w-2/6 md:h-52 md:w-3/6 sm:h-44 sm:w-4/6"
              key={location.id}
              onClick={() => navigate(`/locations/${location.id}`)}
            >
              <h1 className="text-3xl text-center pt-4 text-pretty group-hover:font-thin group-hover:text-lg group-hover:text-gray-800 transition-all ease-in-out">
                {location.name}
              </h1>
              <p className="group-hover:font-bold group-hover:text-3xl transition-all ease-in-out pt-2">
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
