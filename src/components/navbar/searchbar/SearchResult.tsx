import { FC } from 'react';
import { addReslt } from '../../addcompare/DataList';
import { Respse } from './Searchbar';
import './StylesSearch.css';

export interface ISearchResult {
  result: Respse;
}

export const SearchResult: FC<ISearchResult> = (result) => {
  return (
    <div className='search-result-anchor'>
      <a href={`https://www.youtube.com/watch?v=${result.result.video.videoId}`} target='_blank' rel='noreferrer'>
        <div className='search-result'>
          <p>
            {result.result.video.title}
          </p>
        </div>
      </a>
      <button onClick={() => addReslt(result.result.video)}>add</button>
    </div>
  )
}