import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home/home';
import { Day } from './pages/day/day';
import { Header } from './components/header/header';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element={<Header/>}>
          <Route path='index' element={<Home/>} />
          <Route path='day' element={<Day/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
