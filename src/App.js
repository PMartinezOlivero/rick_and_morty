import "./App.css";
import Navbar from "./components/Nav/Navbar.jsx";
import Details from "./components/Cards/Details.jsx";

import Login from "./views/Login.jsx";
//import Landing from "./views/Landing.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";

import { useState } from "react";
import axios from "axios";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
  const [characters, setCharacters] = useState([]);
  const location = useLocation();

  const onSearch = async (id) => {
    try {
      if (id) {
        const myBoolean = characters.some((e) => +e.id === +id);
        if (myBoolean) {
          alert("Ya existe el ID!");
        } else {
          const response = await axios(
            `https://rickandmortyapi.com/api/character/${id}`
          );
          if (response.data.id && !myBoolean) {
            setCharacters([...characters, response.data]);
          }
        }
      }
    } catch (error) {
      window.alert("¡Error en consola!");
      console.log(error);
    }
  };
  const onClose = (id) => {
    const newArr = characters.filter((char) => char.id !== id);
    setCharacters(newArr);
  };

  // login, landing, home, cards, about, register
  return (
    <div className="App">
      { 
        location.pathname !=='/' ? <Navbar /> : undefined
      }
      
      <Routes>
        {/*}Landing{*/}
        <Route path="/" element={<Login />} />
        <Route path="home" element={<Home characters={characters} onClose={onClose} onSearch={onSearch} />}/>
        <Route path="home/details/:id" element={<Details />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
