import * as React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './StylesNav.css';
import { Respse, Searchbar } from './searchbar/Searchbar';
import { SearchbarResultList } from './searchbar/SearchbarResultList';

export interface INavbarProps {

}

export function Navbar() {
    const [results, setResults] = useState<Respse[]>([]);

    return (
        <div>
            <nav>
                <div className='logo-search'>
                    <h1>Pulse</h1>
                    <div className='search-bar-container'>
                        <Searchbar setResults={setResults} results={results} />
                        <SearchbarResultList results={results} setResults={setResults}/>
                    </div>
                </div>
                <ul>
                    <li>
                        <a href='#recommended'>
                            Recommended
                        </a>
                    </li>
                    <li>
                        <a href='#trending'>
                            Trending
                        </a>
                    </li>
                    <li>
                        <a href='#compare'>
                            Compare
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
