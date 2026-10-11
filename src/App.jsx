import Header from './components/Header.jsx';
import Hero from './components/Hero.jsx';
import Marquee from './components/Marquee.jsx';
import About from './components/About.jsx';
import Stats from './components/Stats.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import { projects } from './data.js';

const NAV = [
  { href: '#about', label: 'Обо мне' },
  { href: '#stack', label: 'Стек' },
  projects.length > 0 && { href: '#projects', label: 'Проекты' },
  { href: './catalog.html', label: 'Каталог' },
  { href: '#contact', label: 'Контакты' },
].filter(Boolean);

export default function App() {
  return (
    <div className="root">
      <div className="container">
        <Header nav={NAV} />
        <main>
          <Hero />
          <Marquee />
          <About />
          <Stats />
          <Projects />
          <Contact />
        </main>
        <Footer pageLinks={[{ href: './catalog.html', label: 'Каталог' }]} />
      </div>
    </div>
  );
}
