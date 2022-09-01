import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PairInfo from './components/PairInfo';

const App = () => (
  <>
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/info" element={<PairInfo />} />
      </Routes>
    </Router>
  </>
);

export default App;
