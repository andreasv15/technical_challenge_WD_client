import logo from './logo.svg';
import './App.css';
import Phones from './pages/Phones';
import { Route, Routes } from 'react-router';
import PhoneDetails from './pages/PhoneDetails';

function App() {
  return (
    <div className="App">
    <Routes>
    <Route path="/" element={<Phones />} />
    <Route path="/phones/:id" element={<PhoneDetails />} />
    </Routes>
    </div>
  );
}

export default App;
