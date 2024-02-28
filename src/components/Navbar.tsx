import { FC } from 'react';
import { Link } from 'react-router-dom';

const Navbar: FC = () => {
  return (
    <div>
      <Link to="/">Characters</Link>
      <Link to="/locations">Locations</Link>
    </div>
  );
};

export default Navbar;
