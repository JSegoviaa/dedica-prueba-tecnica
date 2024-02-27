import { useQuery, gql } from '@apollo/client';
import { Response } from './interfaces/Characters.interface';

const QUERY = gql`
  query {
    characters(page: 2) {
      info {
        count
      }
      results {
        id
        name
        image
      }
    }
  }
`;

function App() {
  const { data, loading } = useQuery<Response>(QUERY);
  console.log(data?.characters.results);
  return (
    <>
      {loading ? (
        <h1>Cargando pesonajes</h1>
      ) : (
        <div>
          {data?.characters.results.map((chracter) => (
            <div key={chracter.id}>
              <h1>{chracter.name}</h1>
              <img src={chracter.image} alt={chracter.name} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
