import React, { useState } from 'react';
import axios from "axios";

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    async function searchVideos (search) {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=AIzaSyDPGOO0T4jFJdR0PLayq6N6Wum3OoW8n58&part=snippet&type=video&maxResults=6`);
            console.log(response.data);
            props.setVideos(response.data);
        } catch (error) {
            console.log(error.message);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        console.log(search);
        searchVideos(search);
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