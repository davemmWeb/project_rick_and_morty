import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import { useState, useEffect } from "react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { About } from "./components/About/About";
import { Detail } from "./components/Detail/Detail";
import { Error } from "./components/Error/Error";
import { Login } from "./components/Login/Login";
import { useLocation, useNavigate } from "react-router-dom";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const location = useLocation();
  const [characters, setCharacters] = useState([]);
  const navigate = useNavigate();
  const [access, setaccess] = useState(false);
  const username = "email@example.com";
  const password = "1234";

  const login = (userdata) => {
    if (userdata.password === password && userdata.username === username) {
      setaccess(true);
      navigate("/home");
    }
  };

  useEffect(() => {
    !access && navigate("/");
  }, [access, navigate]);

  const onSearch = (character) => {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          !characters.length
            ? setCharacters((oldChars) => [...oldChars, data])
            : characters.filter((value) =>
                value.id === data.id
                  ? setCharacters(
                      [...characters],
                      window.alert("El personaje ya existe")
                    )
                  : setCharacters([...characters, data])
              );
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }, []);
  };

  const onClose = (id) => {
    const arr = characters.filter((value) => value.id !== id);
    setCharacters([...arr]);
  };

  const logout = () => {
    setaccess(false);
    navigate("/");
  };

  const randomSearch = () => {
    const numRandom = Math.floor(Math.random() * 826);
    fetch(`https://rickandmortyapi.com/api/character/${numRandom}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          !characters.length
            ? setCharacters((oldChars) => [...oldChars, data])
            : characters.filter((value) =>
                value.id === data.id
                  ? setCharacters(
                      [...characters],
                      window.alert("El personaje ya existe")
                    )
                  : setCharacters([...characters, data])
              );
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }, []);
  };

  const { pathname } = location;

  return (
    <div
      className="App"
      style={{
        padding: "25px",
      }}
    >
      {pathname === "/" ? (
        <>
          <Routes>
            <Route path="/" element={<Login login={login} />} />
          </Routes>
        </>
      ) : (
        <>
          <Nav
            onSearch={onSearch}
            randomSearch={randomSearch}
            logout={logout}
          />
          <Routes>
            <Route path="*" element={<Error />} />

            <Route
              path="/home"
              element={<Cards characters={characters} onClose={onClose} />}
            />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/about" element={<About />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Routes>
        </>
      )}
    </div>
  );
}

export default App;
