import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import PairInfo from './components/PairInfo';

const App = () => (
  <>
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/info" element={<PairInfo />} />
    </Routes>
  </>
);

export default App;
