import { useState } from "react";
import { Search } from "../components/Search/Search"
import { Dictionary } from "../components/Dictionary/Dictionary";


export const Home = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (searchQuery) => {
        setQuery(searchQuery);
    };

    return (
        <>
            <Search onSearch={handleSearch} />
            <Dictionary query={query} />
        </>
    );
};