import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function AboutPage() {
  return (
    <>
      <Header />
      <main className="page-shell about-page">
        <header className="about-hero">
          <p className="eyebrow">About</p>
          <h1>운영의 복잡함을<br />사용자가 이해할 수 있는 제품 기준으로 바꿉니다.</h1>
          <p>{profile.summary}</p>
          <div className="hero-actions">
            <Link className="primary-action" to="/contact">연락하기 <Mail size={18} /></Link>
            <Link className="secondary-action" to="/work">프로젝트 보기 <ArrowRight size={18} /></Link>
          </div>
        </header>

        <section className="about-proof" aria-label="경력 요약">
          <div><strong>2년 7개월</strong><span>총 실무 경험</span></div>
          <div><strong>14</strong><span>Sprint 운영</span></div>
          <div><strong>4.29</strong><span>학부 GPA / 4.5</span></div>
          <div><strong>2026</strong><span>서비스디자인 석사과정</span></div>
        </section>

        <section className="about-section">
          <div className="about-section__heading">
            <p className="eyebrow">Experience</p>
            <h2>제품의 앞단과 운영의 뒷단을 함께 경험했습니다.</h2>
          </div>
          <div className="career-list">
            {profile.career.map((item, index) => (
              <article className="career-item" key={item.company}>
                <div className="career-item__index">{String(index + 1).padStart(2, '0')}</div>
                <div className="career-item__meta">
                  <span>{item.period}</span>
                  <span className="career-item__duration">{item.duration}</span>
                  <strong>{item.company}</strong>
                  <p>{item.role} · {item.team}</p>
                </div>
                <div className="career-item__body">
                  <p>{item.summary}</p>
                  <ul>{item.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section">
          <div className="about-section__heading">
            <p className="eyebrow">How I work</p>
            <h2>근거를 제품 결정으로 바꾸는 세 가지 역량</h2>
          </div>
          <div className="capability-grid">
            {profile.capabilities.map((item, index) => (
              <article key={item.title}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="tag-list">{item.tools.map((tool) => <span className="tag" key={tool}>{tool}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="about-section about-records">
          <RecordGroup title="Education" items={profile.education} />
          <RecordGroup title="License" items={profile.certifications} />
          <RecordGroup title="Experience" items={profile.activities} />
        </section>
      </main>
      <Footer email={profile.email} />
    </>
  );
}

function RecordGroup({ title, items }: { title: string; items: Array<{ period: string; name: string; detail?: string; issuer?: string }> }) {
  return (
    <section>
      <p className="eyebrow">{title}</p>
      <div>
        {items.map((item) => (
          <article key={`${item.period}-${item.name}`}>
            <span>{item.period}</span>
            <strong>{item.name}</strong>
            <p>{item.detail ?? item.issuer}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
