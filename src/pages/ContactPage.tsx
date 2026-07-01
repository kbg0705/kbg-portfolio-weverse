import { ArrowUpRight, BriefcaseBusiness, Github, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function ContactPage() {
  return (
    <>
      <Header />
      <main className="page-shell contact-page">
        <header className="page-hero">
          <p className="eyebrow">Contact</p>
          <h1>팬과 운영자가 함께 움직이는 서비스를 더 선명한 제품 경험으로 만들겠습니다.</h1>
          <p>프로젝트, 협업, 포트폴리오에 대해 편하게 연락 주세요.</p>
          <div className="hero-actions">
            <Link className="primary-action" to="/work">
              프로젝트 보기 <BriefcaseBusiness size={18} />
            </Link>
            <Link className="secondary-action" to="/about">
              이력 보기 <UserRound size={18} />
            </Link>
          </div>
        </header>
        <section className="contact-grid">
          <article>
            <span>Email</span>
            <strong>{profile.email}</strong>
            <a href={`mailto:${profile.email}`}>메일 작성 <ArrowUpRight size={16} /></a>
          </article>
          <article>
            <span>GitHub</span>
            <strong>kbg0705</strong>
            <a href="https://github.com/kbg0705" target="_blank" rel="noreferrer">프로필 보기 <Github size={16} /></a>
          </article>
          <article>
            <span>Next</span>
            <strong>Work 살펴보기</strong>
            <Link to="/work">프로젝트 보기 <ArrowUpRight size={16} /></Link>
          </article>
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}
