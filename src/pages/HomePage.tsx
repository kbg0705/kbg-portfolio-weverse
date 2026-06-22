import { useEffect, useState } from 'react';
import { DesktopOnlyNotice } from '../components/DesktopOnlyNotice';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Hero } from '../components/Hero';
import { ImpactMetrics } from '../components/ImpactMetrics';
import { ProductInterest } from '../components/ProductInterest';
import { ProjectCard } from '../components/ProjectCard';
import { WorkProcess } from '../components/WorkProcess';
import { projects } from '../data/projects';

const email = 'kimbu0705@gmail.com';

export function HomePage() {
  const [toastVisible, setToastVisible] = useState(false);
  const [activeSection, setActiveSection] = useState('top');

  useEffect(() => {
    const sections = ['work', 'process', 'about']
      .map((id) => document.getElementById(id))
      .filter((element): element is HTMLElement => Boolean(element));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) {
          setActiveSection(visible.target.id);
        } else if (window.scrollY < 120) {
          setActiveSection('top');
        }
      },
      { rootMargin: '-30% 0px -55% 0px', threshold: [0.1, 0.3, 0.6] },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => {
      if (window.scrollY < 120) {
        setActiveSection('top');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleCopyEmail = () => {
    setToastVisible(true);
    window.setTimeout(() => setToastVisible(false), 2400);
  };

  return (
    <>
      <DesktopOnlyNotice />
      <div className="app-shell">
        <Header activeSection={activeSection} />
        <main>
          <Hero />
          <ImpactMetrics />
          <section className="work-section" id="work" aria-labelledby="work-title">
            <div className="section-intro">
              <p className="eyebrow">Selected Work</p>
              <h2 id="work-title">Selected Work</h2>
              <p>문제를 발견한 근거와, 제품으로 전환한 판단을 중심으로 정리했습니다.</p>
            </div>
            <div className="project-grid">
              {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </section>
          <WorkProcess />
          <ProductInterest />
        </main>
        <Footer email={email} onCopyEmail={handleCopyEmail} />
        <div className="toast" role="status" aria-live="polite" data-visible={toastVisible}>
          이메일 주소를 복사했습니다.
        </div>
      </div>
    </>
  );
}
