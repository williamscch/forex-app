import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFxPairInfo } from '../redux/Reducers';

const PairInfo = () => {
  const dispatch = useDispatch();
  const info = useSelector((state) => state.mainFxPairs.dataInfo);

  console.log(info);

  useEffect(() => {
    dispatch(getFxPairInfo('USDGBP'));
  });
  return (
    <>

      <h1>{info[0].open}</h1>
      <button type="button">
        {' '}
        <Link to="/"> Go back</Link>
      </button>
    </>
  );
};

export default PairInfo;
