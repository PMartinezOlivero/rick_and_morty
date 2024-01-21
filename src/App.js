import "./App.css";
import Navbar from "./components/Nav/Navbar.jsx";
import Cards from "./components/Cards/Cards.jsx";
import About from "./views/About.jsx";
import { useState } from "react";
import axios from "axios";

import { Route, Routes } from 'react-router-dom';

function App() {
  const [characters, setCharacters] = useState([]);

  const onSearch = async (id) => {
    try {
      if (id) {
        const myBoolean = characters.some((e) => +e.id === +id);
        if (myBoolean) {
          console.log("Ya existe el ID!");
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

  return (
    <div className="App">
      <Navbar onSearch={onSearch} />
      <Routes>
         <Route path='/' element={<Cards characters={characters} onClose={onClose}/>}/>


      </Routes>
    </div>
  );
}

export default App;
