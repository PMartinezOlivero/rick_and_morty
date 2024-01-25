import { useState } from "react";
import styles from "./Search.module.css";

export default function Search(props) {
  const [id, setId] = useState("");
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <>
      <div className={styles.box}>
        <input className={styles.input} type="search" placeholder="CharacterID" onChange={handleChange} />
        <button className={styles.button} onClick={() => props.onSearch(id)}>Agregar</button>
        <button className={styles.button} onClick={() => props.onSearch((Math.floor(Math.random()*826)+1))}>Aleatorio</button>
      </div>
    </>
  );
}
