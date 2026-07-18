import { Target, Wrench, Bot, Users, MapPin, BarChart3 } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const reasons = [
  {
    Icon: Target,
    title: 'Customized Training',
    description:
      "Every training program is tailored to your organization's objectives and skill requirements.",
  },
  {
    Icon: Wrench,
    title: 'Practical Learning',
    description:
      'Participants learn by working on real-world projects and practical exercises.',
  },
  {
    Icon: Bot,
    title: 'AI-Integrated Training',
    description:
      "Modern AI tools and workflows are incorporated where relevant to prepare teams for today's workplace.",
  },
  {
    Icon: Users,
    title: 'Experienced Instructors',
    description: 'Learn from professionals with industry and teaching experience.',
  },
  {
    Icon: MapPin,
    title: 'Flexible Delivery',
    description: "Training can be delivered online or at your organization's location.",
  },
  {
    Icon: BarChart3,
    title: 'Business Impact',
    description:
      'Equip your workforce with practical digital capabilities that improve productivity, encourage innovation, strengthen collaboration, and create measurable value across your organization.',
  },
];

export default function WhyPartner() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading title="Why Partner with Cre8tiverse Academy?" />
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map(({ Icon, title, description }, i) => (
            <RevealOnScroll key={title} delay={i * 90}>
              <div className="group h-full bg-white rounded-2xl p-8 shadow-card border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 ease-out">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 group-hover:bg-brand-blue transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(35,36,100,0.08)' }}
                >
                  <Icon
                    size={26}
                    className="text-brand-blue group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-3">{title}</h3>
                <p className="text-sm text-ink-dark leading-relaxed">{description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
