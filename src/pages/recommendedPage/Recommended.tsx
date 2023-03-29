import * as React from 'react';
import { FaEye } from 'react-icons/fa';
import './Recommended.css'

export interface IRecommendedProps {
}

export function Recommended (props: IRecommendedProps) {
  return (
    <div id='recommended'>
      <p className='title' style={{marginTop: '30px'}}>Recommended Contents</p>
      <div className='recommend-container'>
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className='recommend-description-box'>
            <div>
              <p style={{fontWeight: 'bold'}}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaEye id='eye-icon' />
              <p>5M</p>
            </div>
          </div>
        </div>
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className='recommend-description-box'>
            <div>
              <p style={{fontWeight: 'bold'}}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaEye id='eye-icon' />
              <p>5M</p>
            </div>
          </div>
        </div>
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className='recommend-description-box'>
            <div>
              <p style={{fontWeight: 'bold'}}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaEye id='eye-icon' />
              <p>5M</p>
            </div>
          </div>
        </div>
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className='recommend-description-box'>
            <div>
              <p style={{fontWeight: 'bold'}}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaEye id='eye-icon' />
              <p>5M</p>
            </div>
          </div>
        </div>
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className='recommend-description-box'>
            <div>
              <p style={{fontWeight: 'bold'}}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaEye id='eye-icon' />
              <p>5M</p>
            </div>
          </div>
        </div>
        <div className="recommend-item">
          <div className="recommend-pic-box"></div>
          <div className='recommend-description-box'>
            <div>
              <p style={{fontWeight: 'bold'}}>Title Name</p>
              <p>Channel Name</p>
            </div>
            <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
              <FaEye id='eye-icon' />
              <p>5M</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
