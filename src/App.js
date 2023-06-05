import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import SingleCountry from './pages/SingleCountry';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/:name' element={<SingleCountry/>}/>
      </Routes>
    </div>
  );
}

export default App;
