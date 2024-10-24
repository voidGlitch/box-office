import React, { memo } from 'react';
import { TitleWrapper } from './Title.styled';
const Title = ({ Title, Subtitle }) => {
  // console.log('render');
  return (
    <TitleWrapper>
      <h1>{Title}</h1>
      <p>{Subtitle}</p>
    </TitleWrapper>
  );
};

export default memo(Title);
