import { Monitor, Building2, Shuffle } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const options = [
  {
    Icon: Monitor,
    title: 'Live Online',
    description: 'Interactive instructor-led virtual training accessible from anywhere.',
  },
  {
    Icon: Building2,
    title: 'On-Site Training',
    description: "We deliver customized training at your organization's location.",
  },
  {
    Icon: Shuffle,
    title: 'Hybrid Training',
    description: 'A combination of online and on-site sessions for greater flexibility.',
  },
];

export default function DeliveryOptions() {
  return (
    <section className="bg-ink-light py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            title="How We Deliver Training"
            description="Choose the delivery option that best suits your team."
          />
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {options.map(({ Icon, title, description }, i) => (
            <RevealOnScroll key={title} delay={i * 110}>
              <div className="group h-full bg-white rounded-3xl p-10 shadow-soft hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 ease-out text-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-brand-orange transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(247,120,11,0.1)' }}
                >
                  <Icon
                    size={34}
                    className="text-brand-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-4">{title}</h3>
                <p className="text-sm text-ink-dark leading-relaxed">{description}</p>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
