import { Monitor, Home } from 'lucide-react';
import { Section } from './ui/SectionHeading';
import SectionHeading from './ui/SectionHeading';

const modes = [
  {
    icon: Monitor,
    title: 'Live Online',
    description:
      'Learn from anywhere through interactive instructor-led classes.',
  },
  {
    icon: Home,
    title: 'In-Home Learning (Abuja)',
    description:
      'Receive personalized instructor-led training at your preferred location within Abuja.',
  },
];

export default function HowYouLearn() {
  return (
    <Section id="learning-options" className="bg-ink-light">
      <SectionHeading
        eyebrow="Learning Modes"
        title="How You'll Learn"
        description="Choose the learning format that works best for your schedule, location, and goals."
      />

      <div className="mt-14 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {modes.map((mode) => {
          const Icon = mode.icon;
          return (
            <div
              key={mode.title}
              className="group bg-white rounded-3xl p-8 lg:p-10 shadow-card border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ease-out text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-blue/5 flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-blue transition-colors duration-300">
                <Icon
                  size={30}
                  className="text-brand-blue group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-xl font-bold text-brand-blue mb-3">{mode.title}</h3>
              <p className="text-base text-ink-dark leading-relaxed">{mode.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
