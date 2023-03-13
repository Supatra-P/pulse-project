import * as React from 'react';
import './Trending.css'

export interface ITrendingProps {
}

export function Trending (props: ITrendingProps) {
  return (
    <div id='trending'>
      <p className='title' style={{marginTop: '60px'}}>Trending</p>
      <div className='trend-item'>
        <div className='pic-box'></div>
        <div className='description-box'>
            <p className='title'># 1 Title Name</p>
            <p>Channel Name</p>
            <p>Description . . Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna 
                aliqua.</p>
            <p>5,815,452 views</p>
        </div>
      </div>
      <div className='trend-item'>
        <div className='pic-box'></div>
        <div className='description-box'>
            <p className='title'># 2 Title Name</p>
            <p>Channel Name</p>
            <p>Description . . Lorem ipsum dolor sit amet, 
                consectetur adipiscing elit, sed do eiusmod 
                tempor incididunt ut labore et dolore magna 
                aliqua.</p>
            <p>5,815,452 views</p>
        </div>
      </div>
    </div>
  );
}
