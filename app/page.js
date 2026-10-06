"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const pageRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // =========================
      // INTRO ANIMATION
      // =========================
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

      // =========================
      // MAIN SCROLL EXPERIENCE
      // =========================
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".scroll-section",
          start: "top top",
          end: "+=3200",
          scrub: 1,
          pin: true,

          onUpdate: (self) => {
            const velocity = self.getVelocity();

            const tilt = gsap.utils.clamp(
              -5,
              5,
              velocity / 1800
            );

            gsap.to(".car", {
              rotation: tilt,
              duration: 0.25,
              overwrite: true,
              ease: "power2.out",
            });
          },
        },
      });

      // =========================
      // CAR JOURNEY
      // =========================

      // Car enters from the left
      scrollTl.to(".car", {
        x: "22vw",
        scale: 1,
        duration: 1.5,
        ease: "none",
      });

      // First metric
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

      // Car crosses the screen
      scrollTl.to(".car", {
        x: "63vw",
        scale: 1.08,
        duration: 2,
        ease: "none",
      });

      // Second metric
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

      // Car comes back
      scrollTl.to(".car", {
        x: "5vw",
        scale: 1,
        duration: 2,
        ease: "none",
      });

      // Third metric
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

      // Final movement
      scrollTl.to(".car", {
        x: "68vw",
        scale: 1.1,
        duration: 2,
        ease: "none",
      });

      // Fourth metric
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

      // Car exits
      scrollTl.to(".car", {
        x: "125vw",
        scale: 1,
        duration: 1.5,
        ease: "none",
      });

      // =========================
      // SCROLL PROGRESS
      // =========================
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

      // =========================
      // ROAD LIGHT
      // =========================
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

      // =========================
      // CAR GLOW
      // =========================
      gsap.to(".car-glow", {
        opacity: 0.8,
        scale: 1.2,
        duration: 1.2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // =========================
      // REFRESH SCROLLTRIGGER
      // =========================
      ScrollTrigger.refresh();
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const headline = "WELCOME ITZFIZZ";

  return (
    <main ref={pageRef} className="site">

      {/* =====================================================
          NAVBAR
      ====================================================== */}
      <nav className="navbar">

        <div className="nav-item logo">
          ITZFIZZ
        </div>

        <div className="nav-links">
          <span className="nav-item nav-link">
            Work
          </span>

          <span className="nav-item nav-link">
            Services
          </span>

          <span className="nav-item nav-link">
            About
          </span>

          <span className="nav-item nav-link">
            Contact
          </span>
        </div>

        <div className="nav-item year">
          2026
        </div>

      </nav>


      {/* =====================================================
          HERO
      ====================================================== */}
      <section className="hero">

        <div className="hero-top-label">
          <p className="hero-subtitle">
            Digital experiences · Motion · Technology
          </p>
        </div>

        <h1 className="hero-title">
          {headline.split("").map((letter, index) => (
            <span
              key={index}
              className="hero-letter"
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          ))}
        </h1>

        <p className="hero-description hero-subtitle">
          We create digital experiences that move people,
          products and businesses forward.
        </p>

        <div className="scroll-indicator hero-subtitle">

          <span>
            Scroll to explore
          </span>

          <span className="scroll-line" />

        </div>

      </section>


      {/* =====================================================
          SCROLL EXPERIENCE
      ====================================================== */}
      <section className="scroll-section">

        {/* Background grid */}
        <div className="background-grid" />


        {/* Section label */}
        <div className="section-label">
          <span>
            Scroll experience
          </span>
        </div>


        {/* Large background number */}
        <div className="background-number">
          01
        </div>


        {/* Road */}
        <div className="road" />

        <div className="road-glow" />


        {/* Moving road light */}
        <div className="road-light" />


        {/* =================================================
            REAL CAR IMAGE
        ================================================== */}
        <div className="car">

          {/* Glow behind car */}
          <div className="car-glow" />

          {/* Actual image from /public/car.jpg */}
          <img
            src="https://drive.google.com/file/d/1YUpbc2U8feXjlme3FBkcZ9GjkYk3AVBr/view?usp=sharing"
            alt="Sports car"
            className="car-image"
          />

          {/* Motion trails */}
          <div className="motion-trail motion-trail-one" />

          <div className="motion-trail motion-trail-two" />

        </div>


        {/* =================================================
            METRIC 1
        ================================================== */}
        <div className="metric metric-1">

          <p className="metric-number">
            +58%
          </p>

          <p className="metric-label">
            Engagement
          </p>

        </div>


        {/* =================================================
            METRIC 2
        ================================================== */}
        <div className="metric metric-2">

          <p className="metric-number">
            +23%
          </p>

          <p className="metric-label">
            Conversion
          </p>

        </div>


        {/* =================================================
            METRIC 3
        ================================================== */}
        <div className="metric metric-3">

          <p className="metric-number">
            -40%
          </p>

          <p className="metric-label">
            Friction
          </p>

        </div>


        {/* =================================================
            METRIC 4
        ================================================== */}
        <div className="metric metric-4">

          <p className="metric-number">
            98.5%
          </p>

          <p className="metric-label">
            Experience
          </p>

        </div>


        {/* Scroll progress */}
        <div className="scroll-progress" />


        {/* Bottom text */}
        <div className="keep-scrolling">
          Keep scrolling
        </div>

      </section>


      {/* =====================================================
          SECOND SECTION
      ====================================================== */}
      <section className="services-section">

        <p className="section-kicker">
          What we do
        </p>

        <h2 className="services-title">

          WE BUILD
          <br />

          EXPERIENCES
          <br />

          THAT <span>MOVE.</span>

        </h2>


        {/* Services */}
        <div className="services-grid">

          <div className="service">

            <p className="service-number">
              01
            </p>

            <h3>
              Strategy
            </h3>

            <p className="service-description">
              Turning ideas into clear digital experiences.
            </p>

          </div>


          <div className="service">

            <p className="service-number">
              02
            </p>

            <h3>
              Design
            </h3>

            <p className="service-description">
              Creating interfaces that feel as good as they look.
            </p>

          </div>


          <div className="service">

            <p className="service-number">
              03
            </p>

            <h3>
              Technology
            </h3>

            <p className="service-description">
              Building fast, responsive and meaningful experiences.
            </p>

          </div>

        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}
      <footer className="footer">

        <div>
          ITZFIZZ
        </div>

        <div>
          Digital experiences · 2026
        </div>

      </footer>

    </main>
  );
}
