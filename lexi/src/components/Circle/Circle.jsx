import styles from './Circle.module.scss';
import Book from '../../assets/images/book.png'

export const Circle = () => {

    return(
        <div className={styles.circle}>
            <div className={styles.backgroundCircle}></div>
            <img src={Book} alt="book" />
        </div>
    )
}