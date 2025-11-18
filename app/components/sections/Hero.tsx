'use client';

import { useState, useEffect, ReactNode } from 'react';

interface HeroProps {
  words?: string[];
  children?: ReactNode;
}

export function Hero({ words = ['lovable', 'v0', 'macally'], children }: HeroProps) {
  const [currentWord, setCurrentWord] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => prev + 1);
    }, 2000); // Change word every 2 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    // When we reach the duplicate first item, reset to the actual first item
    if (currentWord === words.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentWord(0);
      }, 500); // Wait for transition to complete
      
      setTimeout(() => {
        setIsTransitioning(true);
      }, 550); // Re-enable transition after reset
    }
  }, [currentWord, words.length]);

  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <h1>
            Lift your{' '}
            <span className="word-carousel">
              <span 
                className="word-carousel-inner"
                style={{ 
                  transform: `translateY(-${currentWord * (100 / (words.length + 1))}%)`,
                  transition: isTransitioning ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none'
                }}
              >
                {words.map((word, index) => (
                  <span key={index} className="word-carousel-item">
                    {word}
                  </span>
                ))}
                {/* Duplicate first word for seamless loop */}
                <span className="word-carousel-item">
                  {words[0]}
                </span>
              </span>
            </span>{' '}
            app to production ready quality.
          </h1>
          <p className="tagline">Transform your vision into production-ready applications with AI-powered development</p>
          
          {/* Render AI Agent Interface or other children if provided */}
          {children}
          
          <div className="hero-ctas">
            <a href="#services" className="cta-primary">Get free assesment →</a>
          </div>
        </div>
      </div>
    </section>
  );
}
