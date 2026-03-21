import React from 'react';
import { BsBriefcaseFill } from 'react-icons/bs';
import useScrollReveal from '../../hooks/useScrollReveal';
import './experience.css';

const workExperiences = [
  {
    company: 'Công ty CP Công nghệ và Dịch vụ Katech',
    role: 'Junior Front End Developer',
    period: '06/2024 - Present',
    highlights: [
      'Independently delivered 4+ products (internal tool, admin dashboard, company landing page, OTA platform) within 1 year, mentoring 1 intern',
      'Integrated complex third-party APIs and business logic for OTA platform, handling booking flows, pricing engine and real-time availability',
      'Built reusable UI component library using TypeScript & TailwindCSS, applied consistently across multiple products',
      'Developed and maintained RESTful APIs with Java & Spring Boot, seamlessly integrated with React frontend',
      'Implemented automated E2E test suites using Playwright, covering critical user flows across products',
    ],
    tech: ['TypeScript', 'React', 'TailwindCSS', 'Java', 'Spring Boot', 'Docker', 'Playwright'],
  },
  {
    company: 'Công ty TNHH Green Software',
    role: 'Fresher Front End Developer',
    period: '01/2023 - 05/2024',
    highlights: [
      'Building interfaces and product features for company projects in the field of web outsource and web product',
      'Worked on multiple client projects using modern frontend stack',
    ],
    tech: ['Next.js', 'TypeScript', 'NestJS', 'Docker', 'TailwindCSS'],
  },
  {
    company: 'FPT Telecom International (FTI)',
    role: 'Internship Front End Developer',
    period: '08/2022 - 11/2022',
    highlights: [
      'Built product interface, payment interface, and account creation for Fstorage project',
      'Participated in the design and construction of the Fstorage management website',
      'Built and managed the blog fstorage.vn',
    ],
    tech: ['React', 'TypeScript', 'PHP', 'Laravel'],
  },
  {
    company: 'Freelancer',
    role: 'Full Stack Developer',
    period: '05/2022 - 06/2022',
    highlights: [
      'Built website to manage student information and events',
      'Handled full-stack development: product interface and feature logic',
    ],
    tech: ['React', 'Node.js'],
  },
];

const Experience = () => {
  const sectionRef = useScrollReveal();

  return (
    <section id="experience" ref={sectionRef} className="scroll-reveal">
      <div className="container">
        <div className="section__title">
          <h2>Work Experience</h2>
        </div>
        <div className="experience__timeline">
          {workExperiences.map((exp, index) => (
            <article className="experience__item" key={index}>
              <div className="experience__item-dot">
                <BsBriefcaseFill />
              </div>
              <div className="experience__item-card">
                <div className="experience__item-header">
                  <div>
                    <h3>{exp.role}</h3>
                    <span className="experience__company">{exp.company}</span>
                  </div>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <ul className="experience__highlights">
                  {exp.highlights.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="experience__tech-tags">
                  {exp.tech.map((t, i) => (
                    <span key={i} className="experience__tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
