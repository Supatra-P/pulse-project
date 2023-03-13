import * as React from 'react';
import './Compare.css'

export interface ICompareProps {
}

export function Compare (props: ICompareProps) {
  return (
    <div id='compare'>
      <p className='title' style={{textAlign: 'center', margin: '40px 0'}}>Compare Contents</p>
      <div className="compare-container">
        <div className="compare-item">
          <div className='compare-pic-box'></div>
          <div className='compare-description-box'>
              <p className='title'># 1 Title Name</p>
              <p>Channel Name</p>
              <p>Description . . Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna 
                  aliqua.</p>
              <p>5,815,452 views</p>
          </div>
        </div>
        <div className="compare-item">
        <div className='compare-pic-box'></div>
          <div className='compare-description-box'>
              <p className='title'># 1 Title Name</p>
              <p>Channel Name</p>
              <p>Description . . Lorem ipsum dolor sit amet, 
                  consectetur adipiscing elit, sed do eiusmod 
                  tempor incididunt ut labore et dolore magna 
                  aliqua.</p>
              <p>5,815,452 views</p>
          </div>
        </div>
      </div>
    </div>
  );
}
