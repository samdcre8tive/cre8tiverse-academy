import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const APPLICATION_FORM_URL = 'https://forms.gle/cQ1HY477y55KoirbA';

export default function AboutFinalCTA() {
  return (
    <section id="apply" className="relative overflow-hidden flex items-center justify-center py-28 lg:py-36">
      <img
        src="https://i.imgur.com/cgEzn7O.png"
        alt="Cre8tiverse Academy — ready to build future-ready skills"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(35,36,100,0.85) 0%, rgba(35,36,100,0.75) 50%, rgba(35,36,100,0.60) 100%)',
        }}
      />

      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Build Future-Ready Skills?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-[650px] mx-auto">
          Whether you're just beginning your digital journey or looking to advance your career,
          Cre8tiverse Academy is here to help you gain practical, industry-ready digital skills for
          the future of work.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={APPLICATION_FORM_URL} variant="primary" className="px-8 py-4 text-base">
            Apply Now
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
