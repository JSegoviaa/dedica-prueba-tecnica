import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Response } from './interfaces/Characters.interface';

const QUERY = gql`
  query Character($name: String) {
    characters(filter: { name: $name }) {
      results {
        id
        image
        name
      }
    }
  }
`;

function App() {
  const [form, setForm] = useState({ name: '' });
  const [nameToSearch, setNameToSearch] = useState('');

  const { data, loading, error } = useQuery<Response>(QUERY, {
    variables: { name: nameToSearch },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNameToSearch(form.name);
  };

  if (error) return <h1>There was an error</h1>;

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={form.name} name="name" onChange={onChange} />
        <button type="submit" disabled={loading}>
          Submit
        </button>
      </form>

      {loading ? (
        <h1>Cargando personajes</h1>
      ) : (
        <div>
          {data?.characters.results.map((character) => (
            <div key={character.id}>
              <h1>{character.name}</h1>
              <img src={character.image} alt={character.name} />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
