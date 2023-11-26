import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom'
import ProjectShow from './pages/projects/Show'
import ProjectIndex from './pages/projects/Index'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Navbar from './components/Navbar';
import PageNotFound from './pages/PageNotFound';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/projects' element={<ProjectIndex />} />
          <Route path='/projects/:slug' element={<ProjectShow />} />
          <Route path='*' element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
