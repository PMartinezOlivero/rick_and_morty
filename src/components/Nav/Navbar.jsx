import styles from "./Navbar.module.css";
import Search from "./Search";
import Menu from "./Menu";


export default function Navbar ({onSearch}) {
    return (
        <div>
            <nav className={styles.container}>
                <Menu/>
                <Search onSearch={onSearch} />
            </nav>

        </div>
    );
}