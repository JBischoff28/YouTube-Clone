import React, { useState } from 'react';
import axios from 'axios';
import { KEY } from '../../localKey';
import { KEY2 } from '../../localKey';
import "./SearchBar.css";

const SearchBar = (props) => {

    const [search, setSearch] = useState('');

    async function searchVideos (search) {
        try {
            let response = await axios.get(`https://www.googleapis.com/youtube/v3/search?q=${search}&key=${KEY}&part=snippet&type=video&maxResults=6`);
            console.log(response.data.items);
            props.setVideos(response.data.items);
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
                <li className='searchText'>
                    <label>Search for videos here!</label>
                </li>
                <li className='searchInput'>
                    <input style={{"height": "3em", "width": "30em", "fontSize": "0.75em"}} type='text' placeholder='search...' value={search} onChange={(event) => setSearch(event.target.value)}/>
                </li>
                <li className='searchButton'>
                    <button type='submit'>SEARCH!</button>
                </li>
            </ul>
        </form>
     );
}
 
export default SearchBar;