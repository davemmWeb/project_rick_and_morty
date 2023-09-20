import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import Home from "./components/Home/Home.tsx";
import { Login } from "./components/Login/Login.jsx";
import Register from "./components/Register/Register";
import ErrorPage from './error-page.tsx';
import { store } from './features/store';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />
  },
  {
    path: "/home",
    element: <Home />,
    errorElement: <ErrorPage />,
    // children: [
    //   {
    //     path: "/favorites",
    //     element: <Favorites />
    //   },
    // ]
  },
  {
    path: "/favorites",
    element: <Favorites />
  },
  {
    path: "/register",
    element: <Register />
  }
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)