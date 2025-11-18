'use client';

import { useEffect, useRef, useState } from 'react';
import { Users, Calendar, Globe } from 'lucide-react';

export function TrustAnchor() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="trust-anchor" ref={sectionRef}>
      <div className="container">
        <div className="section-eyebrow">Our Heritage · Experience You Can Trust</div>
        <h2 className="section-title section-title-center">
          We're Not a "Vibe" Startup.<br />
          <span className="section-title-outlined">We're an Elite SWAT Team.</span>
        </h2>
        
        <p className="trust-anchor-subtitle">
          Why trust us with your "hot mess"? Because we're not a new, risky startup.
        </p>

        <div className={`trust-anchor-main-card ${isVisible ? 'visible' : ''}`}>
          <div className="trust-anchor-card-header">
            <h3 className="trust-anchor-main-title">
              Vibelifting is the dedicated AI-first wing of Applifting.
            </h3>
          </div>

          <p className="trust-anchor-main-text">
            That means you get the speed and focus of an AI-native team, combined with the power, 
            processes, and 12-year experience of a 200-engineer global software house.
          </p>

          <p className="trust-anchor-emphasis">
            We're not learning on your dime. We are the senior engineers, the security experts, 
            and the product architects who have been building scalable, production-grade software for over a decade.
          </p>
          
          <div className="trust-anchor-stats">
            <div className="trust-stat-item">
              <Users className="trust-stat-icon" size={32} strokeWidth={1.5} />
              <div className="trust-stat-content">
                <div className="trust-stat-value">200+</div>
                <div className="trust-stat-label">Engineers</div>
              </div>
            </div>
            <div className="trust-stat-item">
              <Calendar className="trust-stat-icon" size={32} strokeWidth={1.5} />
              <div className="trust-stat-content">
                <div className="trust-stat-value">12 Years</div>
                <div className="trust-stat-label">Experience</div>
              </div>
            </div>
            <div className="trust-stat-item">
              <Globe className="trust-stat-icon" size={32} strokeWidth={1.5} />
              <div className="trust-stat-content">
                <div className="trust-stat-value">Global</div>
                <div className="trust-stat-label">Software House</div>
              </div>
            </div>
          </div>
        </div>

        <div className={`trust-anchor-content ${isVisible ? 'visible' : ''}`}>
          <p className="trust-anchor-tagline">
            We created Vibelifting to be the professional solution to the "vibe code" chaos.
          </p>
        </div>

        <div className={`trust-anchor-cta-block ${isVisible ? 'visible' : ''}`}>
          <h3 className="trust-anchor-cta-title">
            Stop struggling with a broken prototype.
          </h3>
          <p className="trust-anchor-cta-text">
            Get a free, no-obligation assessment from our senior engineers. We'll give you a 
            fixed-price quote and a clear plan to make your app production-ready.
          </p>
          <div className="trust-anchor-cta-wrapper">
            <a href="#services" className="cta-primary">
              Get My Free Code Assessment Now →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

