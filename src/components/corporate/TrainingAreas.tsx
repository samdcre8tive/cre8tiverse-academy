import { Briefcase, Bot, TrendingUp, Laptop } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';

const solutions = [
  {
    Icon: Briefcase,
    title: 'Workplace Productivity',
    description:
      'Help your team work more efficiently using the digital tools that power today\u2019s workplace.',
    topics: [
      'Microsoft Word',
      'Microsoft Excel',
      'Microsoft PowerPoint',
      'Microsoft Outlook',
      'Microsoft Teams',
      'Google Workspace',
    ],
  },
  {
    Icon: Bot,
    title: 'AI & Digital Transformation',
    description:
      'Empower your workforce with practical AI tools and digital workflows that improve productivity, creativity, and operational efficiency.',
    topics: [
      'AI Workplace Productivity',
      'AI Content Creation',
      'AI Automation',
      'Generative AI',
      'AI for Business & Education',
    ],
  },
  {
    Icon: TrendingUp,
    title: 'Digital Marketing & Business Growth',
    description:
      'Equip your team with practical marketing skills that increase visibility, engagement, and sustainable business growth.',
    topics: [
      'Digital Marketing',
      'Search Engine Optimization (SEO)',
      'Social Media Marketing',
      'Content Marketing',
    ],
  },
  {
    Icon: Laptop,
    title: 'Technology & Digital Innovation',
    description:
      'Build practical technology capabilities that support digital transformation and modern business operations.',
    topics: ['Web Development', 'WordPress', 'Website Management', 'No-Code Development'],
  },
];

export default function TrainingAreas() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <div className="text-center max-w-[750px] mx-auto">
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-bold text-brand-blue leading-tight">
              Corporate Training Solutions
            </h2>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-dark">
              We deliver customized digital skills training designed to help organizations improve
              productivity, embrace innovation, and prepare their teams for the future of work.
            </p>
          </div>
        </RevealOnScroll>

        <div className="mt-14 grid md:grid-cols-2 gap-8">
          {solutions.map(({ Icon, title, description, topics }, i) => (
            <RevealOnScroll key={title} delay={i * 100}>
              <div className="group h-full flex flex-col bg-white rounded-3xl p-9 shadow-soft hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ease-out border border-gray-100">
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-brand-orange transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(247,120,11,0.1)' }}
                >
                  <Icon
                    size={30}
                    className="text-brand-orange group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <h3 className="text-xl font-bold text-brand-blue mb-3">{title}</h3>
                <p className="text-base text-ink-dark leading-relaxed mb-6">{description}</p>
                <div className="mt-auto pt-5 border-t border-gray-100">
                  <h4 className="text-sm font-semibold uppercase tracking-wider text-brand-blue mb-4">
                    Training Includes
                  </h4>
                  <ul className="space-y-2.5">
                    {topics.map((t) => (
                      <li key={t} className="flex items-center gap-3 text-sm text-ink-dark">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0" />
                        {t}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </RevealOnScroll>
          ))}
        </div>

        <RevealOnScroll delay={200}>
          <div className="mt-16 max-w-[700px] mx-auto bg-[#F8F9FA] rounded-3xl p-10 sm:p-12 text-center">
            <h3 className="text-2xl sm:text-3xl font-bold text-brand-blue leading-tight">
              Need a Custom Training Programme?
            </h3>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-ink-dark max-w-[650px] mx-auto">
              Every organization has unique learning needs. We'll work with you to design a
              customized training programme tailored to your goals, industry, and workforce.
            </p>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
