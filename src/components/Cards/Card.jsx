//import { DivBox, DivButton, DivName, DivStatus, DivSpecies, DivGender, DivOrigin } from "./styledCard";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";

export default function Card(props) {
   console.log(props.character);
   return (
      <>
            <div className={styles.box}>
               <button className={styles.button} onClick={()=>props.onClose(props.character.id)}>X</button>
               <img src={props.character.image} alt='Foto' />
               <Link  to={`./details/${props.character.id}`}>
                  <div className={styles.name}>{props.character.name}</div>
               </Link>
               <div className={styles.status}>{props.character.status}</div>
               <div className={styles.origin}>{props.character.origin.name}</div>
               <div className={styles.species}><p>{props.character.species}</p></div>
               <div className={styles.gender}><p>{props.character.gender}</p></div>
            </div>
      </>
   );
}
