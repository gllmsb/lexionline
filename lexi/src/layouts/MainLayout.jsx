import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import styles from './MainLayout.module.scss';


export const MainLayout = () => {

    return(
        <>
        <Navbar/>
        <main className={styles.mainStyle}>
            <Outlet/>
        </main>
        </>
    )
}