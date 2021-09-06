import React from 'react';
import { TitleWrapper } from './Title.styled';
const Title = ({ Title, Subtitle }) => {
  return (
    <TitleWrapper>
      <h1>{Title}</h1>
      <p>{Subtitle}</p>
    </TitleWrapper>
  );
};

export default Title;
