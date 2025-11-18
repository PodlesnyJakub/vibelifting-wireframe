'use client';

import { useRef, useEffect } from 'react';

export function Services() {
  const serviceCard1Ref = useRef<HTMLDivElement>(null);
  const serviceCard2Ref = useRef<HTMLDivElement>(null);

  // Intersection Observer for service cards
  useEffect(() => {
    const serviceCards = [serviceCard1Ref.current, serviceCard2Ref.current].filter(Boolean) as HTMLDivElement[];
    
    if (serviceCards.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    serviceCards.forEach((card) => {
      if (card) {
        card.classList.add('fade-in-up');
        observer.observe(card);
      }
    });

    return () => {
      serviceCards.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, []);

  return (
    <section className="services" id="services">
      <div className="container">
        <h2 className="section-title section-title-outlined">What do you need?</h2>
        
        <div className="services-grid">
          {/* Migration Service */}
          <div className="service-card" ref={serviceCard1Ref}>
            <div className="service-icon">🔧</div>
            <h3 className="service-title">Vibecode cleanup</h3>
            <p className="service-subtitle">
              Built something with AI tools like Lovable or v0? We make it production-ready. Secure, fast, maintainable.
            </p>
            
            <div className="service-section">
              <h4>What we do:</h4>
              <ul>
                <li>Free audit of your prototype</li>
                <li>Fix security & performance</li>
                <li>Keep what works, rebuild what doesn&apos;t</li>
                <li>Deploy to production</li>
              </ul>
            </div>
            
            <div className="service-meta">
              <div className="meta-item">
                <div className="meta-label">Timeline</div>
                <div className="meta-value">3-4 weeks</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Investment</div>
                <div className="meta-value">From 12 500 USD</div>
              </div>
            </div>
            
            <div className="service-section">
              <h4>Perfect for:</h4>
              <ul>
                <li>You have a working prototype</li>
                <li>Ready to get real users</li>
                <li>Need it bulletproof</li>
              </ul>
            </div>
            
            <a href="#contact" className="service-cta">Get free audit →</a>
          </div>

          {/* New MVP Service */}
          <div className="service-card" ref={serviceCard2Ref}>
            <div className="service-icon">🚀</div>
            <h3 className="service-title">Build New MVP</h3>
            <p className="service-subtitle">
              We build your SaaS from scratch using AI-accelerated development. You get a working product your users can actually use.
            </p>
            
            <div className="service-section">
              <h4>What you get:</h4>
              <ul>
                <li>Working web application</li>
                <li>User accounts & login</li>
                <li>Your core features live</li>
                <li>Ready to launch</li>
              </ul>
            </div>
            
            <div className="service-meta">
              <div className="meta-item">
                <div className="meta-label">Timeline</div>
                <div className="meta-value">6-8 weeks</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Investment</div>
                <div className="meta-value">From 25 000 USD</div>
              </div>
            </div>
            
            <div className="service-section">
              <h4>Perfect for:</h4>
              <ul>
                <li>You have an idea, need execution</li>
                <li>Want to validate fast</li>
                <li>Need technical co-founder alternative</li>
              </ul>
            </div>
            
            <a href="#contact" className="service-cta">Build your MVP →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
