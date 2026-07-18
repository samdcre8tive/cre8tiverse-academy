import { CheckCircle2, Rocket, Lightbulb, Heart } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const highlights = [
  { Icon: CheckCircle2, label: 'Practical Learning' },
  { Icon: Rocket, label: 'Career Growth' },
  { Icon: Lightbulb, label: 'Innovation' },
  { Icon: Heart, label: 'Continuous Support' },
];

export default function OurCommitment() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[55%_45%] gap-10 lg:gap-16 items-center">
          {/* Content */}
          <div className="max-w-[640px]">
            <RevealOnScroll>
              <div className="w-16 h-1 rounded-full bg-brand-orange mb-5" />
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-brand-blue leading-tight">
                Committed to Your Growth
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={120} className="mt-7 space-y-5">
              <p className="text-base sm:text-lg text-ink-dark leading-relaxed">
                At Cre8tiverse Academy, we're committed to helping every learner build confidence
                through practical experience, relevant skills, and continuous support.
              </p>
              <p className="text-base sm:text-lg text-ink-dark leading-relaxed">
                Whether you're starting your digital journey, changing careers, or building new
                opportunities, our goal is to provide a learning environment where curiosity is
                encouraged, creativity is nurtured, and growth never stops.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={240} className="mt-9 space-y-4">
              {highlights.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(247,120,11,0.1)' }}
                  >
                    <Icon size={20} className="text-brand-orange" />
                  </div>
                  <span className="text-base font-semibold text-brand-blue">{label}</span>
                </div>
              ))}
            </RevealOnScroll>
          </div>

          {/* Image */}
          <RevealOnScroll delay={120}>
            <div className="group relative overflow-hidden rounded-[28px] shadow-soft-lg transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1.5">
              <img
                src="https://i.imgur.com/5qsjA36.png"
                alt="Cre8tiverse Academy mentors supporting learner growth"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>
        </div>
      </div>
    </section>
  );
}
