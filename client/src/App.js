import './App.css';
import Loginpage from './pages/Loginpage';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';
import Register from './pages/Register';
import Areas from './pages/Areas';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes >
        <Route path="/" element={<Loginpage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/areas" element={<Areas />} />

      </Routes>
    </div>
  );
}

export default App;
