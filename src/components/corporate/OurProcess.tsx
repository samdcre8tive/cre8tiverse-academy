import { MessageSquare, FileText, PlayCircle, Award } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const steps = [
  {
    Icon: MessageSquare,
    number: '01',
    title: 'Consultation',
    description: "We discuss your organization's training goals and requirements.",
  },
  {
    Icon: FileText,
    number: '02',
    title: 'Training Plan',
    description: 'We design a customized learning program tailored to your team.',
  },
  {
    Icon: PlayCircle,
    number: '03',
    title: 'Delivery',
    description: 'Our instructors deliver engaging, hands-on training sessions.',
  },
  {
    Icon: Award,
    number: '04',
    title: 'Outcomes',
    description:
      'Participants complete practical projects and receive certificates upon successful completion.',
  },
];

export default function OurProcess() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading title="Our Process" />
        </RevealOnScroll>

        {/* Desktop horizontal timeline */}
        <div className="hidden lg:block mt-16">
          <div className="relative flex items-start justify-between gap-4">
            {/* Connecting line */}
            <div
              className="absolute top-10 left-[calc(12.5%+1.5rem)] right-[calc(12.5%+1.5rem)] h-0.5"
              style={{ background: 'linear-gradient(to right, #232464 0%, #F7780B 100%)' }}
            />
            {steps.map(({ Icon, number, title, description }, i) => (
              <RevealOnScroll key={title} delay={i * 150} className="flex-1 flex flex-col items-center text-center px-4">
                <div className="relative z-10 flex flex-col items-center">
                  {/* Step circle */}
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center shadow-soft-lg mb-6"
                    style={{
                      background: i < 2 ? '#232464' : '#F7780B',
                    }}
                  >
                    <Icon size={30} className="text-white" />
                  </div>
                  {/* Step number badge */}
                  <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-white border-2 border-brand-blue text-brand-blue text-xs font-bold flex items-center justify-center shadow-sm">
                    {number}
                  </span>
                </div>
                <h3 className="text-lg font-bold text-brand-blue mb-3">{title}</h3>
                <p className="text-sm text-ink-dark leading-relaxed max-w-[200px]">{description}</p>
              </RevealOnScroll>
            ))}
          </div>
        </div>

        {/* Mobile vertical timeline */}
        <div className="lg:hidden mt-12 relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5" style={{ background: 'linear-gradient(to bottom, #232464, #F7780B)' }} />
          <div className="space-y-10">
            {steps.map(({ Icon, number, title, description }, i) => (
              <RevealOnScroll key={title} delay={i * 120}>
                <div className="relative flex gap-6 pl-20">
                  {/* Circle on line */}
                  <div
                    className="absolute left-4 top-0 w-9 h-9 rounded-full flex items-center justify-center shadow-soft"
                    style={{ background: i < 2 ? '#232464' : '#F7780B' }}
                  >
                    <span className="text-white text-xs font-bold">{number}</span>
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-2">
                      <div
                        className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                        style={{ backgroundColor: 'rgba(35,36,100,0.08)' }}
                      >
                        <Icon size={20} className="text-brand-blue" />
                      </div>
                      <h3 className="text-base font-bold text-brand-blue">{title}</h3>
                    </div>
                    <p className="text-sm text-ink-dark leading-relaxed">{description}</p>
                  </div>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
