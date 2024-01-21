import { Link } from "react-router-dom";
import styles from "./Menu.module.css";

export default function Menu(){
    return (
        <div>
            <Link className={styles.link} to={'/home'}>Home</Link>
            <Link className={styles.link} to={'/about'}>About</Link>
        </div>
    );
};