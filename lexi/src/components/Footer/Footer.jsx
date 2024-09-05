import styles from './Footer.module.scss';
import Book from '../../assets/images/book.png';


export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.column}>
                <h4>Address:</h4>
                <p>Somestreet 232</p>
                <p>Luxemborg</p>
            </div>
            <div className={styles.column}>
                <h4>Contact:</h4>
                <p>Email: somemail@mail.com</p>
                <p>Phone: 44332343</p>
            </div>
            <div className={styles.column}>
                <h4>With special thanks to</h4>
                <p><a href="https://dictionaryapi.dev/" target="_blank" rel="noopener noreferrer">https://dictionaryapi.dev/</a></p>
                <p>For the awesome API</p>
            </div>
            <div className={styles.column}>
                <div className={styles.backgroundCircle}>
                <img src={Book} alt="book" className={styles.bookImage} />
                </div>
                <p className={styles.lexiconline}>Lexiconline</p>
            </div>
        </footer>
    );
};