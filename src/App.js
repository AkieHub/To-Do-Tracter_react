
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './component/child-component/form/Login';
import Intro from './component/child-component/Intro';
import Footer from './component/child-component/Footer';
import Features from './component/child-component/Features';
import Join from './component/child-component/Join';
import SideBar from './component/common/SideBar'
import AllTask from './component/pages/AllTask'
import Archive from './component/pages/Archive'
import Completed from './component/pages/Completed'
import Pending from './component/pages/Pending'





import Registor from './component/child-component/form/Registor';


// import { Container, Row, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, Collapse, NavLink } from 'reactstrap'

import Nab from './component/common/Nab';
import About from './component/child-component/About';


function App() {
  return (
    <>

      <BrowserRouter>
        <Nab />
        <Routes>
          <Route path='/' element={<Intro />}>
            <Route path='' element={<Login />} />
            <Route path='register' element={<Registor />} />
          </Route>
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
          <Route path='/join' element={<Join />} />
          <Route path='/sideBar' element={<SideBar />}>
            <Route path='' element={<AllTask />} />
            <Route path='complete' element={<Completed />} />
            <Route path='pending' element={<Pending />} />
            <Route path='archive' element={<Archive />} />
            <Route path='*' element={<> not found</>} />
          </Route>
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
