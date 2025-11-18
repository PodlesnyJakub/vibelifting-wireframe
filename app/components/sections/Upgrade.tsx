'use client';

import { useRef, useEffect } from 'react';

export function Upgrade() {
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const features = featuresRef.current;
    
    if (!features) return;

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

    features.classList.add('fade-in-up');
    observer.observe(features);

    return () => {
      observer.unobserve(features);
    };
  }, []);

  return (
    <section className="upgrade" id="upgrade">
      <div className="container">
        <div className="upgrade-content">
          <div className="upgrade-header">
            <div className="section-eyebrow">The Upgrade · AI-Powered MVP Development</div>
            <h2 className="section-title section-title-center">Need to Build, Not Just Fix?</h2>
            <p className="upgrade-subtitle">
              For founders who are ready to build their full vision, we offer something better than a 
              traditional agency. Get a dedicated, AI-augmented team for a flat monthly subscription.
            </p>
          </div>

          <div className="upgrade-card" ref={featuresRef}>
            <div className="upgrade-card-header">
              <div className="upgrade-icon">🚀</div>
              <h3 className="upgrade-card-title">Your Dedicated MVP Development Team</h3>
            </div>

            <p className="upgrade-description">
              Why hire a freelancer or a slow, expensive agency? We provide a dedicated &quot;pod&quot; of 
              experts, supercharged by AI, to build your MVP faster and smarter than you thought possible.
            </p>

            <p className="upgrade-description-emphasis">
              This is your new tech team, available on demand. We take your vision from 0 to 1, or from 
              1 to 10, with the speed and quality that &quot;vibe coding&quot; promised but couldn&apos;t deliver.
            </p>

            <div className="upgrade-features">
              <div className="upgrade-feature">
                <div className="upgrade-feature-icon">🎯</div>
                <div className="upgrade-feature-content">
                  <h4 className="upgrade-feature-title">Result-Oriented</h4>
                  <p className="upgrade-feature-description">
                    We focus on shipping, not just billing.
                  </p>
                </div>
              </div>

              <div className="upgrade-feature">
                <div className="upgrade-feature-icon">⚡</div>
                <div className="upgrade-feature-content">
                  <h4 className="upgrade-feature-title">AI-Augmented</h4>
                  <p className="upgrade-feature-description">
                    We use the best AI tools internally to accelerate our work, passing the savings and 
                    speed on to you.
                  </p>
                </div>
              </div>

              <div className="upgrade-feature">
                <div className="upgrade-feature-icon">💪</div>
                <div className="upgrade-feature-content">
                  <h4 className="upgrade-feature-title">Full-Stack Power</h4>
                  <p className="upgrade-feature-description">
                    From database to UI, your dedicated team handles it all.
                  </p>
                </div>
              </div>
            </div>

            <div className="upgrade-pricing">
              <div className="upgrade-pricing-label">Starts at</div>
              <div className="upgrade-pricing-value">$12,500 / month</div>
            </div>

            <div className="upgrade-cta">
              <a href="#contact" className="cta-primary">Explore Our Dedicated MVP Teams →</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

