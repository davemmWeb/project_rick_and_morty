import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './error-page.tsx'
import { Provider } from 'react-redux'
import ReactDOM from "react-dom/client";
import { store } from './features/store'
import Home from "./components/Home/Home.tsx";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About.jsx";
import { Detail } from "./components/Detail/Detail.jsx";
import { Error } from "./components/Error/Error.jsx";
import { Login } from "./components/Login/Login.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";
import { AtributesCharacter } from "./components/vite-env";
import Swal from "sweetalert2";
import Register from "./components/Register/Register";

const URL = 'https://rickandmortyapi.com/api/character'

// function App() {


//   return (
//     <div
//       className="App"
//       style={{
//         padding: "25px",
//       }}
//     >
//       {pathname === "/" ? (
//         <>
//           <Routes>
//             <Route path="/" element={<Login login={login} />} />
//           </Routes>
//         </>
//       ) : (
//         <>
//           <Nav
//             onSearch={onSearch}
//             randomSearch={randomSearch}
//             logout={logout}
//           />
//           <Routes>
//             <Route path="*" element={<Error />} />

//             <Route
//               path="/home"
//               element={<Cards characters={characters} onClose={onClose} />}
//             />
//             <Route path="/favorites" element={<Favorites />} />
//             <Route path="/about" element={<About />} />
//             <Route path="/detail/:id" element={<Detail />} />
//           </Routes>
//         </>
//       )}
//     </div>
//   );
// }

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />
  },
  {
    path: "/login",
    element: <Login />
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