import "./App.css";
import Navbar from "./components/Nav/Navbar.jsx";
import Details from "./components/Cards/Details.jsx";

import Login from "./views/Login.jsx";
//import Landing from "./views/Landing.jsx";
import Home from "./views/Home.jsx";
import About from "./views/About.jsx";

import { useEffect, useState } from "react";
import axios from "axios";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";


function App() {
  const [characters, setCharacters] = useState([]);
  const [ access, setAccess ] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  //Base de datos Access:
  const EMAIL = 'pmo.martinez@gmail.com';
  const PASSWORD = 'admin1234';

  useEffect(()=>{!access && navigate('/')}, [access]);

  function login (userData) {
    if (userData.email === EMAIL && userData.password === PASSWORD) {
      setAccess(true);
      navigate('./home');
    }
  }

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
        <Route path="/" element={<Login login={login} />} />
        <Route path="home" element={<Home characters={characters} onClose={onClose} onSearch={onSearch} />}/>
        <Route path="home/details/:id" element={<Details />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
