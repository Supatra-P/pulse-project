import axios from 'axios';
import { Dispatch, FC, SetStateAction, useState } from 'react';
import { FaRegTimesCircle, FaSearch } from 'react-icons/fa';
import './StylesSearch.css';

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
          'X-RapidAPI-Key': '796bc36ac2msh3fe41b26982d8f5p1c252ejsn2d98e84f2c0f',
          'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
        }
      }
    )
      .then((res) => {

        const results = res.data.contents.filter((content: Respse) => {
          return value && content.video && content.video.title.toLowerCase().includes(value)
        });
        
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
