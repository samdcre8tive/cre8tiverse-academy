import { Building2, GraduationCap, Landmark, Handshake, Church, Rocket } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const clients = [
  { Icon: Building2, label: 'Businesses & SMEs' },
  { Icon: GraduationCap, label: 'Schools & Universities' },
  { Icon: Landmark, label: 'Government Agencies' },
  { Icon: Handshake, label: 'NGOs' },
  { Icon: Church, label: 'Churches & Faith-Based Organizations' },
  { Icon: Rocket, label: 'Startups' },
];

export default function WhoWeServe() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading
            title="Who We Serve"
            description="We partner with organizations of all sizes to deliver impactful digital skills training."
          />
        </RevealOnScroll>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map(({ Icon, label }, i) => (
            <RevealOnScroll key={label} delay={i * 80}>
              <div className="group flex flex-col items-center gap-5 p-8 bg-white rounded-3xl shadow-card border border-gray-100 hover:shadow-soft-lg hover:-translate-y-1.5 transition-all duration-300 ease-out text-center">
                <div className="w-20 h-20 rounded-2xl bg-brand-blue/8 flex items-center justify-center group-hover:bg-brand-blue transition-colors duration-300"
                  style={{ backgroundColor: 'rgba(35,36,100,0.07)' }}>
                  <Icon
                    size={36}
                    className="text-brand-blue group-hover:text-white transition-colors duration-300"
                  />
                </div>
                <span className="text-base font-semibold text-brand-blue leading-snug">{label}</span>
              </div>
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
