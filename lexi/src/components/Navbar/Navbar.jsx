import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss';
import { Circle } from "../Circle/Circle";


export const Navbar = () => {

    return(
        <>
        <Circle/>   
            <nav className={styles.navbar}>
                <ul>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? styles.activeLink : '')} to = {"/"}>HOME</NavLink>
                    </li>
                    <li>
                        <NavLink className={({isActive}) => (isActive ? styles.activeLink : '')} to = {"/about"}>ABOUT</NavLink>
                    </li>
                    <li>
                        <a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">API</a>
                    </li>
                </ul>
            </nav>
        </>
    );
};