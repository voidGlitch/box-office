import React, { useState } from 'react';
import ActorGrid from '../component/actor/ActorGrid';
import Mainpagelayout from '../component/Mainpagelayout';
import ShowGrid from '../component/show/ShowGrid';
import { apiGet } from '../misc/configue';

const Home = () => {
  // eslint-disable-next-line
  const [input, setInput] = useState('');
  const [results, setResults] = useState(null);
  const [searchoption, setSearchoption] = useState('shows');
  const isShowSearch = searchoption === 'shows';

  //   useEffect(() => {
  //     console.log('useeffect run');
  // //this return run right before the component got changes which help us to seek into willmounted life cycle
  //     return (()=>{
  //       console.log("exit")
  //     })
  //   }, [input]);
  //runs the codes whenever the array gets changes

  const onSearch = () => {
    apiGet(`/search/${searchoption}?q=${input}`).then(result => {
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

  const onRadioChange = ev => {
    setSearchoption(ev.target.value);
  };

  // console.log(searchoption);

  const renderResults = () => {
    //if we try to fetch something which is not available at the site
    if (results && results.length === 0) {
      return <div>No results</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  return (
    <Mainpagelayout>
      <input
        type="text"
        placeholder="Search for something"
        onChange={onInputChange}
        value={input}
        onKeyDown={onkeydown}
      />
      <div>
        <label htmlFor="shows-search">
          shows
          <input
            type="radio"
            id="shows-search"
            value="shows"
            checked={isShowSearch}
            onChange={onRadioChange}
          ></input>
        </label>

        <label htmlFor="actors-search">
          Actors
          <input
            type="radio"
            id="actors-search"
            value="people"
            checked={!isShowSearch}
            onChange={onRadioChange}
          ></input>
        </label>
      </div>

      <button type="button" onClick={onSearch}>
        Search
      </button>
      {renderResults()}
    </Mainpagelayout>
  );
};

export default Home;
