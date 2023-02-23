import { createBrowserRouter } from 'react-router-dom';

import { Actors, MovieInformation, Movies, Profile, Root } from '../Components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <Movies />,
      },
      {
        path: 'movie/:id',
        element: <MovieInformation />,
      },
      {
        path: 'actors/:id',
        element: <Actors />,
      },
      {
        path: 'profile/:id',
        element: <Profile />,
      },
    ],
  },
]);

export default router;
