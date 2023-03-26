import React, { FC } from 'react';
import { Respse } from './Searchbar';
import './StylesSearch.css';

export interface ISearchResult {
    result: Respse;
}

export const SearchResult: FC<ISearchResult> = (result) => {
  return (
    <div className='search-result' onClick={e => alert(`Clicked on ${result.result.name}`)}>{result.result.name}</div>
  )
}