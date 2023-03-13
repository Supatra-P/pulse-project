import * as React from 'react';
import { Compare } from './Compare';
import { Recommended } from './Recommended';
import { Trending } from './Trending';

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
