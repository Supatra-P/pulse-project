import * as React from 'react';
import { FC } from 'react';
import { ISearchbar, Respse } from './Searchbar';
import './StylesSearch.css';

export interface ISearchResultList {
  results: Respse[];
}

export const SearchbarResultList: FC<ISearchResultList> = (res) => {
  return (
    <div className='search-bar-result-list'>

      {res.results.map((result: Respse, id: number) => {
        return <div key={id}>{result.name}</div>;
      })}

    </div>
  );
}
