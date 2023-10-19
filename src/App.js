import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import NavigateExample from './pages/NavigateExample';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/nav-example' element={<NavigateExample />}/>
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        Foooter
      </Router>
    </>
  );
}

export default App;
