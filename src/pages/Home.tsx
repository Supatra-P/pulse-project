import * as React from 'react';
import { Compare } from './comparePage/Compare';
import { Recommended } from './recommendedPage/Recommended';
import { Trending } from './TrendingPage/Trending';

export interface IHomeProps {
}

export function Home(props: IHomeProps) {
  return (
    <div id='home'>
      home
      <Recommended />
      <Trending />
      <Compare />
    </div>
  );
}
