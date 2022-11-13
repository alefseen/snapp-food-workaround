import { createBrowserRouter } from 'react-router-dom';
import Home from 'modules/home';
import Vendors from './modules/vendors';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/vendors',
    element: <Vendors />,
  },
]);

export default router;
