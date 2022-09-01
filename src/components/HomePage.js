import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getFxPairs,
  pairsAud,
  pairsCad,
  pairsChf,
  pairsEur,
  pairsGbp,
  pairsJpy,
  pairsNzd,
  pairsUsd,
} from '../redux/Reducers';

const HomePage = () => {
  const dispatch = useDispatch();
  let pairs = useSelector((state) => state.mainFxPairs.pairsFiltered);
  const allPairs = useSelector((state) => state.mainFxPairs.pairs);
  // const filter = useSelector((state) => state.mainFxPairs.filter);

  const handleFiltering = (e) => {
    switch (e.target.value) {
      case 'USD':
        dispatch(pairsUsd());
        break;
      case 'EUR':
        dispatch(pairsEur());
        break;
      case 'AUD':
        dispatch(pairsAud());
        break;
      case 'CAD':
        dispatch(pairsCad());
        break;
      case 'CHF':
        dispatch(pairsChf());
        break;
      case 'GBP':
        dispatch(pairsGbp());
        break;
      case 'JPY':
        dispatch(pairsJpy());
        break;
      case 'NZD':
        dispatch(pairsNzd());
        break;

      default:
        break;
    }
  };

  let pleaseSelect = '';

  if (pairs.length === 0) {
    pairs = allPairs;
    pleaseSelect = 'Please choose the currency pairs you are interested about';
  }

  return (
    <section>
      <div>
        <h1>hello my friend</h1>
        <div>
          <button type="button" onClick={handleFiltering} value="USD">USD Pairs </button>
          <button type="button" onClick={handleFiltering} value="EUR">EUR Pairs </button>
          <button type="button" onClick={handleFiltering} value="AUD">AUD Pairs </button>
          <button type="button" onClick={handleFiltering} value="CAD">CAD Pairs </button>
          <button type="button" onClick={handleFiltering} value="CHF">CHF Pairs </button>
          <button type="button" onClick={handleFiltering} value="GBP">GBP Pairs </button>
          <button type="button" onClick={handleFiltering} value="JPY">JPY Pairs </button>
          <button type="button" onClick={handleFiltering} value="NZD">NZD Pairs </button>
        </div>
        <button type="button" onClick={() => { dispatch(getFxPairs()); }}>
          refresh
        </button>
        <h2>{pleaseSelect}</h2>
      </div>
      <ul>
        {pairs.map((pair) => (
          <li key={pair.ticker} className="pair-card">
            <Link to="/info">
              <div className="pair-info">
                <h2>{pair.ticker}</h2>
                <p>
                  Princing Date:
                  {' '}
                  {pair.date.split('').slice(11).join('')}
                </p>
                <p>{pair.bid}</p>
                <p>
                  {Math.round(pair.changes * 100 * 100) / 100}
                  %
                </p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
