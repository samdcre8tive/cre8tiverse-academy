import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import RevealOnScroll from '../ui/RevealOnScroll';
import SectionHeading from '../ui/SectionHeading';

const faqs = [
  {
    question: 'Can the training be customized?',
    answer: "Yes. Every corporate training program is tailored to your organization's needs.",
  },
  {
    question: 'Where is the training delivered?',
    answer: 'Training can be delivered online, on-site, or through a hybrid approach.',
  },
  {
    question: 'How many participants can attend?',
    answer:
      "We accommodate both small teams and large groups. Training plans are designed based on your organization's requirements.",
  },
  {
    question: 'Do participants receive certificates?',
    answer:
      'Yes. Participants who successfully complete the training receive a Cre8tiverse Academy Certificate.',
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-ink-light py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll>
          <SectionHeading title="Frequently Asked Questions" />
        </RevealOnScroll>

        <RevealOnScroll delay={100} className="mt-12 space-y-3">
          {faqs.map(({ question, answer }, i) => {
            const isOpen = open === i;
            return (
              <div
                key={question}
                className="bg-white rounded-2xl shadow-card border border-gray-100 overflow-hidden"
              >
                <button
                  className="w-full flex items-center justify-between gap-4 px-7 py-5 text-left"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-brand-blue">{question}</span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-brand-orange transition-transform duration-300 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-7 pb-6 text-sm text-ink-dark leading-relaxed">{answer}</p>
                </div>
              </div>
            );
          })}
        </RevealOnScroll>
      </div>
    </section>
  );
}
