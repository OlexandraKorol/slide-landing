import { Header } from './components/layout/Header/Header'; // <-- Update this path if needed, e.g. './components/layout/header'
import { Hero } from './components/sections/Hero/Hero';
import { Templates } from './components/sections/Templates/Templates';
import Footer from './components/layout/Footer/Footer';
import { CompanyWiki } from './components/sections/CompanyWiki/CompanyWiki';
import './App.css';
import { Testimonial } from './components/sections/Testimonial/Testimonial';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CompanyWiki />
        <Templates />
        <Testimonial />
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
