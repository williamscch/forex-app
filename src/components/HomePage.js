/* eslint-disable react/no-unknown-property */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa';
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
  const instrument = useSelector((state) => state.mainFxPairs.filter);

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
  }
  if (pairs.length > 100) {
    pleaseSelect = 'You are watching the whole FX Pairs List, you can select your preferred instrument using the options above';
  }

  return (
    <section className="home-page">
      <div className="top-part">
        <h1>
          This App covers some of the major currency pairs traded worldwide
        </h1>
        <div className="top-buttons">
          <button type="button" onClick={handleFiltering} value="ALL">
            ALL
          </button>
          <button type="button" onClick={handleFiltering} value="USD">
            USD
          </button>
          <button type="button" onClick={handleFiltering} value="EUR">
            EUR
          </button>
          <button type="button" onClick={handleFiltering} value="AUD">
            AUD
          </button>
          <button type="button" onClick={handleFiltering} value="CAD">
            CAD
          </button>
          <button type="button" onClick={handleFiltering} value="CHF">
            CHF
          </button>
          <button type="button" onClick={handleFiltering} value="GBP">
            GBP
          </button>
          <button type="button" onClick={handleFiltering} value="JPY">
            JPY
          </button>
          <button type="button" onClick={handleFiltering} value="NZD">
            NZD
          </button>
        </div>
        {/* <button type="button" onClick={() => { dispatch(getFxPairs()); }}>
          refresh
        </button> */}
        <h2>{pleaseSelect}</h2>
      </div>
      <div className="list-container">
        <h2>
          Current Instrument:
          {' '}
          {instrument}
        </h2>
        <ul className="list">
          {pairs.map((pair) => (
            <li key={pair.ticker}>
              <Link
                to="/info"
                onClick={() => {
                  dispatch(getFxPairInfo(pair.ticker.replace('/', '')));
                }}
              >
                <div className="pair-info">
                  <h3>{pair.ticker}</h3>
                  <div className="num">
                    <span>
                      {pair.changes < 0 ? <FaArrowDown style={{ color: '#e93836' }} /> : <FaArrowUp style={{ color: '#14b058' }} />}

                    </span>
                    <p className={
                pair.changes < 0
                  ? 'red-num'
                  : 'green-num'
              }
                    >
                      {pair.bid}

                    </p>
                    <p className={
                pair.changes < 0
                  ? 'red-num'
                  : 'green-num'
              }
                    >
                      {Math.round(pair.changes * 100 * 100) / 100}
                      %
                    </p>
                  </div>

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
      </div>
    </section>
  );
};

export default HomePage;
