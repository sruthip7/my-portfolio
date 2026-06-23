import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SmartSort from './pages/SmartSort';
import Expedia from './pages/Expedia';
import Microsoft from './pages/Microsoft';
import MunchMap from './pages/MunchMap';
import './index.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/smartsort" element={<SmartSort />} />
        <Route path="/expedia" element={<Expedia />} />
        <Route path="/microsoft" element={<Microsoft />} />
        <Route path="/munchmap" element={<MunchMap />} />
        </Routes>
    </Router>
  );
}

export default App;
