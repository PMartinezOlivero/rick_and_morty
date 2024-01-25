import Cards from "../components/Cards/Cards";
import styles from "./Home.module.css";

export default function Home (props){
    return (
        <>
            <div className={styles.box}>
                <Cards characters={props.characters} onClose={props.onClose} onSearch={props.onSearch}/>
            </div>
        </>
    );
}