import {
  Palette,
  Code,
  PenTool,
  Megaphone,
  ClipboardList,
  Film,
  Box,
  Sparkles,
  Clapperboard,
  Clock,
} from 'lucide-react';
import { Section } from './ui/SectionHeading';
import SectionHeading from './ui/SectionHeading';

const courses = [
  {
    icon: Palette,
    title: 'Product Design (UI/UX)',
    description: 'Design intuitive, user-centered digital products using modern design tools and methodologies.',
    duration: '12 Weeks',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Build responsive, production-ready websites and web applications with modern frameworks.',
    duration: '16 Weeks',
  },
  {
    icon: PenTool,
    title: 'Graphic Design',
    description: 'Create compelling visual designs for brands, marketing, and digital platforms.',
    duration: '10 Weeks',
  },
  {
    icon: Megaphone,
    title: 'Digital Marketing',
    description: 'Master SEO, social media, paid ads, and content strategy to grow brands online.',
    duration: '10 Weeks',
  },
  {
    icon: ClipboardList,
    title: 'Product Management',
    description: 'Lead product strategy, roadmaps, and cross-functional teams from idea to launch.',
    duration: '12 Weeks',
  },
  {
    icon: Film,
    title: 'Video Editing & Motion Graphics',
    description: 'Edit professional videos and create stunning motion graphics for digital content.',
    duration: '10 Weeks',
  },
  {
    icon: Box,
    title: '3D Design & Visualization',
    description: 'Create realistic 3D models, renders, and visualizations for product and architecture.',
    duration: '12 Weeks',
  },
  {
    icon: Sparkles,
    title: 'AI Content Creation',
    description: 'Leverage AI tools to produce high-quality written, visual, and multimedia content.',
    duration: '8 Weeks',
  },
  {
    icon: Clapperboard,
    title: 'AI Filmmaking & Automation',
    description: 'Use AI to produce films, automate workflows, and streamline creative production.',
    duration: '12 Weeks',
  },
];

export default function Courses() {
  return (
    <Section id="courses" className="bg-ink-light">
      <SectionHeading
        eyebrow="Our Programs"
        title="Explore Our Courses"
        description="Choose from our industry-focused courses designed to help you build practical, in-demand digital skills."
      />

      <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => {
          const Icon = course.icon;
          return (
            <div
              key={course.title}
              className="group bg-white rounded-2xl p-7 shadow-card border border-gray-50 hover:shadow-soft-lg hover:-translate-y-1 transition-all duration-300 ease-out"
            >
              <div className="w-14 h-14 rounded-2xl bg-brand-blue/5 flex items-center justify-center mb-5 group-hover:bg-brand-orange/10 transition-colors duration-300">
                <Icon
                  size={26}
                  className="text-brand-blue group-hover:text-brand-orange transition-colors duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-brand-blue mb-2">{course.title}</h3>
              <p className="text-sm text-ink-dark leading-relaxed mb-4">{course.description}</p>
              <div className="flex items-center gap-2 text-sm font-medium text-ink-dark/60">
                <Clock size={15} />
                <span>{course.duration}</span>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
