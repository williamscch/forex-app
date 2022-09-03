import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PairInfo from './components/PairInfo';
import StaticHeader from './components/StaticHeader';
import Footer from './components/Footer';

const App = () => (
  <>
    <StaticHeader />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<PairInfo />} />
      </Routes>
    </Router>
    <Footer />
  </>
);

export default App;
