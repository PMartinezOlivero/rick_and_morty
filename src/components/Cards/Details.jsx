import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Details() {
   let { id } = useParams();
   const [character, setCharacter] = useState({});
   useEffect(() => {
      axios(
        `https://rickandmortyapi.com/api/character/${id}`
      ).then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
      return setCharacter({});
    }, [id]);
    let myCreated = new Date(character.created).toLocaleString();
    console.log(character);
  return (
    <>
      <div className="box">
         <img src={character.image} alt="Foto" />
         <div className={''}>{character.id}</div>
         <div className={''}>{character.name}</div>
         <div className={''}>{character.status}</div>
         <div className={''}>{character.species}</div>
         <div className={''}>{character.gender}</div>
         <div className={''}>{character.type}</div>
         <div className={''}>{character.origin?.name}</div>
         <div className={''}>{character.location?.name}</div>
         <div className={''}>{character.url}</div>
         <div className={''}>{myCreated}</div>

      </div>

    </>
  );
}
