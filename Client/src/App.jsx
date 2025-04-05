import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import City from './pages/City';
import State from './pages/State';
import Edit from './pages/Edit';
import Dispaly from './pages/Dispaly';
import Country from './pages/Country';
import Home from './pages/Home';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
           <Route index element={<Home />} />
          <Route path="city" element={<City />} />
          <Route path="state" element={<State />} />
          <Route path="edit" element={<Edit />} />
          <Route path="display" element={<Dispaly />} />
          <Route path='country' element={<Country/>}/>
          <Route path='home' element={<Home/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
