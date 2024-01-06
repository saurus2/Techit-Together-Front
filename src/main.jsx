import React from 'react';
import ReactDOM from 'react-dom/client';
import Root from './Root.jsx';
import './app.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Team from './pages/team/Team.jsx';
import Home from './pages/home/Home.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/team/:team',
        element: <Team />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
