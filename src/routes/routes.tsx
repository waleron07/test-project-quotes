import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from '@/App/App';
import Application from '@/pages/application';
import Quotes from '@/pages/quotes';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: (
          <Suspense fallback={'loading...'}>
            <Application />
          </Suspense>
        ),
      },
      {
        path: '/quotes',
        element: (
          <Suspense fallback={'loading...'}>
            <Quotes />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
