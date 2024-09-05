import styles from './Header.module.scss';
import HeaderImg from '../../assets/images/background.png';

export const Header = () => {

    return(
        <>
        <header className={styles.header}>
            <img src={HeaderImg} alt="header image" className={styles.headerImg} />
            <h1 className={styles.title}>Lexionline</h1>
        </header>
        </>
    )
}