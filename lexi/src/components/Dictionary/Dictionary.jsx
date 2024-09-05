import { useState, useEffect } from 'react';
import styles from './Dictionary.module.scss';


export const Dictionary = ({ query }) => {
    const [definitions, setDefinitions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            const fetchDefinitions = async () => {
                try {
                    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);

                    console.log('Response Status:', response.status);

                    if (!response.ok) {
                        throw new Error('Word not found');
                    }

                    const data = await response.json();
                    console.log('Fetched Data:', data);

                    const meanings = data[0].meanings.map(meaning => ({
                        partOfSpeech: meaning.partOfSpeech,
                        definitions: meaning.definitions.map(def => def.definition),
                    }));

                    console.log('Processed Meanings:', meanings);

                    setDefinitions(meanings);
                    setError(null); 
                } catch (error) {
                    console.error('Error fetching definitions:', error.message);
                    setDefinitions([]);
                    setError(error.message);
                }
            };

            fetchDefinitions();
        }
    }, [query]);

    console.log('Definitions State:', definitions);
    console.log('Error State:', error);

    return (
        <div className={styles.dictionary}>
            {!error && query && <h3 className={styles.queryTitle}>{query}</h3>}
            
            {error ? (
                <div className={styles.error}>{error}</div>
            ) : (
                definitions.length > 0 ? (
                    definitions.map((meaning, index) => (
                        <div key={index} className={styles.meaning}>
                            <h3>{meaning.partOfSpeech}</h3>
                            <ul>
                                {meaning.definitions.map((def, i) => (
                                    <li key={i}>{def}</li>
                                ))}
                            </ul>
                        </div>
                    ))
                ) : (
                    <div className={styles.noDefinitions}>No definitions found</div>
                )
            )}
        </div>
    );
};