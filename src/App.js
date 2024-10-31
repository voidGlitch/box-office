import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import Home from './pages/home';
import Show from './pages/Show';
import Starred from './pages/starred';

const theme = {
  mainColors: {
    blue: '#2400ff',
    gray: '#c6c6c6',
    dark: '#353535',
  },
};

// function NotFound() {
//   return <div>404 - Page Not Found</div>;
// }

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/box-office" element={<Home />} />
        <Route path="/starred" element={<Starred />} />
        <Route path="/show/:id" element={<Show />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
    </ThemeProvider>
  );
}

export default App;
