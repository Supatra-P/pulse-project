import * as React from 'react';
import { FC } from 'react';
import { ISetResults, Respse } from './Searchbar';
import './StylesSearch.css';

export interface ISearchResult {
  // results: Respse;
}

export const SearchbarResult: FC<ISetResults> = (results: ISetResults) => {
  return (
    <div className='search-bar-result'>
      {/* {results.results.map((result: Respse, id: number) => {
        return <div key={id}>{result}</div>
      })} */}
      {/* {results.map(( result: any, id: number ) => {
        return <div key={id}>{result}</div>;
      })} */}
       {/* {results.results} */}

    </div>
  );
}
