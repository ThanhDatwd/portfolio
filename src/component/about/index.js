import React from 'react';
import './about.css';

const techStack = [
  { name: 'React', color: '#61DAFB' },
  { name: 'Next.js', color: '#ffffff' },
  { name: 'TypeScript', color: '#3178C6' },
  { name: 'JavaScript', color: '#F7DF1E' },
  { name: 'TailwindCSS', color: '#06B6D4' },
  { name: 'Node.js', color: '#339933' },
  { name: 'NestJS', color: '#E0234E' },
  { name: 'Java', color: '#ED8B00' },
  { name: 'Spring Boot', color: '#6DB33F' },
  { name: 'Docker', color: '#2496ED' },
  { name: 'MySQL', color: '#4479A1' },
  { name: 'MongoDB', color: '#47A248' },
  { name: 'Material UI', color: '#007FFF' },
  { name: 'Ant Design', color: '#0170FE' },
  { name: 'Bootstrap', color: '#7952B3' },
  { name: 'HTML5', color: '#E34F26' },
  { name: 'CSS3', color: '#1572B6' },
  { name: 'Laravel', color: '#FF2D20' },
];

const About = () => {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__text">
          <p className="about__looking">
            I'm currently looking to join a{' '}
            <span className="about__highlight">cross-functional</span> team
          </p>
          <p className="about__sub">
            that values improving people's lives through accessible design
          </p>
        </div>

        <div className="about__tech">
          {techStack.map((tech, index) => (
            <div className="about__tech-item" key={index}>
              <span
                className="about__tech-dot"
                style={{ background: tech.color }}
              />
              <span className="about__tech-name">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
