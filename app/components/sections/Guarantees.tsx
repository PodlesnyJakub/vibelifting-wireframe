'use client';

import { useEffect } from 'react';

export function Guarantees() {
  // Intersection Observer for guarantee items with staggered animation
  useEffect(() => {
    const guaranteeItems = Array.from(document.querySelectorAll('.guarantee-item, .guarantee-detail-item')) as HTMLDivElement[];
    
    if (guaranteeItems.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const element = entry.target as HTMLDivElement;
            const index = guaranteeItems.indexOf(element);
            
            // Apply staggered delay: 100ms per item
            setTimeout(() => {
              element.classList.add('visible');
            }, index * 100);
            
            observer.unobserve(element);
          }
        });
      },
      { threshold: 0.2 }
    );

    guaranteeItems.forEach((item) => {
      item.classList.add('fade-in-up-staggered');
      observer.observe(item);
    });

    return () => {
      guaranteeItems.forEach((item) => {
        observer.unobserve(item);
      });
    };
  }, []);

  return (
    <section className="guarantees">
      <div className="container">
        <h2 className="section-title section-title-outlined section-title-center">Your success is guaranteed</h2>
        <p className="section-subtitle">
          Industry-leading guarantees and protection for your investment
        </p>
        
        <div className="guarantees-grid">
          <div className="guarantee-item">
            <div className="guarantee-icon">🔒</div>
            <h3>Full Code Ownership</h3>
            <p>You own 100% of the code from day one</p>
          </div>
          
          <div className="guarantee-item">
            <div className="guarantee-icon">💰</div>
            <h3>14-Day Money Back</h3>
            <p>Not satisfied? Get a full refund within 14 days</p>
          </div>
          
          <div className="guarantee-item">
            <div className="guarantee-icon">🔓</div>
            <h3>No Lock-in</h3>
            <p>Take your code and work with anyone, anytime</p>
          </div>
          
          <div className="guarantee-item">
            <div className="guarantee-icon">🛡️</div>
            <h3>Security Standards</h3>
            <p>Production-grade security in every line of code</p>
          </div>
          
          <div className="guarantee-item">
            <div className="guarantee-icon">⏱️</div>
            <h3>2-Week Support</h3>
            <p>Free support for any issues after launch</p>
          </div>
          
          <div className="guarantee-item">
            <div className="guarantee-icon">✅</div>
            <h3>Production-Ready Code</h3>
            <p>Battle-tested standards from day one</p>
          </div>
        </div>
        
        <div className="guarantee-details">
          <div className="guarantee-detail-item">
            <h3>Clean Code</h3>
            <p>
              All code is reviewed by senior developers and follows industry best practices. 
              Well-documented and easy for your future team to maintain.
            </p>
          </div>
          
          <div className="guarantee-detail-item">
            <h3>Full Transparency</h3>
            <p>
              Weekly progress updates and complete visibility throughout the development process. 
              You always know what we&apos;re building and why.
            </p>
          </div>
          
          <div className="guarantee-detail-item">
            <h3>Knowledge Transfer</h3>
            <p>
              Complete documentation and training so you or your team can maintain and extend the code. 
              We help onboard your developers if needed.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
