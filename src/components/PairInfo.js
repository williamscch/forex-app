import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import './PairInfo.css';

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
      <>
        <div className="date">
          <p>
            Pricing Date:
            {' '}
            {info[0].date}
          </p>
        </div>

        <article className="high-low-container">
          <div className="high-low">
            <h2>{info[0].high}</h2>
            <p>High</p>
          </div>
          <div className="high-low">
            <h2>{info[0].low}</h2>
            <p>Low</p>
          </div>
        </article>

        <article className="open-close-container">
          <div className="open-close">
            <h3>{info[0].open}</h3>
            <p>Open</p>
          </div>
          <div className="open-close">
            <h3>{info[0].close}</h3>
            <p>Close</p>
          </div>
        </article>

        <div className="volume">
          <h4>{info[0].volume}</h4>
          <p>Volume</p>
        </div>

      </>
    );
  }

  return (
    <section className="info-page-section">
      <button type="button" className="go-back">
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
