import React, { useState } from 'react';
import Mainpagelayout from '../component/Mainpagelayout';
import { apiGet } from '../misc/configue';

const Home = () => {
  // eslint-disable-next-line
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);

  const onSearch = () => {
    apiGet(`/search/shows?q=${input}`).then(result => {
      setResults(result);
      // console.log(result);
    });
  };

  const onInputChange = ev => {
    setInput(ev.target.value);
    // console.log(ev.target.value); // return the current value we are typing in
  };

  const onkeydown = ev => {
    // console.log(ev.keyCode); // return all the number assigned by js to the particular key
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const renderResults = () => {
    //if we try to fetch something which is not available at the site
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return (
        <div>
          {results.map(item => (
            <div key={item.show.id}>{item.show.name} </div>
          ))}
        </div>
      );
    }
  };

  return (
    <Mainpagelayout>
      <input
        type="text"
        onChange={onInputChange}
        value={input}
        onKeyDown={onkeydown}
      />
      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </Mainpagelayout>
  );
};

export default Home;
