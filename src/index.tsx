import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './store';
import router from './router';

const container = document.getElementById('app');
const root = createRoot(container!);

root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
