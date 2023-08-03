import './App.css';
import Layout from './components/shared/Layout';
import {Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Explore from './pages/Explore';
import Subscription from './pages/Subscription';
import FilterProject from './pages/FilterProject';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />}/>
      <Route path='/explore' element={<Explore />}/>
      <Route path='/filterproject' element={<FilterProject />} />
      <Route path='/subscription' element={<Subscription />}
      />
    </Routes>
    
  );
}

export default App;
