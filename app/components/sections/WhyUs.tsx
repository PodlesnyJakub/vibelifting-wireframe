import { Zap, Key, Eye, MessageCircle } from 'lucide-react';

export function WhyUs() {
  return (
    <section className="why-us">
      <div className="container">
        <div className="section-eyebrow">Your Advantage · What Sets Us Apart</div>
        <h2 className="section-title">
          Why choose<br />
          <span className="section-title-outlined">us?</span>
        </h2>
        
        <div className="benefits-grid">
          <div className="benefit-item">
            <Zap className="benefit-icon" size={28} strokeWidth={1.5} />
            <h3>You get speed AND quality</h3>
            <p>
              We leverage cutting-edge AI to build incredibly fast—what used to take months now takes weeks. 
              But every line of code is reviewed by senior developers. You don&apos;t have to choose between fast and good.
            </p>
          </div>
          
          <div className="benefit-item">
            <Key className="benefit-icon" size={28} strokeWidth={1.5} />
            <h3>You own everything</h3>
            <p>
              Code, designs, access - it&apos;s all yours from day one. No lock-in. Hire your own developer anytime. 
              We even help with the handoff.
            </p>
          </div>
          
          <div className="benefit-item">
            <Eye className="benefit-icon" size={28} strokeWidth={1.5} />
            <h3>You see progress constantly</h3>
            <p>
              Weekly demos. Direct communication. No black box. You&apos;re involved as much or as little as you want.
            </p>
          </div>
          
          <div className="benefit-item">
            <MessageCircle className="benefit-icon" size={28} strokeWidth={1.5} />
            <h3>You get honest advice</h3>
            <p>
              If something doesn&apos;t make sense for your MVP, we&apos;ll tell you. We optimize for your success, 
              not our billable hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
