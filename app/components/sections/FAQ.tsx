export function FAQ() {
  return (
    <section className="faq">
      <div className="container">
        <h2 className="section-title section-title-outlined section-title-center">Common questions</h2>
        
        <div className="faq-list">
          <div className="faq-item">
            <div className="faq-question">How much does it cost?</div>
            <div className="faq-answer">
              New MVP: 480-640k Kč depending on features. Prototype migration: 240-320k Kč. 
              We give you exact price after understanding your needs.
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">How do I know it will work?</div>
            <div className="faq-answer">
              Weekly demos. You see real progress every week. If something&apos;s not right, we fix it immediately. 
              No waiting until the end to discover problems.
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">What if my idea changes during development?</div>
            <div className="faq-answer">
              Small tweaks are normal and included. Major scope changes, we discuss timeline impact transparently. 
              Your success matters more than sticking to a plan.
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">Can I hire my own developer after?</div>
            <div className="faq-answer">
              Absolutely. The code is yours. We document everything. We&apos;ve even helped clients onboard their new developers.
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">What happens after launch?</div>
            <div className="faq-answer">
              You have all the code, all the access, documentation. You&apos;re never dependent on us. 
              But we offer 2 weeks post-launch support, and ongoing help if you want it.
            </div>
          </div>
          
          <div className="faq-item">
            <div className="faq-question">Do you do this as a subscription?</div>
            <div className="faq-answer">
              We can work as a monthly subscription if you need ongoing development. Most clients start with one project, 
              then decide if they want us for more features.
            </div>
          </div>
        </div>
        
        <div className="faq-cta-wrapper">
          <a href="#contact" className="cta-primary">Book a call to discuss your project →</a>
        </div>
      </div>
    </section>
  );
}
