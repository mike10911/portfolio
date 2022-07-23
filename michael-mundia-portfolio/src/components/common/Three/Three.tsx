
import React from 'react';
import { TitleList } from '../../../lib/types';
import './Three.css';

export const Three   = ({titleName} : TitleList) => {
  return (
    <div className = 'Three'>
      <ul>
          <li>{titleName}</li>
          <li>{titleName}</li>
          <li>{titleName}</li>
      </ul>
    </div>
  )
}

export default Three;
