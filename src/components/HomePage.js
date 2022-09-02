import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  getFxPairInfo,
  // getFxPairs,
  allPairs,
  pairsAud,
  pairsCad,
  pairsChf,
  pairsEur,
  pairsGbp,
  pairsJpy,
  pairsNzd,
  pairsUsd,
} from '../redux/Reducers';
import './HomePage.css';

const HomePage = () => {
  const dispatch = useDispatch();
  let pairs = useSelector((state) => state.mainFxPairs.pairsFiltered);
  const allPairsAr = useSelector((state) => state.mainFxPairs.pairs);

  const handleFiltering = (e) => {
    switch (e.target.value) {
      case 'ALL':
        dispatch(allPairs());
        break;
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
    pairs = allPairsAr;
  } if (pairs.length > 100) {
    pleaseSelect = 'You are watching the whole FX Pairs List, you can select your preferred instrument using the options above';
  }

  return (
    <section className="home-page">
      <div className="top-part">
        <h1>This App covers some of the major currency pairs traded worldwide</h1>
        <div className="top-buttons">
          <button type="button" onClick={handleFiltering} value="ALL">All Pairs </button>
          <button type="button" onClick={handleFiltering} value="USD">USD Pairs </button>
          <button type="button" onClick={handleFiltering} value="EUR">EUR Pairs </button>
          <button type="button" onClick={handleFiltering} value="AUD">AUD Pairs </button>
          <button type="button" onClick={handleFiltering} value="CAD">CAD Pairs </button>
          <button type="button" onClick={handleFiltering} value="CHF">CHF Pairs </button>
          <button type="button" onClick={handleFiltering} value="GBP">GBP Pairs </button>
          <button type="button" onClick={handleFiltering} value="JPY">JPY Pairs </button>
          <button type="button" onClick={handleFiltering} value="NZD">NZD Pairs </button>
        </div>
        {/* <button type="button" onClick={() => { dispatch(getFxPairs()); }}>
          refresh
        </button> */}
        <h2>{pleaseSelect}</h2>
      </div>
      <ul>
        <h2>Instrument</h2>
        {pairs.map((pair) => (
          <li key={pair.ticker} className="pair-card">
            <Link to="/info" onClick={() => { dispatch(getFxPairInfo(pair.ticker.replace('/', ''))); }}>
              <div className="pair-info">
                <h2>{pair.ticker}</h2>
                <p>{pair.bid}</p>
                <p>
                  {Math.round(pair.changes * 100 * 100) / 100}
                  %
                </p>
                {/* <p>
                  Princing Date:
                  {' '}
                  {pair.date.split('').slice(11).join('')}
                </p> */}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
