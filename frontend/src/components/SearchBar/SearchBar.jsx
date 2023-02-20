import React, { useState } from 'react';

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
        props.searchVideos(search);
        setSearch('');
    }

    return ( 
        <form onSubmit={(event) => handleSubmit(event)} className="searchForm">
            <ul>
                <li>
                    <label>Search for videos here!</label>
                </li>
                <li>
                    <input type='text' value={search} onChange={(event) => setSearch(event.target.value)}/>
                </li>
                <li>
                    <button type='submit'>SEARCH!</button>
                </li>
            </ul>
        </form>
     );
}
 
export default SearchBar;