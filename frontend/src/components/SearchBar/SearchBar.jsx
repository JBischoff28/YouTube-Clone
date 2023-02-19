import React, { useState } from 'react';

const [search, setSearch] = useState('');

const SearchBar = (props) => {
    return ( 
        <form className="searchForm">
            <ul>
                <li>
                    <label>Search for videos here!</label>
                </li>
                <li>
                    <input type='text' value={search} onChange={(event) => {event.target.value}}/>
                </li>
                <li></li>
            </ul>
        </form>
     );
}
 
export default SearchBar;