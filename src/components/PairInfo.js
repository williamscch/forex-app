import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFxPairInfo } from '../redux/PairsInfo';

const PairInfo = () => {
  const dispatch = useDispatch();
  const hey = 'hey';

  useEffect(() => {
    dispatch(getFxPairInfo());
  });
  return (
    <>
      <h1>{hey}</h1>
      <button type="button">
        {' '}
        <Link to="/"> Go back</Link>
      </button>
    </>
  );
};

export default PairInfo;
