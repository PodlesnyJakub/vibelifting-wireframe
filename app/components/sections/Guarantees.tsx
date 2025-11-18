'use client';

import { useEffect } from 'react';
import { Shield, Lock, FileCheck, Unlock, ShieldCheck } from 'lucide-react';

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
        <div className="section-eyebrow">The Guarantees · Founder-First Protection</div>
        <h2 className="section-title section-title-center">
          Your Investment is<br />
          <span className="section-title-outlined">Protected. Period.</span>
        </h2>
        <p className="section-subtitle">
          You&apos;ve already been burned by a risky prototype. We&apos;re here to build trust. That&apos;s why every project is protected by our &quot;Founder-First&quot; Guarantees.
        </p>
        
        <div className="guarantees-layout">
          <div className="guarantee-featured">
            <Shield className="guarantee-featured-icon" size={56} strokeWidth={1.5} />
            <h3>14-Day Risk-Free Guarantee</h3>
            <p>If you&apos;re not 100% satisfied with our work in the first 14 days, we&apos;ll issue a full refund. No questions asked. No hoops to jump through.</p>
            <ul className="guarantee-featured-list">
              <li>Full refund, no questions asked</li>
              <li>Keep all the discovery work we&apos;ve done</li>
              <li>No awkward conversations or justifications</li>
              <li>Simply let us know and we&apos;ll process it immediately</li>
            </ul>
          </div>
          
          <div className="guarantees-grid">
          <div className="guarantee-item">
            <Lock className="guarantee-icon" size={28} strokeWidth={1.5} />
            <h3>NDA Protection by Default</h3>
            <p>Your idea is your most valuable asset. It&apos;s 100% confidential and covered by an NDA from our very first call.</p>
          </div>
          
          <div className="guarantee-item">
            <FileCheck className="guarantee-icon" size={28} strokeWidth={1.5} />
            <h3>100% Code Ownership</h3>
            <p>You own everything we write for you, from day one. No games, no clauses. It&apos;s your IP.</p>
          </div>
          
          <div className="guarantee-item">
            <Unlock className="guarantee-icon" size={28} strokeWidth={1.5} />
            <h3>No Lock-In. Ever.</h3>
            <p>We&apos;ll never hold your code hostage. You can take your code and work with anyone, anytime.</p>
          </div>
          
          <div className="guarantee-item">
            <ShieldCheck className="guarantee-icon" size={28} strokeWidth={1.5} />
            <h3>Production-Grade Security</h3>
            <p>We don&apos;t just &quot;vibe&quot; it. We build to the highest security standards, ensuring your app and your users are safe.</p>
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
