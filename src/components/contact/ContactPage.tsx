import { CalendarDays, Mail, MessageCircle, Phone } from 'lucide-react';
import SectionHeading, { Section } from '../ui/SectionHeading';
import { socials } from '../Footer';

const WHATSAPP_ICON_PATH =
  'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.149-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z';

const contactOptions = [
  {
    title: 'Email Us',
    description: 'Send us an email for course enquiries, partnerships, or general questions.',
    icon: Mail,
    content: 'info@cre8tiverse.com',
    href: 'mailto:info@cre8tiverse.com',
  },
  {
    title: 'Call Us',
    description: 'Speak directly with our team for quick assistance.',
    icon: Phone,
    content: '+234 802 416 7522',
    href: 'tel:+2348024167522',
  },
  {
    title: 'WhatsApp',
    description: 'Chat with our team for quick responses to your enquiries.',
    icon: MessageCircle,
    href: 'https://wa.link/al8pui',
  },
  {
    title: 'Schedule a Consultation',
    description: 'Book a dedicated 30-minute conversation with our team.',
    icon: CalendarDays,
    href: 'https://calendly.com/cre8tiverse-booking/30min',
  },
];

function WhatsAppIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d={WHATSAPP_ICON_PATH} />
    </svg>
  );
}

function ContactOptionIcon({ title, Icon }: { title: string; Icon: typeof Mail }) {
  if (title === 'WhatsApp') return <WhatsAppIcon />;
  return <Icon size={24} strokeWidth={1.8} />;
}

export default function ContactPage() {
  return (
    <main>
      <section className="relative min-h-[62vh] flex items-center justify-center overflow-hidden">
        <img
          src="https://i.imgur.com/y0z4zT6.png"
          alt="Contact Cre8tiverse Academy"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to right, rgba(35,36,100,0.85) 0%, rgba(35,36,100,0.75) 50%, rgba(35,36,100,0.60) 100%)',
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="animate-fade-up opacity-0 text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white leading-[1.15] tracking-tight">
            Get in Touch
          </h1>
          <p className="animate-fade-up opacity-0 mt-6 text-base sm:text-lg text-white/85 leading-relaxed max-w-[700px] mx-auto" style={{ animationDelay: '0.2s' }}>
            Have questions about our courses, training options, or enrollment? We’re here to help.
          </p>
        </div>
      </section>

      <Section>
        <SectionHeading
          title="Multiple Ways to Connect"
          description="Choose the communication method that works best for you. We’re here to help!"
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactOptions.map(({ title, description, icon: Icon, content, href }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="group flex min-h-[260px] flex-col rounded-2xl bg-white p-7 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-soft-lg"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-blue/10 text-brand-blue transition-colors duration-300 group-hover:bg-brand-orange group-hover:text-white">
                <ContactOptionIcon title={title} Icon={Icon} />
              </div>
              <h3 className="mt-6 text-xl font-bold text-brand-blue">{title}</h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-dark">{description}</p>
              {content && <span className="mt-5 break-words text-sm font-semibold text-brand-blue group-hover:text-brand-orange">{content}</span>}
            </a>
          ))}
        </div>
      </Section>

      <Section className="bg-ink-light py-16 lg:py-20">
        <SectionHeading
          title="Follow Us"
          description="Stay connected with Cre8tiverse Academy for digital skills, AI, learning opportunities, and updates."
        />
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {socials.map((social) => {
            const Icon = social.Icon;
            return (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-blue/20 text-brand-blue/70 transition-all duration-200 hover:border-brand-orange hover:bg-white hover:text-brand-orange"
              >
                <Icon size={18} />
              </a>
            );
          })}
        </div>
      </Section>
    </main>
  );
}
