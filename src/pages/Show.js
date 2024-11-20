// eslint-disable-next-line
import React from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../component/show/Cast';
import Details from '../component/show/Details';
import ShowMainPage from '../component/show/ShowMainPage';
import Seasons from '../component/show/seasons';
import { useShow } from '../misc/custom-hooks';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const Show = () => {
  // eslint-disable-next-line
  const { id } = useParams();
  const { show, isloading, error } = useShow(id);
  console.log(show);

  console.log('show', show);
  if (isloading) {
    return <div>Data is loading</div>;
  }
  if (error) {
    return <div>Error Occured {error}</div>;
  }

  return (
    <ShowPageWrapper>
      <ShowMainPage
        image={show.image}
        name={show.name}
        tags={show.genres}
        rating={show.rating}
        summary={show.summary}
      />
      <InfoBlock>
        <h2>Details</h2>
        <Details
          status={show.status}
          network={show.network}
          premiered={show.premiered}
        />
      </InfoBlock>

      {/* <InfoBlock>
        <h2>Seasons</h2>
        <Seasons season={show._embedded.season?show._embedded.season:null} />
      </InfoBlock> */}

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
