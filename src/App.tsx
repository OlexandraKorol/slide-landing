import { Header } from './components/layout/Header';
import {Hero} from './components/sections/Hero';
import Features from './components/sections/Features';
import Footer from './components/layout/Footer';
import {CompanyWiki} from './components/sections/CompanyWiki';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <CompanyWiki />
        {/* <Features /> */}
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
