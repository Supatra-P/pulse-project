import * as React from 'react';
import { NavLink } from 'react-router-dom';
import './StylesNav.css';
import { Searchbar } from './searchbar/Searchbar';
import { SearchbarResult } from './searchbar/SearchbarResult';

export interface INavbarProps {
}

export function Navbar(props: INavbarProps) {
    return (
        <div>
            <nav>
                <h1>Pulse</h1>
                <div className='search-bar-container'>
                    <Searchbar />
                    {/* <SearchbarResult /> */}
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
