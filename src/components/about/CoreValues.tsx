import { Palette, Lightbulb, Wrench, Heart } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const values = [
  {
    icon: Palette,
    title: 'Creativity',
    description:
      'We inspire creative thinking and problem-solving, empowering learners to transform ideas into impactful digital solutions.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    description:
      'We embrace emerging technologies and forward-thinking approaches to prepare learners for the future of work.',
  },
  {
    icon: Wrench,
    title: 'Practical Learning',
    description:
      'We believe the best learning happens through hands-on projects, real-world experiences, and industry-relevant practice.',
  },
  {
    icon: Heart,
    title: 'Integrity',
    description:
      'We uphold honesty, professionalism, accountability, and ethical practices in every learning experience and partnership.',
  },
];

export default function CoreValues() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading title="Our Core Values" />
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, i) => {
            const Icon = value.icon;
            return (
              <RevealOnScroll key={value.title} delay={i * 100}>
                <div className="group h-full bg-white rounded-2xl p-7 shadow-card border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="w-14 h-14 rounded-2xl bg-brand-blue/10 flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-300">
                    <Icon
                      size={26}
                      className="text-brand-blue group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-brand-blue mb-3">{value.title}</h3>
                  <p className="text-sm text-ink-dark leading-relaxed">{value.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
