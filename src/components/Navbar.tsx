import { FC } from 'react';
import { Link } from 'react-router-dom';
import LOGO from '/public/img/Rick_and_Morty.png';

const Navbar: FC = () => {
  return (
    <div className="w-full flex flex-row justify-around items-center py-9 shadow-md bg-gray-700 transition-all ease-in-out">
      <Link
        to="/"
        className="hover:text-green-400 hover:font-thin ease-in duration-200 transition-all"
      >
        Characters
      </Link>
      <img src={LOGO} className="w-48 hover:animate-pulse" />
      <Link
        to="/locations"
        className="hover:text-green-400 hover:font-thin ease-in duration-200 transition-all"
      >
        Locations
      </Link>
    </div>
  );
};

export default Navbar;
