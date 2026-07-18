import { ArrowRight } from 'lucide-react';
import Button from '../ui/Button';

const INQUIRY_FORM_URL = 'https://forms.gle/77XSf89VpTwHdKHy9';

export default function CorpFinalCTA() {
  return (
    <section id="corp-apply" className="relative overflow-hidden flex items-center justify-center py-28 lg:py-36">
      <img
        src="https://i.imgur.com/NHWLkEH.png"
        alt="Ready to empower your team with Cre8tiverse Academy"
        className="absolute inset-0 w-full h-full object-cover object-center"
        loading="lazy"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to right, rgba(35,36,100,0.88) 0%, rgba(35,36,100,0.78) 50%, rgba(35,36,100,0.65) 100%)',
        }}
      />
      <div className="relative z-10 max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Empower Your Team?
        </h2>
        <p className="mt-5 text-base sm:text-lg text-white/85 leading-relaxed max-w-[650px] mx-auto">
          Let's discuss your organization's training needs and design a customized learning
          solution.
        </p>
        <div className="mt-10 flex justify-center">
          <Button href={INQUIRY_FORM_URL} variant="primary" className="px-8 py-4 text-base">
            Book a Consultation
            <ArrowRight size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
}
