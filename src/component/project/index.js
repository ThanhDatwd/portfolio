/* eslint-disable react/jsx-no-target-blank */
import React from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { BsBoxArrowUpRight } from 'react-icons/bs';
import './portfolio.css';

const projects = [
  {
    tag: 'Featured Project',
    title: 'Fstorage - Cloud Storage',
    description:
      'A cloud storage management platform for businesses. Built responsive dashboard UI, file management system with upload/download, and pricing page with Ant Design components.',
    image: '/assets/FStorage-Logo.webp',
    tech: ['React', 'Ant Design', 'REST API'],
    demo: 'https://fstorage.vn/bao-gia/',
  },
  {
    tag: 'Featured Project',
    title: 'Weknot Social Network',
    description:
      'A social networking platform with real-time messaging, news feed, and user profiles. Implemented frontend architecture with React and integrated WebSocket for live interactions.',
    image: '/assets/weknot_logo.svg',
    tech: ['React', 'WebSocket', 'Material UI'],
    demo: 'https://social-staging.augmentlabs.io/home',
  },
  {
    tag: 'Blockchain Project',
    title: 'Vinascan Explorer',
    description:
      'Blockchain explorer for Vinachain network. Displays real-time transaction data, block information, smart contract details, and network statistics.',
    image: '/assets/logo_scan_light.svg',
    tech: ['React', 'TypeScript', 'Web3'],
    demo: 'https://vinascan.vercel.app/',
  },
  {
    tag: 'Historical Project',
    title: 'Đại Việt Sử Ký',
    description:
      'An interactive Vietnamese history content platform with timeline navigation, rich media display, and educational content management.',
    image: '/assets/dvsk.png',
    tech: ['React', 'CSS3', 'Vercel'],
    demo: 'https://dvsk-ui-content.vercel.app/',
  },
  {
    tag: 'Blockchain Project',
    title: 'Spacecy Wallet',
    description:
      'Chrome extension wallet for managing cryptocurrency assets. Built popup UI, transaction signing flow, and secure key management interface.',
    image: '/assets/spacecy-wallet.png',
    tech: ['React', 'Chrome API', 'Web3'],
    demo: 'https://chromewebstore.google.com/detail/mkchoaaiifodcflmbaphdgeidocajadp',
  },
];

const Project = () => {
  return (
    <section id="project">
      <div className="container">
        <div className="project__list">
          {projects.map((project, index) => (
            <article
              className={`project__item ${index % 2 !== 0 ? 'project__item--reverse' : ''}`}
              key={index}
            >
              <div className="project__item-image">
                <div className="project__item-image-wrapper">
                  <img src={project.image} alt={project.title} />
                </div>
              </div>
              <div className="project__item-content">
                <span className="project__item-tag">{project.tag}</span>
                <h3 className="project__item-title">{project.title}</h3>
                <p className="project__item-desc">{project.description}</p>
                <div className="project__item-tech">
                  {project.tech.map((t, i) => (
                    <span key={i}>{t}</span>
                  ))}
                </div>
                <div className="project__item-links">
                  <a href={project.demo} target="_blank" rel="noreferrer" className="project__link">
                    <BsBoxArrowUpRight /> Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
