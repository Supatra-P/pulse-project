import * as React from 'react';
import { useState, Dispatch, SetStateAction, FC } from 'react';
import './StylesSearch.css';
import { FaSearch } from 'react-icons/fa';
import axios from 'axios';

export interface Respse {
  id: number;
  name: string;
}

export interface Respse extends Array<Respse> { }

export interface ISetResults {
  results: Respse[];
  setResults: Dispatch<SetStateAction<Respse[]>>;
}

export const Searchbar: FC<ISetResults> = (setResults) => {
  const [input, setInput] = useState<string>("");

  const fetchData = (value: string) => {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res.data);
        const results: Respse[] = res.data.filter((user: Respse) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
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
      <FaSearch id='search-icon' size={28} />
      <input
        placeholder='Search...'
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}
