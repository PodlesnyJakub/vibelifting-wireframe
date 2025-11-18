'use client';

import { useRef, useEffect } from 'react';
import { Flame, Bug, ShieldAlert, Pause, Lightbulb } from 'lucide-react';

export function Problem() {
  const problemItemsRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const items = problemItemsRef.current.filter(Boolean) as HTMLDivElement[];
    
    if (items.length === 0) return;

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

    items.forEach((item) => {
      if (item) {
        item.classList.add('fade-in-up');
        observer.observe(item);
      }
    });

    return () => {
      items.forEach((item) => {
        if (item) observer.unobserve(item);
      });
    };
  }, []);

  const problems = [
    {
      icon: Flame,
      title: 'It\'s a "Hot Mess"',
      description: 'The code is a tangled, unreadable mess. You can\'t add new features without breaking five old ones.',
    },
    {
      icon: Bug,
      title: 'It\'s Full of Bugs',
      description: 'Your app is slow, crashes constantly, and gives your first real users a terrible experience.',
    },
    {
      icon: ShieldAlert,
      title: 'It\'s a Security Nightmare',
      description: 'You\'re handling user data with code you don\'t understand. You\'re likely exposed and one "oops" away from a disaster.',
    },
    {
      icon: Pause,
      title: 'You Can\'t Ship',
      description: 'Your app is 80% "done" but 0% "shippable." As a "time poor" founder, you\'re stuck, burning cash and losing momentum.',
    },
  ];

  return (
    <section className="problem" id="problem">
      <div className="container">
        <div className="section-eyebrow">The Problem · You&apos;re Not Alone</div>
        <h2 className="section-title section-title-center">
          The &quot;Vibe&quot; Fades<br />
          <span className="section-title-outlined">When You Hit the Production Wall</span>
        </h2>
        
        <div className="problem-intro">
          <p>
            It was magical at first. You &quot;vibed&quot; with an AI tool, and your idea came to life in a weekend. 
            You showed your friends, maybe even some investors.
          </p>
          <p className="problem-highlight">
            But now... you&apos;re stuck.
          </p>
          <p>
            That &quot;vibe coded&quot; prototype is now a serious business liability. Does this sound familiar?
          </p>
        </div>

        <div className="problem-grid">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="problem-card"
              ref={(el) => { problemItemsRef.current[index] = el; }}
            >
              <problem.icon className="problem-icon" size={32} strokeWidth={1.5} />
              <h3 className="problem-title">{problem.title}</h3>
              <p className="problem-description">{problem.description}</p>
            </div>
          ))}
        </div>

        <div className="problem-conclusion-wrapper">
          <div className="problem-conclusion-arrow">↓</div>
          <div className="problem-conclusion">
            <Lightbulb className="problem-conclusion-icon" size={48} strokeWidth={1.5} />
            <h3 className="problem-conclusion-title">The Real Solution</h3>
            <p className="problem-conclusion-text">
              You don&apos;t need another &quot;vibe.&quot; You need professional engineers who can transform your prototype into production-ready software.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

