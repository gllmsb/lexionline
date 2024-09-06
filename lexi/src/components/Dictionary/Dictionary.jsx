import { useState, useEffect } from 'react';
import styles from './Dictionary.module.scss';

export const Dictionary = ({ query }) => {
    const [definitions, setDefinitions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (query) {
            fetchDefinitions(query);
        }
    }, [query]);

    const fetchDefinitions = async (query) => {
        try {
            const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${query}`);
            if (!response.ok) throw new Error('Word not found');

            const data = await response.json();
            const meanings = data[0].meanings.map(({ partOfSpeech, definitions }) => ({
                partOfSpeech,
                definitions: definitions.map(({ definition, example, synonyms }) => ({
                    definition,
                    example: example || null,
                    synonyms: synonyms || [],
                })),
            }));

            setDefinitions(meanings);
            setError(null);
        } catch (err) {
            setDefinitions([]);
            setError(err.message);
        }
    };

    const renderDefinitions = (definitions) => (
        <div className={styles.meaningContent}>
            <div className={styles.definitions}>
                {definitions.slice(0, 3).map((def, i) => (
                    <div key={i} className={styles.definitionExample}>
                        <span className={styles.definitionText}>{def.definition}</span>
                    </div>
                ))}
            </div>
            {definitions.some(def => def.example) && (
                <div className={styles.examples}>
                    <h4 className={styles.exampleHeader}>Examples:</h4>
                    <ul className={styles.exampleList}>
                        {definitions.map((def, i) => def.example && (
                            <li key={i}>{def.example}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );

    const renderMeaning = (meaning, index) => (
        <div key={index} className={styles.meaning}>
            <div className={styles.meaningContent}>
                <div className={styles.definitions}>
                    <h3>{meaning.partOfSpeech}</h3>
                    {renderDefinitions(meaning.definitions)}
                </div>
                {meaning.partOfSpeech === 'noun' && meaning.definitions[0].synonyms.length > 0 && (
                    <div className={styles.examples}>
                        <h4 className={styles.exampleHeader}>Synonyms:</h4>
                        <ul className={styles.exampleList}>
                            {meaning.definitions[0].synonyms.slice(0, 3).map((syn, i) => (
                                <li key={i}>{syn}</li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );

    return (
        <div className={styles.dictionary}>
            {!error && query && <h3 className={styles.queryTitle}>{query}</h3>}
            {error ? (
                <div className={styles.error}>{error}</div>
            ) : (
                definitions.length > 0
                    ? definitions.map(renderMeaning)
                    : <div className={styles.noDefinitions}>No definitions found</div>
            )}
        </div>
    );
};