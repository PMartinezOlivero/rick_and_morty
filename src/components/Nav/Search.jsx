import { useState } from "react";
import {} from "./Search.module.css";

export default function Search(props) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
      <input type="search" placeholder="CharacterID" onChange={handleChange} />
      <button onClick={() => props.onSearch(id)}>Agregar</button>
      <button onClick={() => props.onSearch((Math.floor(Math.random()*826)+1))}>Aleatorio</button>
    </div>
  );
}
