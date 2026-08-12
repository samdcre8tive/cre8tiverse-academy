import { useEffect, useState } from 'react';
import Header from './components/Header';
import { useSeo, PAGE_SEO } from './hooks/useSeo';
import Hero from './components/Hero';
import Courses from './components/Courses';
import WhyChoose from './components/WhyChoose';
import HowYouLearn from './components/HowYouLearn';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import AboutPage from './components/about/AboutPage';
import CorporateTrainingPage from './components/corporate/CorporateTrainingPage';
import ContactPage from './components/contact/ContactPage';

function usePathRoute() {
  const [path, setPath] = useState(() => window.location.pathname);

  useEffect(() => {
    const onPopState = () => {
      setPath(window.location.pathname);
      window.scrollTo(0, 0);
    };
    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  return path;
}

export function navigate(to: string) {
  window.history.pushState({}, '', to);
  window.dispatchEvent(new PopStateEvent('popstate'));
}

function App() {
  const path = usePathRoute();
  const route = path.replace(/^\//, '');
  const seoConfig = PAGE_SEO[route] ?? PAGE_SEO.home;
  useSeo(seoConfig);

  const renderPage = () => {
    if (route === 'about') return <AboutPage />;
    if (route === 'corporate-training') return <CorporateTrainingPage />;
    if (route === 'contact') return <ContactPage />;
    if (route === 'courses') {
      return (
        <>
          <main><Courses /></main>
          <div aria-hidden className="h-12 sm:h-20" />
        </>
      );
    }
    if (route === 'learning-options') {
      return (
        <>
          <main><HowYouLearn /></main>
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
    </div>
  );
}

export default App;
