import * as React from 'react';
import { FC } from 'react';
import { ISetResults, Respse } from './Searchbar';
import './StylesSearch.css';

export interface ISearchResultList {

}

export const SearchbarResultList: FC<ISetResults> = (res) => {
  return (
    <div className='search-bar-result-list'>

       {res.results.map((result: Respse, id: number) => {
        return <div key={id}>{result.name}</div>;
       })}

    </div>
  );
}
