import SearchBar from "../SearchBar/SearchBar.jsx";
import { Link } from "react-router-dom";
import styles from './nav.module.css';

export default function Nav({onSearch}){
    return (
        <nav className={styles.navContainer}>
            <SearchBar onSearch={onSearch}  />
            <button className={styles.navButton}>
                <Link to="/home" className={styles.navLink}>Home</Link>
            </button>
            <button className={styles.navButton}>
                <Link to="/about" className={styles.navLink}>About</Link>
            </button>
        </nav>
    )
}