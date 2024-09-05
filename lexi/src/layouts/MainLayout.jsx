import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import styles from './MainLayout.module.scss';
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";


export const MainLayout = () => {

    return(
        <>
        <Navbar/>
        <Header/>
        <main className={styles.mainStyle}>
            <Outlet/>
        </main>
        <Footer/>
        </>
    )
}