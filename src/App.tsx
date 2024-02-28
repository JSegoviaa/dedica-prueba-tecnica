import { ChangeEvent, FormEvent, useState } from 'react';
import { useQuery, gql } from '@apollo/client';
import { Character, Response } from './interfaces';
import Loader from './components/Loader';

const CHARACTER_QUERY = gql`
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

  const { data, loading, error } = useQuery<Response<Character[]>>(
    CHARACTER_QUERY,
    { variables: { name: nameToSearch } }
  );

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setNameToSearch(form.name);
  };

  if (error) return <h1>There was an error</h1>;

  return (
    <div className="w-full h-full flex justify-center flex-col items-center my-4">
      <form onSubmit={onSubmit}>
        <input
          className="px-4 py-2 rounded-lg focus:border-green-400 focus:ring-2 focus:ring-green-500 focus:outline-none text-sky-400"
          type="text"
          value={form.name}
          name="name"
          placeholder="Write a name"
          onChange={onChange}
        />
        <button
          className="bg-sky-400 ml-2 px-4 py-2 rounded-lg hover:bg-green-400 transition-all ease-in-out"
          type="submit"
          disabled={loading}
        >
          Submit
        </button>
      </form>

      {loading ? (
        <Loader />
      ) : (
        <div className="flex w-12/12 flex-wrap justify-center items-center h-full">
          {data?.characters?.results.map((character) => (
            <div
              className="shadow-md shadow-sky-400 my-4 mx-2 p-4 border border-green-400 flex flex-col justify-center items-center h-1/3 w-6/6 group  hover:bg-green-400 transition-all ease-linear 
              cursor-pointer xl:h-80 xl:w-1/6 lg:w-2/6 md:w-3/6 sm:w-4/6"
              key={character.id}
            >
              <img
                src={character.image}
                alt={character.name}
                className="max-w-52 h-auto"
              />
              <h1 className="text-3xl text-center pt-4 text-pretty group-hover:font-thin group-hover:text-gray-800 transition-all ease-in-out">
                {character.name}
              </h1>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
