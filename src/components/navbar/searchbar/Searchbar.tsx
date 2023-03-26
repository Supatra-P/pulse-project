import * as React from 'react';
import { useState, Dispatch, SetStateAction, FC } from 'react';
import './StylesSearch.css';
import { FaSearch, FaRegTimesCircle } from 'react-icons/fa';
import axios from 'axios';

export interface Respse {
  video: IVideo;
}

export interface IVideo {
  id: number;
  title: string;
  videoId: string;
  channelId: string;
}

export interface ISearchbar {
  setResults: Dispatch<SetStateAction<Respse[]>>;
}

export const Searchbar: FC<ISearchbar> = (setResults) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    axios.request(
      {
        method: 'GET',
        url: 'https://youtube-search-and-download.p.rapidapi.com/search',
        params: {
          query: value,
        },
        headers: {
          'X-RapidAPI-Key': '273a90d302mshd13ca34f73eb990p119fa3jsn7c55a601997a',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      }
    )
      .then((res) => {
        // console.log(res.data);
        // console.log(res.data.contents);

        const results = res.data.contents.filter((content: Respse) => {
          return value && content.video && content.video.title.toLowerCase().includes(value)
        });

        // console.log(results);
        setResults.setResults(results);
      })
  }

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  }

  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' size={32} />
      <input
        placeholder='Search'
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
      <FaRegTimesCircle id='close-icon' onClick={e => {setResults.setResults([]); setInput('');}} />
    </div>
  );
}
