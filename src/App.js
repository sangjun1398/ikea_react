// import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Main from './pages/Main';
import Sub from './pages/Sub';
import Bath from './pages/SubTab/Bath';
import Bed from './pages/SubTab/Bed';
import Furniture from './pages/SubTab/Furniture';
import Kitchen from './pages/SubTab/Kitchen';
import Light from './pages/SubTab/Light';
import Office from './pages/SubTab/Office';
import Outdoor from './pages/SubTab/Outdoor';
import Smart from './pages/SubTab/Smart';
import Storage from './pages/SubTab/Storage';
import Detail from './pages/Detail';
import Total from './pages/Detail/Total';
import Explain from './pages/Detail/Explain';
import Size from './pages/Detail/Size';
import Steel from './pages/Detail/Steel';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/sub' element={<Sub/>}>
        <Route path='/sub' element={<Bath/>}/>
        <Route path='bed' element={<Bed/>}/>
        <Route path='furniture' element={<Furniture/>}/>
        <Route path='kitchen' element={<Kitchen/>}/>
        <Route path='light' element={<Light/>}/>
        <Route path='office' element={<Office/>}/>
        <Route path='outdoor' element={<Outdoor/>}/>
        <Route path='smart' element={<Smart/>}/>
        <Route path='storage' element={<Storage/>}/>
      </Route>
      <Route path='/detail' element={<Detail/>}>
        <Route path='/detail' element={<Total/>}/>
        <Route path='explain' element={<Explain/>}/>
        <Route path='size' element={<Size/>}/>
        <Route path='steel' element={<Steel/>}/>
      </Route>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
