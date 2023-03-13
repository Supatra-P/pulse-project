import * as React from 'react';
import './StylesSearch.css';
import { GrFormSearch } from 'react-icons/gr';

export interface ISearchbarProps {
}

export function Searchbar (props: ISearchbarProps) {
  return (
    <div className='input-wrapper'>
        <GrFormSearch id="search-icon" size={24}/>
        <input placeholder='Search...' />
    </div>
  );
}
