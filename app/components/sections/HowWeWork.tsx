'use client';

import { useRef, useEffect } from 'react';

export function HowWeWork() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const timelineItemsRef = useRef<HTMLDivElement[]>([]);

  // Scroll tracking for timeline active states
  useEffect(() => {
    const timeline = timelineRef.current;
    if (!timeline) return;

    const timelineItems = timelineItemsRef.current.filter(Boolean) as HTMLDivElement[];
    if (timelineItems.length === 0) return;

    const handleScroll = () => {
      const viewportHeight = window.innerHeight;
      // Active zone: 20% to 60% of viewport (larger 40% zone for longer active state)
      const viewportTop = viewportHeight * 0.2;
      const viewportBottom = viewportHeight * 0.6;

      timelineItems.forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.top + rect.height / 2;

        // Check if item center is within the active zone
        if (itemCenter >= viewportTop && itemCenter <= viewportBottom) {
          item.classList.add('active');
        } else {
          item.classList.remove('active');
        }
      });
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
    <section className="how-we-work">
      <div className="container">
        <h2 className="section-title section-title-outlined">How we work</h2>
        
        <div className="timeline" ref={timelineRef}>
          <div 
            className="timeline-item"
            ref={(el) => {
              if (el) timelineItemsRef.current[0] = el;
            }}
          >
            <div className="timeline-item-content">
              <h3>Week 1: We understand your vision</h3>
              <p>
                30-minute call. You explain what you need. We ask questions. We agree on what to build. 
                No tech jargon. Just clear scope.
              </p>
            </div>
          </div>
          
          <div 
            className="timeline-item"
            ref={(el) => {
              if (el) timelineItemsRef.current[1] = el;
            }}
          >
            <div className="timeline-item-content">
              <h3>Week 2-7: You see progress every week</h3>
              <p>
                We build iteratively with AI-assisted development. Every Tuesday, you see what&apos;s new. You give feedback. We adjust. 
                No surprises. No waiting until the end.
              </p>
            </div>
          </div>
          
          <div 
            className="timeline-item"
            ref={(el) => {
              if (el) timelineItemsRef.current[2] = el;
            }}
          >
            <div className="timeline-item-content">
              <h3>Week 8: Launch</h3>
              <p>
                Your product goes live. We hand over everything: code, documentation, logins. You own it all. 
                We stick around for 2 weeks to help.
              </p>
            </div>
          </div>
          
          <div 
            className="timeline-item"
            ref={(el) => {
              if (el) timelineItemsRef.current[3] = el;
            }}
          >
            <div className="timeline-item-content">
              <h3>After launch: Your call</h3>
              <p>
                Need more features? We can help. Want to hire your own team? The code is clean. 
                Want us to maintain it? We offer that too.
              </p>
            </div>
          </div>
        </div>
        
        <div className="timeline-cta">
          <a href="#contact" className="cta-primary">Start your project →</a>
        </div>
      </div>
    </section>
  );
}
