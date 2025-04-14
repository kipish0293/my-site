import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import {
  createBrowserRouter,
  NavLink,
  RouterProvider,
} from "react-router-dom";
import App from './App.tsx';
import './index.css';

const router = createBrowserRouter(
  [
    {
      path: "/app", // обязательно начни с /
      element: <App />,
    },
    {
      path: "/any", // обязательно начни с /
      element: <div>
        <NavLink to="/app">Главная</NavLink>
      </div>,
    },
  ],
  {
    basename: "/my-site", // 👈 имя репозитория
  }
);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
