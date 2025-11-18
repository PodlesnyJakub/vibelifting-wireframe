'use client';

import { useRef, useEffect } from 'react';

export function CaseStudy() {
  const caseStudyImageRef = useRef<HTMLDivElement>(null);
  const caseStudySectionsRef = useRef<HTMLDivElement[]>([]);

  // Intersection Observer for case study sections
  useEffect(() => {
    const caseStudySections = caseStudySectionsRef.current.filter(Boolean) as HTMLDivElement[];
    
    if (caseStudySections.length === 0) return;

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

    caseStudySections.forEach((section) => {
      section.classList.add('fade-in-up');
      observer.observe(section);
    });

    return () => {
      caseStudySections.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  return (
    <section className="case-study" id="work">
      <div className="container">
        <h2 className="section-title section-title-outlined">Recent project</h2>
        
        <div className="case-study-content">
          <div className="case-study-image" ref={caseStudyImageRef}>
            Screenshot / Mockup
          </div>
          
          <div className="case-study-details">
            <h3>Triby</h3>
            <div className="case-study-meta">8 weeks from idea to launch</div>
            
            <div 
              className="case-study-section"
              ref={(el) => {
                if (el) caseStudySectionsRef.current[0] = el;
              }}
            >
              <h4>The challenge</h4>
              <p>
                [Client] had an idea but no technical team. Traditional agencies wanted 6+ months and 800k+. 
                They needed to validate fast. AI-powered development made it possible.
              </p>
            </div>
            
            <div 
              className="case-study-section"
              ref={(el) => {
                if (el) caseStudySectionsRef.current[1] = el;
              }}
            >
              <h4>What we built</h4>
              <p>
                A working SaaS platform with user management, real-time data updates, and export functionality. 
                Clean interface. Fast performance. Secure.
              </p>
            </div>
            
            <div 
              className="case-study-section"
              ref={(el) => {
                if (el) caseStudySectionsRef.current[2] = el;
              }}
            >
              <h4>The result</h4>
              <ul>
                <li>Launched in 8 weeks</li>
                <li>50+ active users in month 1</li>
                <li>Client raised seed round</li>
                <li>Hired in-house dev (we helped onboard them)</li>
              </ul>
            </div>
            
            <div className="case-study-quote">
              <p>
                &quot;We validated our business in 2 months instead of 6. The code was clean enough that we could 
                hire our own developer without rewriting anything.&quot;
              </p>
              <cite>— [Client Name], Founder</cite>
            </div>
            
            <a href="#" className="case-link">Read full story →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
