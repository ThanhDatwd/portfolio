/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import image1 from "../../assets/product1.jpg";
import "./portfolio.css";
const Project = () => {
  return (
    <section id="project" style={{paddingBottom:"80px"}}>
      <h5>My Recent Work</h5>
      <h2>PROJECT PARTICIPATED</h2>
      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={"/assets/dvsk.png"} alt="" />
          </div>
          <h3>Đại Việt Sử Ký</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://dvsk-ui-content.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={"/assets/weknot_logo.svg"} alt="" />
          </div>
          <h3>Weknot Social</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://social-staging.augmentlabs.io/home"
              className="btn btn-primary"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/assets/logo_scan_light.svg" alt="" />
          </div>
          <h3>Vinascan</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://vinascan.vercel.app/"
              className="btn btn-primary"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src="/assets/logo_scan_light.svg" alt="" />
          </div>
          <h3>Vinachain Swap</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://vinachain-swap.vercel.app/referral"
              className="btn btn-primary"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
          <img src={'/assets/FStorage-Logo.webp'} alt="" />
          </div>
          <h3>Fstorage</h3>
          <div className="portfolio__item-cta">
            
            <a
              href="https://fstorage.vn/"
              className="btn btn-primary"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={'/assets/spacecy-wallet.png'} alt="" />
          </div>
          <h3>Spacecy wallet</h3>
          <div className="portfolio__item-cta">
            <a
              href="https://chromewebstore.google.com/detail/mkchoaaiifodcflmbaphdgeidocajadp"
              className="btn btn-primary"
              target="_blank"
            >
              live demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
