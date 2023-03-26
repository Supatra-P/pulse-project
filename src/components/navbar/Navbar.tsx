import { useState } from 'react';
import { Respse, Searchbar } from './searchbar/Searchbar';
import { SearchbarResultList } from './searchbar/SearchbarResultList';
import './StylesNav.css';

export function Navbar() {
    const [results, setResults] = useState<Respse[]>([]);

    return (
        <div>
            <nav>
                <div className='logo-search'>
                    <h1>Pulse</h1>
                    <div>
                        <Searchbar setResults={setResults} />
                        <SearchbarResultList results={results} />
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
