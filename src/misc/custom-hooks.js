import { useReducer, useEffect, useState, useRef, useCallback } from 'react';
import { apiGet } from './configue';

function showsReducer(prevState, action) {
  switch (action.type) {
    case 'ADD': {
      return [...prevState, action.showId];
    }

    case 'REMOVE': {
      return prevState.filter(showId => showId !== action.showId);
    }

    default:
      return prevState;
  }
}

function usePersistedReducer(reducer, initialState, key) {
  const [state, dispatch] = useReducer(reducer, initialState, initial => {
    const persisted = localStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [state, key]);

  return [state, dispatch];
}

export function useShows(key = 'shows') {
  return usePersistedReducer(showsReducer, [], key);
}

export function useLastQuery(key = 'useLastQuery') {
  const [input, SetInput] = useState(() => {
    const persisted = sessionStorage.getItem(key);

    return persisted ? JSON.parse(persisted) : '';
  });
  const setPersisited = useCallback(
    newState => {
      SetInput(newState);
      sessionStorage.setItem(key, JSON.stringify(newState));
    },
    [key]
  );
  return [input, setPersisited];
}

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

export function useShow(showId) {
  const [state, dispatch] = useReducer(reducer, {
    show: null,
    isloading: true,
    error: null,
  });
  // const [show, SetShow] = useState(null);
  // const [isloading, Setisloading] = useState(true);
  // const [error, Seterror] = useState(null);

  // console.log('Params', Params);
  useEffect(() => {
    let ismounted = true;

    apiGet(`/shows/${showId}?embed[]=episodes&embed[]=cast`)
      .then(Results => {
        if (ismounted) {
          dispatch({ type: 'FETCH_SUCCESS', show: Results });
          // SetShow(Results);
          // Setisloading(false);
        }
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
  }, [showId]);
  return state;
}
export function useWhyDidYouUpdate(name, props) {
  // Get a mutable ref object where we can store props ...
  // ... for comparison next time this hook runs.
  const previousProps = useRef();
  useEffect(() => {
    if (previousProps.current) {
      // Get all keys from previous and current props
      const allKeys = Object.keys({ ...previousProps.current, ...props });
      // Use this object to keep track of changed props
      const changesObj = {};
      // Iterate through keys
      allKeys.forEach(key => {
        // If previous is different from current
        if (previousProps.current[key] !== props[key]) {
          // Add to changesObj
          changesObj[key] = {
            from: previousProps.current[key],
            to: props[key],
          };
        }
      });
      // If changesObj not empty then output to console
      if (Object.keys(changesObj).length) {
        console.log('[why-did-you-update]', name, changesObj);
      }
    }
    // Finally update previousProps with current props for next hook call
    previousProps.current = props;
  });
}
