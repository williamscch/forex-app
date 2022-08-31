import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { getFxPairs } from '../redux/PairsList';

const HomePage = () => {
  const dispatch = useDispatch();
  const pairs = useSelector((state) => state.mainFxPairs);

  useEffect(() => {
    if (!pairs.length) {
      dispatch(getFxPairs());
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const newPairsArr = pairs.filter((pair) => pair.ticker.includes('GBP'));

  return (
    <section>
      <div>
        <h1>hello my friend</h1>
        <button type="button" onClick={() => dispatch(getFxPairs())}>refresh</button>
      </div>
      <ul>
        {newPairsArr.map((pair, index) => (
        // eslint-disable-next-line react/no-array-index-key
          <li key={index} className="pair-card">
            <Link to="/info">
              <div className="pair-info">
                <h2>
                  {pair.ticker}
                </h2>
                <p>{pair.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
