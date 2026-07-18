import { useEffect, useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChoose from './components/WhyChoose';
import HowYouLearn from './components/HowYouLearn';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import AboutPage from './components/about/AboutPage';
import CorporateTrainingPage from './components/corporate/CorporateTrainingPage';

function useHashRoute() {
  const [route, setRoute] = useState(() => window.location.hash.replace(/^#\/?/, ''));

  useEffect(() => {
    const onHashChange = () => {
      setRoute(window.location.hash.replace(/^#\/?/, ''));
      window.scrollTo(0, 0);
    };
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  return route;
}

function App() {
  const route = useHashRoute();

  const renderPage = () => {
    if (route === 'about') {
      return (
        <>
          <AboutPage />
          <div aria-hidden className="h-12 sm:h-20" />
        </>
      );
    }
    if (route === 'corporate-training') {
      return (
        <>
          <CorporateTrainingPage />
          <div aria-hidden className="h-12 sm:h-20" />
        </>
      );
    }
    return (
      <>
        <main>
          <Hero />
          <Courses />
          <WhyChoose />
          <HowYouLearn />
          <FinalCTA />
        </main>
        <div aria-hidden className="h-12 sm:h-20" />
      </>
    );
  };

  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Header />
      {renderPage()}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
