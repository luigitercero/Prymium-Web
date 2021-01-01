import React from 'react';
import '../styles/components/bidet.scss';
import { SubTitle } from './Title';

const BidetFrame = ({ children }) => {
  return (
    <div className="bidetframe">
      <SubTitle>Bidet</SubTitle>
    </div>
  );
};

export default BidetFrame;