"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const intro = gsap.timeline();

      intro
        .from(".nav-item", {
          y: -20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.08,
          ease: "power3.out",
        })
        .from(
          ".hero-letter",
          {
            y: 80,
            opacity: 0,
            duration: 1,
            stagger: 0.04,
            ease: "power4.out",
          },
          "-=0.4"
        )
        .from(
          ".hero-subtitle",
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "+=3200",
          scrub: 1,
          pin: true,
          onUpdate: (self) => {
            const velocity = self.getVelocity();

            const tilt = gsap.utils.clamp(-5, 5, velocity / 1800);

            gsap.to(".car", {
              rotation: tilt,
              duration: 0.25,
              overwrite: true,
              ease: "power2.out",
            });
          },
        },
      });

      scrollTl.to(".car", {
        x: "22vw",
        scale: 1,
        duration: 1.5,
        ease: "none",
      });

      scrollTl.to(
        ".metric-1",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.8"
      );

      scrollTl.to(".car", {
        x: "63vw",
        scale: 1.08,
        duration: 2,
        ease: "none",
      });

      scrollTl.to(
        ".metric-2",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=1"
      );

      scrollTl.to(".car", {
        x: "5vw",
        scale: 1,
        duration: 2,
        ease: "none",
      });

      scrollTl.to(
        ".metric-3",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=1"
      );

      scrollTl.to(".car", {
        x: "68vw",
        scale: 1.1,
        duration: 2,
        ease: "none",
      });

      scrollTl.to(
        ".metric-4",
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=1"
      );

      scrollTl.to(".car", {
        x: "125vw",
        scale: 1,
        duration: 1.5,
        ease: "none",
      });

      gsap.to(".scroll-progress", {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "+=3200",
          scrub: true,
        },
      });

      gsap.to(".road-light", {
        x: "120vw",
        ease: "none",
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "+=3200",
          scrub: 1,
        },
      });

      gsap.to(".car-glow", {
        opacity: 0.8,
        scale: 1.2,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <main ref={pageRef} className="site">
      <nav className="navbar">
        <div className="nav-item logo">ITZFIZZ</div>

        <div className="nav-links">
          <span className="nav-item nav-link">Work</span>
          <span className="nav-item nav-link">Services</span>
          <span className="nav-item nav-link">About</span>
          <span className="nav-item nav-link">Contact</span>
        </div>

        <div className="nav-item year">2026</div>
      </nav>

      <section className="hero">
        <div className="hero-top-label">
          <p className="hero-subtitle">
            Digital experiences · Motion · Technology
          </p>
        </div>

        <h1 className="hero-title">
          {headline.split("").map((letter, index) => (
            <span key={index} className="hero-letter">
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p className="hero-description hero-subtitle">
          We create digital experiences that move people, products and
          businesses forward.
        </p>

        <div className="scroll-indicator hero-subtitle">
          <span>Scroll to explore</span>
          <span className="scroll-line" />
        </div>
      </section>

      <section className="scroll-section">
        <div className="background-grid" />
        <div className="section-label">
          <span>Scroll experience</span>
        </div>

        <div className="background-number">01</div>

        <div className="road" />
        <div className="road-glow" />
        <div className="road-light" />

        <div className="car">
          <div className="car-glow" />

          <img
            src="https://drive.google.com/uc?export=view&id=1YUpbc2U8feXjlme3FBkcZ9GjkYk3AVBr"
            alt="Sports car"
            className="car-image"
          />


          <div className="motion-trail motion-trail-one" />
          <div className="motion-trail motion-trail-two" />
        </div>

        <div className="metric metric-1">
          <p className="metric-number">+58%</p>
          <p className="metric-label">Engagement</p>
        </div>

        <div className="metric metric-2">
          <p className="metric-number">+23%</p>
          <p className="metric-label">Conversion</p>
        </div>

        <div className="metric metric-3">
          <p className="metric-number">-40%</p>
          <p className="metric-label">Friction</p>
        </div>

        <div className="metric metric-4">
          <p className="metric-number">98.5%</p>
          <p className="metric-label">Experience</p>
        </div>

        <div className="scroll-progress" />

        <div className="keep-scrolling">Keep scrolling</div>
      </section>

      <section className="services-section">
        <p className="section-kicker">What we do</p>

        <h2 className="services-title">
          WE BUILD
          <br />
          EXPERIENCES
          <br />
          THAT <span>MOVE.</span>
        </h2>

        <div className="services-grid">
          <div className="service">
            <p className="service-number">01</p>
            <h3>Strategy</h3>
            <p className="service-description">
              Turning ideas into clear digital experiences.
            </p>
          </div>

          <div className="service">
            <p className="service-number">02</p>
            <h3>Design</h3>
            <p className="service-description">
              Creating interfaces that feel as good as they look.
            </p>
          </div>

          <div className="service">
            <p className="service-number">03</p>
            <h3>Technology</h3>
            <p className="service-description">
              Building fast, responsive and meaningful experiences.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div>ITZFIZZ</div>
        <div>Digital experiences · 2026</div>
      </footer>
    </main>
  );
}
