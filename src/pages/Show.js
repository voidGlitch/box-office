// eslint-disable-next-line
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { apiGet } from '../misc/configue';
const Show = () => {
  // eslint-disable-next-line
  const { id } = useParams();
  const [show, SetShow] = useState(null);
  const [isloading, Setisloading] = useState(true);
  const [error, Seterror] = useState(null);

  // console.log('Params', Params);
  useEffect(() => {
    let ismounted = true;

    apiGet(`/shows/${id}?embed[]=episodes&embed[]=cast`)
      .then(Results => {
        setTimeout(() => {
          if (ismounted) {
            SetShow(Results);
            Setisloading(false);
          }
        }, 2000);
      })
      .catch(err => {
        if (ismounted) {
          Seterror(err.message);
          Setisloading(false);
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

  return <div>this is a show page</div>;
};

export default Show;
