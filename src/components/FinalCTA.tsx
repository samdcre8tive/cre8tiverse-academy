import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';

const APPLICATION_FORM_URL = 'https://forms.gle/cQ1HY477y55KoirbA';

export default function FinalCTA() {
  return (
    <section id="apply" className="relative overflow-hidden flex items-center justify-center py-28 lg:py-36">
      {/* Full-width background image */}
      <img
        src="https://i.imgur.com/aVSknT5.png"
        alt="Cre8tiverse Academy — start your digital journey"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />

      {/* Premium blue gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(35,36,100,0.85) 0%, rgba(35,36,100,0.75) 50%, rgba(35,36,100,0.60) 100%)',
        }}
      />

      {/* Centered content */}
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Start Your Digital Journey Today
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-[650px] mx-auto">
          Take the first step toward building practical, future-ready digital skills with
          Cre8tiverse Academy.
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
