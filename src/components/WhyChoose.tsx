import { Bot, Wrench, Briefcase, GraduationCap } from 'lucide-react';
import { Section } from './ui/SectionHeading';
import SectionHeading from './ui/SectionHeading';

const features = [
  {
    icon: Bot,
    title: 'AI-Integrated Learning',
    description: 'Harness the power of AI tools throughout your learning journey to stay ahead in the modern digital workspace.',
  },
  {
    icon: Wrench,
    title: 'Hands-on Projects',
    description: 'Build real-world projects that form a professional portfolio, proving your skills to employers and clients.',
  },
  {
    icon: Briefcase,
    title: 'Industry-Relevant Curriculum',
    description: 'Learn from a curriculum continuously updated with input from industry experts to match current market demands.',
  },
  {
    icon: GraduationCap,
    title: 'Professional Certificate',
    description: 'Earn a recognized certificate upon completion that validates your expertise and boosts your career prospects.',
  },
];

export default function WhyChoose() {
  return (
    <Section id="why-choose" className="bg-white">
      <SectionHeading
        eyebrow="Why Choose Us"
        title="Why Choose Cre8tiverse Academy"
        description="We combine innovation, practical training, and industry expertise to deliver a learning experience that truly transforms careers."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.title}
              className="group bg-white rounded-2xl p-7 shadow-card border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-orange/10 flex items-center justify-center mb-5 group-hover:bg-brand-orange transition-colors duration-300">
                <Icon
                  size={26}
                  className="text-brand-orange group-hover:text-white transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-3">{feature.title}</h3>
              <p className="text-sm text-ink-dark leading-relaxed">{feature.description}</p>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
