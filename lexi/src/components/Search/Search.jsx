import { useState } from "react";
import styles from './Search.module.scss';


export const Search = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = () => {
        if (query.trim()) {
            onSearch(query);
        }
    };

    return (
        <div className={styles.searchContainer}>
            <h2>Enter a word to search</h2>
            <div className={styles.searchWrapper}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className={styles.searchInput}
                    placeholder="Search..."
                />
                <button onClick={handleSearch} className={styles.searchButton}>
                    Search
                </button>
            </div>
        </div>
    );
};