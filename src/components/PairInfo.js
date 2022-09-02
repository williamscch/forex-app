import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './PairInfo.css';
import { FaExchangeAlt } from 'react-icons/fa';
import { SiExpertsexchange } from 'react-icons/si';
import { AiOutlineFieldTime } from 'react-icons/ai';
import { stateBack } from '../redux/Reducers';

const PairInfo = () => {
  // const dispatch = useDispatch();
  const info = useSelector((state) => state.mainFxPairs.dataInfo);
  const status = useSelector((state) => state.mainFxPairs.status);
  const dispatch = useDispatch();

  let content;

  if (status === 'loading' || status === '') {
    content = <p>Loading...</p>;
  }
  if (status === 'successful') {
    content = (
      <>
        <div className="date">
          <AiOutlineFieldTime />
          <p>
            Pricing Date:
            {' '}
            {info[0].date}
          </p>
        </div>

        <article className="high-low-container num-container">
          <div className="high-low">
            <h2>{info[0].high}</h2>
            <p>High</p>
          </div>
          <FaExchangeAlt className="icon" />
          <div className="high-low">
            <h2>{info[0].low}</h2>
            <p>Low</p>
          </div>
        </article>

        <article className="open-close-container num-container">
          <div className="open-close">
            <h3>{info[0].open}</h3>
            <p>Open</p>
          </div>
          <SiExpertsexchange className="icon icon2" />
          <div className="open-close">
            <h3>{info[0].close}</h3>
            <p>Close</p>
          </div>
        </article>

        <div className="volume">
          <h4>
            Volume:
            {' '}
            {info[0].volume}
          </h4>
        </div>

      </>
    );
  }

  return (
    <section className="info-page-section">
      <button type="button" className="go-back" onClick={() => dispatch(stateBack())}>
        <Link to="/" className="inner-button">
          {' '}
          <BiArrowBack />
          {' '}
          Go back
        </Link>
      </button>
      <div className="info-content">{content}</div>
    </section>
  );
};

export default PairInfo;
