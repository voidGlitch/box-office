import React, { useState, useEffect } from 'react';
import ShowGrid from '../component/show/ShowGrid';
import Mainpagelayout from '../component/Mainpagelayout';
import { useShows } from '../misc/custom-hooks';
import { apiGet } from '../misc/configue';
import {
  LoadingSpinner,
  ErrorWrapper,
  EmptyStateWrapper,
} from './StyledComponents'; // Import styled-components

const Starred = () => {
  const [starred] = useShows();
  const [shows, setShows] = useState(null);
  const [isloading, setisloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (starred && starred.length > 0) {
      const promises = starred.map(showId => apiGet(`/shows/${showId}`));

      Promise.all(promises)
        .then(apiData => apiData.map(show => ({ show })))
        .then(results => {
          setShows(results);
          setisloading(false);
        })
        .catch(err => {
          setError(err.message);
        });
    } else {
      setisloading(false);
    }
  }, [starred]);

  return (
    <Mainpagelayout>
      {isloading && <LoadingSpinner />}
      {error && <ErrorWrapper>Error occurred: {error}</ErrorWrapper>}
      {!isloading && !shows && (
        <EmptyStateWrapper>No shows added</EmptyStateWrapper>
      )}
      {!isloading && !error && shows && <ShowGrid data={shows} />}
    </Mainpagelayout>
  );
};

export default Starred;
