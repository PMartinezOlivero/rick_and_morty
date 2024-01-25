import styles from "./Navbar.module.css";
import Menu from "./Menu";


export default function Navbar ({onSearch}) {
    return (
        <>
            <nav className={styles.box}>
                <Menu/>
            </nav>
        </>
    );
}