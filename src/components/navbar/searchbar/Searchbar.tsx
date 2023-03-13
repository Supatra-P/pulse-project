import * as React from 'react';
import './StylesSearch.css';
import { FaSearch } from 'react-icons/fa';

export interface ISearchbarProps {
}

export function Searchbar (props: ISearchbarProps) {
  return (
    <div className='input-wrapper'>
        <FaSearch id='search-icon' />
        <input placeholder='Search...' />
    </div>
  );
}
