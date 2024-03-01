import ReactDOM from 'react-dom';
import { RouterProvider } from 'react-router-dom';
import router from '@/routes';

ReactDOM.render(
  <RouterProvider router={router} />,
  document.getElementById('root')
);
