import { Bot, Wrench, Rocket } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const highlights = [
  { Icon: Bot, label: 'AI-Integrated Learning' },
  { Icon: Wrench, label: 'Hands-on Projects' },
  { Icon: Rocket, label: 'Future-Ready Skills' },
];

export default function OurStory() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-[45%_55%] gap-10 lg:gap-16 items-center">
          {/* Image */}
          <RevealOnScroll>
            <div className="group relative overflow-hidden rounded-[28px] shadow-soft-lg transition-all duration-500 ease-out hover:shadow-xl hover:-translate-y-1.5">
              <img
                src="https://i.imgur.com/aDKLa04.png"
                alt="Cre8tiverse Academy students learning digital skills"
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </RevealOnScroll>

          {/* Content */}
          <div className="max-w-[640px]">
            <RevealOnScroll>
              <div className="w-16 h-1 rounded-full bg-brand-orange mb-5" />
              <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-brand-blue leading-tight">
                Our Story
              </h2>
            </RevealOnScroll>

            <RevealOnScroll delay={120} className="mt-7 space-y-5">
              <p className="text-lg sm:text-xl font-semibold text-brand-blue leading-relaxed">
                Cre8tiverse Academy was founded on a simple belief: digital education should be
                practical, accessible, and future-focused.
              </p>
              <p className="text-base sm:text-lg text-ink-dark leading-relaxed">
                As technology continues to transform industries, the demand for digital skills has
                never been greater. Yet many aspiring professionals still struggle to access
                learning that prepares them for real opportunities.
              </p>
              <p className="text-base sm:text-lg text-ink-dark leading-relaxed">
                Cre8tiverse Academy exists to bridge that gap by combining hands-on learning,
                real-world projects, and AI-enhanced education to help learners develop practical
                skills they can confidently apply in the workplace, in business, or as freelancers.
              </p>
              <p className="text-base sm:text-lg text-ink-dark leading-relaxed">
                We are committed to creating learning experiences that inspire innovation, encourage
                creativity, and prepare individuals to thrive in the digital economy.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={240} className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
              {highlights.map(({ Icon, label }) => (
                <div key={label} className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: 'rgba(247,120,11,0.1)' }}
                  >
                    <Icon size={20} className="text-brand-orange" />
                  </div>
                  <span className="text-sm font-semibold text-brand-blue">{label}</span>
                </div>
              ))}
            </RevealOnScroll>
          </div>
        </div>
      </div>
    </section>
  );
}
