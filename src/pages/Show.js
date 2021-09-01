// eslint-disable-next-line
import React, { useEffect, useReducer } from 'react';
import { useParams } from 'react-router-dom';
import Cast from '../component/show/Cast';
import Details from '../component/show/Details';
import seasons from '../component/show/seasons';
import ShowMainPage from '../component/show/ShowMainPage';
import { apiGet } from '../misc/configue';
import { InfoBlock, ShowPageWrapper } from './Show.styled';

const reducer = (prevState, action) => {
  switch (action.type) {
    case 'FETCH_SUCCESS': {
      return { isloading: false, error: null, show: action.show };
    }
    case 'FETCH_FAILED': {
      return { isloading: false, error: action.error };
    }
    default:
      return prevState;
  }
};

const initialState = {
  show: null,
  isloading: true,
  error: null,
};

const Show = () => {
  // eslint-disable-next-line
  const { id } = useParams();
  const [{ show, isloading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  // const [show, SetShow] = useState(null);
  // const [isloading, Setisloading] = useState(true);
  // const [error, Seterror] = useState(null);

  // console.log('Params', Params);
  useEffect(() => {
    let ismounted = true;

    apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`)
      .then(Results => {
        setTimeout(() => {
          if (ismounted) {
            dispatch({ type: 'FETCH_SUCCESS', show: Results });
            // SetShow(Results);
            // Setisloading(false);
          }
        }, 2000);
      })
      .catch(err => {
        if (ismounted) {
          dispatch({ type: 'FETCH_FAILED', error: err.message });
          // Seterror(err.message);
          // Setisloading(false);
        }
      });
    return () => {
      ismounted = false;
    };
  }, [id]);

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

      <InfoBlock>
        <h2>Seasons</h2>
        <seasons season={show._embedded.season} />
      </InfoBlock>

      <InfoBlock>
        <h2>Cast</h2>
        <Cast cast={show._embedded.cast} />
      </InfoBlock>
    </ShowPageWrapper>
  );
};

export default Show;
