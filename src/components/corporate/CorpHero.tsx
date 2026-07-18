import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

export default function CorpHero() {
  const scrollToFinalCTA = () => {
    document.querySelector('#corp-apply')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
      <img
        src="https://i.imgur.com/LcokNi6.png"
        alt="Corporate team training at Cre8tiverse Academy"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="eager"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(35,36,100,0.88) 0%, rgba(35,36,100,0.78) 50%, rgba(35,36,100,0.65) 100%)',
        }}
      />
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <h1
          className="animate-fade-up opacity-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] tracking-tight max-w-[900px] mx-auto"
          style={{ animationDelay: '0.2s' }}
        >
          Empower Your Team with Future-Ready Digital Skills
        </h1>
        <p
          className="animate-fade-up opacity-0 mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-[700px] mx-auto"
          style={{ animationDelay: '0.4s' }}
        >
          Equip your employees, students, or members with practical, industry-relevant digital
          skills through customized training programs designed to meet your organization's goals.
        </p>
        <div
          className="animate-fade-up opacity-0 mt-10 flex justify-center"
          style={{ animationDelay: '0.6s' }}
        >
          <Button onClick={scrollToFinalCTA} variant="primary" className="px-8 py-4 text-base">
            Book a Consultation
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
