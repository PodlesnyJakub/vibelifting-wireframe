export default function Home() {
  return (
    <>
      {/* Navigation */}
      <nav>
        <div className="container">
          <div className="nav-content">
            <div className="logo">Vibelifting</div>
            <a href="#contact" className="nav-cta">Book a call</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <h1>Building your MVP in 8 weeks.<br />Or make your prototype production-ready.</h1>
          <p className="tagline">Fast development. Quality code. Real results.</p>
          
          <div className="hero-ctas">
            <a href="#services" className="cta-primary">Get free assesment →</a>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services" id="services">
        <div className="container">
          <h2 className="section-title">What do you need?</h2>
          
          <div className="services-grid">
            {/* Migration Service */}
            <div className="service-card">
              <div className="service-icon">🔧</div>
              <h3 className="service-title">Vibecode cleanup</h3>
              <p className="service-subtitle">
                Built something in Lovable or v0? We make it ready for real users. Secure, fast, maintainable.
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
            <div className="service-card">
              <div className="service-icon">🚀</div>
              <h3 className="service-title">Build New MVP</h3>
              <p className="service-subtitle">
                We build your SaaS from scratch. You get a working product your users can actually use.
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

      {/* How We Work */}
      <section className="how-we-work">
        <div className="container">
          <h2 className="section-title">How we work</h2>
          
          <div className="timeline">
            <div className="timeline-item">
              <h3>Week 1: We understand your vision</h3>
              <p>
                30-minute call. You explain what you need. We ask questions. We agree on what to build. 
                No tech jargon. Just clear scope.
              </p>
            </div>
            
            <div className="timeline-item">
              <h3>Week 2-7: You see progress every week</h3>
              <p>
                We build iteratively. Every Tuesday, you see what&apos;s new. You give feedback. We adjust. 
                No surprises. No waiting until the end.
              </p>
            </div>
            
            <div className="timeline-item">
              <h3>Week 8: Launch</h3>
              <p>
                Your product goes live. We hand over everything: code, documentation, logins. You own it all. 
                We stick around for 2 weeks to help.
              </p>
            </div>
            
            <div className="timeline-item">
              <h3>After launch: Your call</h3>
              <p>
                Need more features? We can help. Want to hire your own team? The code is clean. 
                Want us to maintain it? We offer that too.
              </p>
            </div>
          </div>
          
          <div className="timeline-cta">
            <a href="#contact" className="cta-primary">Start your project →</a>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="why-us">
        <div className="container">
          <h2 className="section-title">Why choose us?</h2>
          
          <div className="benefits-grid">
            <div className="benefit-item">
              <h3>You get speed AND quality</h3>
              <p>
                We use AI to build fast. But every line of code is reviewed by senior developers. 
                You don&apos;t have to choose between fast and good.
              </p>
            </div>
            
            <div className="benefit-item">
              <h3>You own everything</h3>
              <p>
                Code, designs, access - it&apos;s all yours from day one. No lock-in. Hire your own developer anytime. 
                We even help with the handoff.
              </p>
            </div>
            
            <div className="benefit-item">
              <h3>You see progress constantly</h3>
              <p>
                Weekly demos. Direct communication. No black box. You&apos;re involved as much or as little as you want.
              </p>
            </div>
            
            <div className="benefit-item">
              <h3>You get honest advice</h3>
              <p>
                If something doesn&apos;t make sense for your MVP, we&apos;ll tell you. We optimize for your success, 
                not our billable hours.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="case-study" id="work">
        <div className="container">
          <h2 className="section-title">Recent project</h2>
          
          <div className="case-study-content">
            <div className="case-study-image">
              Screenshot / Mockup
            </div>
            
            <div className="case-study-details">
              <h3>Triby</h3>
              <div className="case-study-meta">8 weeks from idea to launch</div>
              
              <div className="case-study-section">
                <h4>The challenge</h4>
                <p>
                  [Client] had an idea but no technical team. Traditional agencies wanted 6+ months and 800k+. 
                  They needed to validate fast.
                </p>
              </div>
              
              <div className="case-study-section">
                <h4>What we built</h4>
                <p>
                  A working SaaS platform with user management, real-time data updates, and export functionality. 
                  Clean interface. Fast performance. Secure.
                </p>
              </div>
              
              <div className="case-study-section">
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

      {/* Tech Credibility */}
      <section className="tech-credibility">
        <div className="container">
          <h2>Built with modern, proven tools</h2>
          <p>
            We use the same technology stack that powers companies like Vercel, Linear, 
            and thousands of successful startups.
          </p>
          
          <div className="tech-logos">
            <div className="tech-logo">Next.js</div>
            <div className="tech-logo">Supabase</div>
            <div className="tech-logo">Vercel</div>
            <div className="tech-logo">TypeScript</div>
          </div>
          
          <p className="tech-note">
            Why it matters: Battle-tested. Well-documented. Easy to hire developers for. No vendor lock-in.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq">
        <div className="container">
          <h2 className="section-title">Common questions</h2>
          
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

      {/* Final CTA */}
      <section className="final-cta" id="contact">
        <div className="container">
          <h2>Ready to start?</h2>
          
          <div className="cta-wrapper">
            <a href="#" className="cta-primary">Book a 30-minute call →</a>
          </div>
          
          <p>
            We&apos;ll discuss your idea, give honest feedback,<br />
            and provide exact timeline and cost.
          </p>
          <p style={{ marginTop: '16px', color: '#888' }}>
            No sales pitch. No obligation.<br />
            Just a real conversation about your product.
          </p>
          
          <div className="email">
            Questions? <a href="mailto:hi@vibelifting.ai">hi@vibelifting.ai</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container">
          <p>© 2025 Vibelifting.ai</p>
          <p style={{ marginTop: '12px' }}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
          </p>
        </div>
      </footer>
    </>
  )
}

