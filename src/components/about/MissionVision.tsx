import { Target, Eye } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const cards = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To make high-quality digital skills education accessible, practical, and future-focused, empowering individuals to build successful careers, drive innovation, and thrive in the digital economy.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      "To become Africa's leading digital skills academy, empowering the next generation of creators, innovators, and technology professionals for the future of work.",
  },
];

export default function MissionVision() {
  return (
    <section className="bg-ink-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading title="Our Mission & Vision" />
        </RevealOnScroll>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <RevealOnScroll key={card.title} delay={i * 120}>
                <div className="group h-full bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ease-out">
                  <div className="w-16 h-16 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300">
                    <Icon
                      size={30}
                      className="text-brand-orange group-hover:text-white transition-colors duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-bold text-brand-blue mb-4">{card.title}</h3>
                  <p className="text-base text-ink-dark leading-relaxed">{card.description}</p>
                </div>
              </RevealOnScroll>
            );
          })}
        </div>
      </div>
    </section>
  );
}
