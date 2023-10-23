import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import OsobaForm from './osoby/OsobaForm';
import Home from './osoby/Home';
import PojisteniForm from './osoby/PojisteniForm';
import OsobaDetail from './osoby/OsobaDetail';
import PojisteniDetail from './osoby/PojisteniDetail';

export function App() {
  

  return (
    <Router>
      <div className='container'>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
          <ul className='navbar-nav'>
            <li className='navbar-item'>
              <Link to={"/home"} className='nav-link'>Pojištěnci</Link>
            </li>
            <li className='navbar-item'>
              <Link to={"/osoba"} className='nav-link'>Nová osoba</Link>
            </li>
            <li className='navbar-item'>
              <Link to={"/pojisteni"} className='nav-link'>Pojištění</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route index path='/home' element={<Home />} />
          <Route path='/osoba' element={<OsobaForm />} />
          <Route path='/osoba/editovat/:id' element={<OsobaForm />} />
          <Route path='/detail/:id' element={<OsobaDetail />} />
          <Route path='/pojisteni/:id' element={<PojisteniForm />} />
          <Route path='/pojisteni/detail/:id' element={<PojisteniDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
