import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PairInfo = () => {
  // const dispatch = useDispatch();
  const info = useSelector((state) => state.mainFxPairs.dataInfo);
  const status = useSelector((state) => state.mainFxPairs.status);

  let content;

  if (status === 'loading') {
    content = <p>Loading...</p>;
  }
  if (status === 'successful') {
    content = (
      <div>
        <p>
          Pricing Date:
          {' '}
          {info[0].date}
        </p>
        <h3>
          Open:
          {' '}
          {info[0].open}
        </h3>
        <h2>
          Low:
          {' '}
          {info[0].low}
        </h2>
        <h2>
          High:
          {info[0].high}
        </h2>
        <h4>
          Close:
          {' '}
          {info[0].close}
        </h4>
        <h4>
          Volume:
          {' '}
          {info[0].volume}
        </h4>
      </div>
    );
  }

  return (
    <>
      <button type="button">
        {' '}
        <Link to="/"> Go back</Link>
      </button>
      <div>{content}</div>
    </>
  );
};

export default PairInfo;
