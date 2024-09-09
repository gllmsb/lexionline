import { Outlet } from "react-router-dom";
import { Navbar } from "../components/Navbar/Navbar";
import { Header } from "../components/Header/Header";
import { Footer } from "../components/Footer/Footer";
import styles from './MainLayout.module.scss';



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