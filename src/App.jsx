import './app.scss'
import Contact from './components/contact/Contact';
import Cursor from './components/cursor/Cursor';
import Hero from './components/hero/Hero';
import Navbar from './components/navbar/Navbar';
import Parallax from './components/parallax/Parallax';
import Portfolio from './components/portfolio/Portfolio';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Skills from './components/skills/Skills';

const App = () => {
  return <div>
    <Cursor/>
    <section id='Homepage'><Navbar/>
    <Hero/>
    </section>
    <section id='Services'><Parallax type='services'/></section>
    <section>
      
    <Skills/>
    </section>
    
   <Portfolio />
    <section id='Contact'>
      <Contact />
    </section>
    <ToastContainer />
    
  </div>;
};

export default App;
