import { Outlet, createBrowserRouter } from 'react-router-dom';

import App from '../App';
import LocationsPage from '../pages/LocationsPage';
import LocationPage from '../pages/LocationPage';
import Navbar from '../components/Navbar';

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>
    <Outlet />
  </>
);

export const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: '/',
        element: <App />,
      },
      {
        path: '/locations',
        element: <LocationsPage />,
      },
      {
        path: '/locations/:id',
        element: <LocationPage />,
      },
    ],
  },
]);
