'use client';

import { useRef, useEffect } from 'react';

export function Solution() {
  const stepsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Initial fade-in animation with IntersectionObserver
  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[];
    
    if (steps.length === 0) return;

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

    steps.forEach((step, index) => {
      if (step) {
        step.classList.add('fade-in-up-staggered');
        step.style.transitionDelay = `${index * 0.15}s`;
        observer.observe(step);
      }
    });

    return () => {
      steps.forEach((step) => {
        if (step) observer.unobserve(step);
      });
    };
  }, []);

  // Scroll tracking for active states - only one active at a time
  useEffect(() => {
    const steps = stepsRef.current.filter(Boolean) as HTMLDivElement[];
    if (steps.length === 0) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      // Active zone center: 40% from top of viewport
      const activeZoneCenter = viewportHeight * 0.4;

      // Find the step closest to the active zone center
      let closestStep: HTMLDivElement | null = null;
      let closestDistance = Infinity;

      steps.forEach((step: HTMLDivElement) => {
        const rect = step.getBoundingClientRect();
        const stepCenter = rect.top + rect.height / 2;
        const distance = Math.abs(stepCenter - activeZoneCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestStep = step;
        }
      });

      // Remove active class from all steps, then add to closest one
      steps.forEach((step: HTMLDivElement) => {
        step.classList.remove('active');
      });

      if (closestStep !== null) {
        (closestStep as HTMLDivElement).classList.add('active');
      }
    };

    // Initial check
    handleScroll();

    // Throttled scroll listener
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <section className="solution" id="solution">
      <div className="container">
        <div className="section-eyebrow">The Solution · AI Prototype Rescue</div>
        <h2 className="section-title section-title-outlined section-title-center">
          &quot;Vibelift&quot;: From Prototype Mess to Production-Ready.
        </h2>
        
        <p className="section-subtitle">
          We don&apos;t just fix bugs—we give your app the stable, secure, and scalable foundation it needs to grow. 
          This is your &quot;vibe code,&quot; professionally re-engineered.
        </p>

        <div className="solution-process">
          <h3 className="solution-process-title">The 3-Step Rescue Plan</h3>
          <p className="solution-process-subtitle">
            This is a product, not a consultancy. We provide a clear path and a single, fixed price.
          </p>

          <div className="solution-steps">
            <div
              className="solution-step"
              ref={(el) => { stepsRef.current[0] = el; }}
            >
              <div className="solution-step-number">1</div>
              <div className="solution-step-content">
                <h4 className="solution-step-title">Free Code Assessment</h4>
                <p className="solution-step-description">
                  You securely share your repo (under NDA, of course). Our senior engineers analyze the 
                  &quot;hot mess&quot; to identify every security, performance, and structural weakness.
                </p>
              </div>
            </div>

            <div
              className="solution-step"
              ref={(el) => { stepsRef.current[1] = el; }}
            >
              <div className="solution-step-number">2</div>
              <div className="solution-step-content">
                <h4 className="solution-step-title">Fixed-Price &quot;Rescue&quot; Quote</h4>
                <p className="solution-step-description">
                  We don&apos;t bill by the hour. You&apos;ll receive a single, fixed-price quote to get your app 
                  100% production-ready. No scope creep, no surprise fees. You get a predictable outcome 
                  for a predictable price.
                </p>
              </div>
            </div>

            <div
              className="solution-step"
              ref={(el) => { stepsRef.current[2] = el; }}
            >
              <div className="solution-step-number">3</div>
              <div className="solution-step-content">
                <h4 className="solution-step-title">We Deliver Your Scalable App</h4>
                <p className="solution-step-description">
                  Our team gets to work. We refactor the bad code, patch all security holes, optimize 
                  performance, and deliver a stable, maintainable, and scalable application. You get 
                  100% of the code ownership.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="solution-cta">
          <a href="#contact" className="cta-primary">Start Your Free Code Assessment →</a>
        </div>
      </div>
    </section>
  );
}

