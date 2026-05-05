"use client";

import { useState, useEffect, useRef } from "react";
import { ArrowRight, Download, Mail, Menu } from "lucide-react";
import Link from "next/link";
import TextReveal from "@/components/TextReveal";
import TextSplit from "@/components/TextSplit";
import SplashScreen from "@/components/SplashScreen";

const navItems = ["Services", "Works", "Clients", "Company", "FAQ", "Blog", "Careers"];

const services = [
  {
    title: "Branding & Marketing",
    description:
      "We build brands that inspire. We forge a recognizable image through a comprehensive and consistent visual experience filled with personality and values.",
    icon: "/images/alive/service_icon_01.png",
  },
  {
    title: "UI / UX (Web・EC・Apps)",
    description:
      "We work with industry-leading digital products and web platforms, delivering complex builds and extending functionality for evolving businesses.",
    icon: "/images/alive/service_icon_02.png",
  },
  {
    title: "Video Marketing Support",
    description:
      "End-to-end video production from story development to performance-driven expression for company profiles, service introductions, recruitment, SNS and short-form content.",
    icon: "/images/alive/service_icon_05.png",
  },
];

const workCards = [
  {
    title: "JCB International",
    category: "Branding & Marketing / Film & Photography",
    image: "/images/alive/thumbnail-jcb.jpg",
    dark: false,
  },
  {
    title: "Pizza 4P's",
    category: "Brand Identity / Website Design",
    image: "/images/alive/works05-pizza4ps.jpg",
    dark: true,
  },
  {
    title: "YAKUZEN",
    category: "Branding Design / Marketing",
    image: "/images/alive/works01-yakuzen.jpg",
    dark: true,
  },
  {
    title: "Italian Restaurant Saizeriya",
    category: "Film & Photography / Consultation",
    image: "/images/alive/saizeriya_thumbnail.jpg",
    dark: false,
  },
  {
    title: "Daiwa Living Vietnam D-WORK PLACE",
    category: "Marketing / Website Design",
    image: "/images/alive/dworkplace_thumbnail.jpg",
    dark: true,
  },
  {
    title: "Shirakawago Shiroyamakan",
    category: "Brand Identity / Website Design",
    image: "/images/alive/shiroyamakan_011.png",
    dark: true,
  },
];

const logos = [
  "pizza_4ps1.png",
  "acecook.jpg",
  "yamaha.png",
  "kyodo_sojitz1.png",
  "rohto1.png",
  "lixil.png",
  "logo_BIDV.jpg",
  "logo_jcbvietnam.jpg",
  "navigos1.png",
  "Glory1.png",
  "logo_LongDuc.jpg",
  "logo_takarabelmont.jpg",
];

const quotes = [
  {
    quote:
      "I am very pleased with your willingness and commitment. They were very nice to me because they asked me to direct almost all of the restaurant's designs, not just one.",
    name: "YOSUKE MASUKO",
    company: "Pizza 4P's Representative",
  },
  {
    quote:
      "We are fully satisfied with the website. Multilingual support, photo replacement, Facebook and Google advertisements are also proposed in detail according to the situation.",
    name: "MS. HAYASHI AI",
    company: "Guest Relations Executive - Roygent Park Hanoi",
  },
];

function SectionHeading({
  label,
  title,
  align = "center",
  reveal = false,
  trigger = false,
}: {
  label: string;
  title: string;
  align?: "center" | "left";
  reveal?: boolean;
  trigger?: boolean;
}) {
  return (
    <div className={align === "left" ? "section-heading text-left" : "section-heading"}>
      <span>{label}</span>
      <h2 className="section-title">
        {title}
      </h2>
    </div>
  );
}

function useInView(options = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsInView(true);
        observer.unobserve(entry.target);
      }
    }, { threshold: 0.2, ...options });

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [options]);

  return [ref, isInView];
}

export default function Home() {
  const [isReady, setIsReady] = useState(false);
  const [rotatingIndex, setRotatingIndex] = useState(0);
  const rotatingWords = ["PASSION", "MEANING", "UNIQUENESS"];
  
  const [serviceRef, serviceVisible] = useInView();

  useEffect(() => {
    if (!isReady) return;
    const interval = setInterval(() => {
      setRotatingIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2500);
    return () => clearInterval(interval);
  }, [isReady]);

  return (
    <main className="alive-page">
      <SplashScreen onComplete={() => setIsReady(true)} />
      {isReady && (
        <>
          <header className="alive-header">
        <Link href="/" className="alive-logo" aria-label="ALIVE Vietnam">
          <img src="/images/alive/logo.svg" alt="ALIVE VIETNAM" />
        </Link>
        <nav className="alive-nav" aria-label="Main navigation">
          {navItems.map((item) => (
            <a key={item} href={item === "Careers" ? "https://career.alive-web.vn/" : `#${item.toLowerCase()}`}>
              {item}
            </a>
          ))}
          <a href="#language" className="alive-lang">
            EN
          </a>
        </nav>
        <div className="alive-actions">
          <a href="#contact" className="alive-action alive-action-dark">
            <Mail size={15} />
            <span>Contact</span>
          </a>
          <a href="#profile" className="alive-action">
            <Download size={15} />
            <span>Company Profile</span>
          </a>
        </div>
        <button className="alive-menu" aria-label="Open menu">
          <Menu size={24} />
        </button>
      </header>

      <section className="hero-section">
        <div className="hero-bg" />
        <p className="hero-kicker">ALIVE Vietnam</p>
        <h1 className="hero-title-new">
          <div className="line-1">
            <span className="small-we">WE</span> <TextReveal text="CREATE" delay={0.2} mode="word" />
          </div>
          <div className="line-2">
            <TextReveal text="YOUR DESIGN" delay={0.4} mode="word" />
          </div>
          <div className="line-3">
            <span className="italic-filled">filled with</span>
            <div className="rotating-wrapper">
              {rotatingWords.map((word, index) => (
                <span 
                  key={word} 
                  className={`rotating-word ${index === rotatingIndex ? 'active' : ''}`}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </h1>
        <p className="hero-copy">
          <TextReveal 
            text="ALIVE is a digital design studio, based in Japan and Vietnam. Finding creative solutions for businesses using design & technology is what we do." 
            delay={1} 
            charDelay={0.015}
          />
        </p>
        <a href="#services" className="text-link">
          Explore services <ArrowRight size={18} />
        </a>
      </section>
      
      <section 
        ref={serviceRef as any}
        className={`services-section animate-tilt-flash ${serviceVisible ? 'is-visible' : ''}`} 
        id="services"
      >
        <div className="flash-overlay" />
        <div className="split-section">
          <div>
            <SectionHeading
              label="Services"
              title={"Use design and technology to solve problems and transform business"}
              align="left"
            />
            <img className="service-photo" src="/images/alive/service.jpg" alt="" />
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-card" key={service.title}>
                <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
                <img src={service.icon} alt="" />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="works-section" id="works">
        <SectionHeading label="Case Study" title={"Explore a few of our\nmost impactful studies"} />
        <div className="works-grid">
          {workCards.map((work, index) => (
            <article className={`work-card ${work.dark ? "work-card-light" : ""}`} key={work.title}>
              <a href="#works" aria-label={work.title}>
                <img src={work.image} alt="" />
                <div>
                  <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                  <h3>{work.title}</h3>
                  <p>{work.category}</p>
                </div>
              </a>
            </article>
          ))}
        </div>
        <p className="works-tagline">Curious about how all of this comes to life?</p>
        <a href="#works" className="outline-link">
          View all works <ArrowRight size={18} />
        </a>
      </section>

      <section className="logos-section" id="clients">
        <div className="logo-grid">
          {logos.map((logo) => (
            <div className="logo-tile" key={logo}>
              <img src={`/images/alive/${logo}`} alt="" />
            </div>
          ))}
        </div>
      </section>

      <section className="quotes-section">
        <div className="quote-grid">
          {quotes.map((quote) => (
            <article className="quote-card" key={quote.name}>
              <p>&quot;{quote.quote}&quot;</p>
              <h3>{quote.name}</h3>
              <span>{quote.company}</span>
            </article>
          ))}
        </div>
      </section>

      <section className="company-section" id="company">
        <div className="company-image">
          <img src="/images/alive/img_company-0927.jpg" alt="" />
        </div>
        <div className="company-copy">
          <SectionHeading
            label="Company"
            title={"Make the best work,\nand become the best to work with"}
            align="left"
          />
          <p>
            We&apos;re straightforward people who value hard work and long-term relationships. We thoroughly enjoy making
            businesses look better through great design and by going above and beyond to provide a service that we would
            want to receive ourselves.
          </p>
          <a href="#company" className="text-link">
            About ALIVE <ArrowRight size={18} />
          </a>
        </div>
      </section>

      <section className="blog-band">
        <SectionHeading label="Blog" title="Build . Grow . Share." />
      </section>

      <section className="contact-section" id="contact">
        <h2>Let&apos;s Make Something great together!</h2>
        <div className="contact-grid">
          <div>
            <p>Talk to us (from 8:00 a.m. to 5:00 p.m. on weekdays)</p>
            <a href="tel:842822390444">+84-282-239-0444</a>
          </div>
          <div>
            <p>or Drop us a line, we will get in touch.</p>
            <a href="#contact">Contact Us</a>
          </div>
          <div>
            <p>Download</p>
            <a href="#profile">Company Profile</a>
          </div>
        </div>
      </section>

      <footer className="alive-footer">
        <div>
          <img src="/images/alive/logo.svg" alt="ALIVE VIETNAM" />
          <p>© 2015 - 2026 · ALIVE Vietnam Co., LTD</p>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/">Home</Link>
          <a href="#services">Services</a>
          <a href="#works">Works</a>
          <a href="#clients">Clients</a>
          <a href="#company">Company</a>
          <a href="#contact">Contact</a>
        </nav>
      </footer>
        </>
      )}
    </main>
  );
}
