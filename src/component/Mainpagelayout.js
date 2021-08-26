import Navs from './Navs';
import React from 'react';
import Title from './Title';

const Mainpagelayout = ({ children }) => {
  return (
    <div>
      <Title
        Title="Welcome to Box-office"
        Subtitle="Are you looking for any Movies"
      />
      <Navs />
      {children}
    </div>
  );
};

export default Mainpagelayout;
