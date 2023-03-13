import * as React from 'react';
import { useState, Dispatch, SetStateAction, FC } from 'react';
import './StylesSearch.css';
import { FaSearch } from 'react-icons/fa';
import { json } from 'react-router-dom';
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

export const Searchbar: FC<ISetResults> = (setResults: ISetResults) => {
  const [input, setInput] = useState<string>("");
  const resultsName: any[] = [];

  const fetchData = (value: string) => {
    axios.get("http://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // res.data.map((element: Respse) => (
        //   console.log(element.name)
        // ));
        console.log(res.data);
        const results: Respse[] = res.data.filter((user: Respse) => {
          return value && user && user.name && user.name.toLowerCase().includes(value)
        });
        console.log(results);
        // results.map((result: Respse, id: number) => {
          // return <div key={id}>{result}</div>
          // console.log(result.name);
          // resultsName.push(result);
        // })
        setResults.setResults(results);
        // {resultsName.forEach((e: Respse, id: number ) => {
          // console.log(`resultsName`+e.name);
            // console.log(`resultsName`+e.name);
            // setResults.setResults(e);
        // })}
        // setResults.setResults(resultsName);
      })
  }

  const handleChange = (value: string) => {
    setInput(value);
    fetchData(value);
  }
  return (
    <div className='input-wrapper'>
      <FaSearch id='search-icon' />
      <input
        placeholder='Search...'
        value={input}
        onChange={e => handleChange(e.target.value)}
      />
    </div>
  );
}
