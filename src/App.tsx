import { useQuery, gql } from '@apollo/client';
import { Response } from './interfaces/Characters.interface';
import { ChangeEvent, FormEvent, useState } from 'react';

const QUERY = gql`
  query Name($name: String!) {
    characters(page: 2, filter: $name) {
      info {
        count
      }
      results {
        name
      }
    }
  }
`;

function App() {
  const [form, setForm] = useState({ name: 'rick' });

  const { data, loading } = useQuery<Response>(QUERY, {
    variables: { name: form.name },
  });

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {};

  console.log(data, loading);

  return (
    <form onSubmit={onSubmit}>
      <input type="text" value={form.name} name="name" onChange={onChange} />
      <button type="submit">Submit</button>
    </form>
  );
}

export default App;
