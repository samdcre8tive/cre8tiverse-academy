import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center overflow-hidden"
    >
      {/* Full-width background image */}
      <img
        src="https://i.imgur.com/h0TvUK1.png"
        alt="Cre8tiverse Academy learners mastering digital skills"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />

      {/* Premium blue gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(35,36,100,0.85) 0%, rgba(35,36,100,0.75) 50%, rgba(35,36,100,0.60) 100%)',
        }}
      />

      {/* Centered hero content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Academy brand name */}
        <h2
          className="animate-fade-up opacity-0 text-xl sm:text-2xl font-bold text-white leading-tight"
          style={{ animationDelay: '0.2s' }}
        >
          Cre8tiverse Academy
        </h2>

        {/* Label */}
        <p
          className="animate-fade-in opacity-0 mt-5 text-[11px] sm:text-xs font-medium uppercase tracking-[0.2em] text-brand-orange"
          style={{ animationDelay: '0.35s' }}
        >
          Preparing Africa's Next Generation of Digital Professionals
        </p>

        {/* Headline */}
        <h1
          className="animate-fade-up opacity-0 mt-6 text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-white leading-[1.1] tracking-tight"
          style={{ animationDelay: '0.5s' }}
        >
          Learn Digital Skills
          <br />
          for the AI Era.
        </h1>

        {/* Description */}
        <p
          className="animate-fade-up opacity-0 mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-[680px] mx-auto"
          style={{ animationDelay: '0.65s' }}
        >
          Empowering aspiring professionals, creators, and innovators with practical, in-demand
          digital skills through hands-on, AI-integrated learning for the digital economy.
        </p>

        {/* Buttons */}
        <div
          className="animate-fade-up opacity-0 mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
          style={{ animationDelay: '0.8s' }}
        >
          <Button href="#apply" variant="primary" className="px-8 py-4 text-base">
            Apply Now
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
