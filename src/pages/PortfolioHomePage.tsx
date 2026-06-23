import { ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { careerSummary } from '../data/career';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

const featuredSlugs = ['printbank-npb', 'printbank-main', 'magic-ecole', 'tax-canvas', 'print-studio'];
const additionalSlugs = ['print-decision-support', 'gachon-metaverse-campus', 'visang-aidt', 'smooth-route', 'my-ai-service-business', 'picar-ar-sns'];

const bySlug = (slugs: string[]) => slugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is NonNullable<typeof project> => Boolean(project));
const featuredProjects = bySlug(featuredSlugs);
const additionalProjects = bySlug(additionalSlugs);
const archiveProjects = projects.filter((project) => project.tier === 'archive');

const profileItems = [
  ['문제 정의', '데이터, VOC, 인터뷰로 사용자가 멈추는 지점을 찾습니다.'],
  ['제품 정책과 사용자 흐름', '정책·상태·예외 케이스를 개발 가능한 기준으로 정리합니다.'],
  ['데이터와 VOC 기반 개선', '출시 이후 지표와 사용자 반응을 확인해 다음 개선 방향을 잡습니다.'],
  ['협업', '디자인, 개발, 운영 조직이 같은 기준으로 움직이도록 산출물을 구체화합니다.'],
] as const;

const interests = ['AI Search', 'Recommendation', 'Creation Flow', 'SaaS', 'Product Operations', 'Service Design'];

export function PortfolioHomePage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const element = document.getElementById(location.hash.replace('#', ''));
    window.setTimeout(() => element?.scrollIntoView({ behavior: 'smooth', block: 'start' }), 0);
  }, [location.hash]);

  return <><Header /><main>
    <section id="home" className="home-hero home-hero--balanced">
      <div className="home-hero__copy">
        <p className="eyebrow">PRODUCT MANAGER · SERVICE PLANNING</p>
        <h1><span>사용자의 막힘을 발견하고</span><span>개발 가능한 제품 기준으로 구체화합니다.</span></h1>
        <p>데이터와 VOC를 바탕으로 문제를 정의하고, 정책·상태·예외 케이스를 설계해 출시 이후 반응까지 확인합니다.</p>
        <div className="hero-actions"><a className="primary-action" href="#work">프로젝트 살펴보기 <ArrowRight size={18} /></a><a className="secondary-action" href="#about">경력 알아보기</a></div>
      </div>
      <div className="impact-strip home-impact" aria-label="핵심 성과">
        <div><strong>1.7×</strong><p>평균 참여시간 증가</p><span>Printbank Main Renewal</span></div>
        <div><strong>FD·RP</strong><p>운영 이슈 구조화</p><span>Printbank / NPB</span></div>
        <div><strong>14</strong><p>Sprint 운영</p><span>Magic Ecole LMS</span></div>
        <div><strong>30%</strong><p>운영 처리시간 단축</p><span>PrintStudio</span></div>
      </div>
    </section>

    <section id="work" className="home-section home-work">
      <div className="section-heading-row home-work__heading"><div><p className="eyebrow">Work</p><h2>Selected Work</h2><p>문제를 발견한 근거와 제품으로 전환한 판단을 중심으로 정리했습니다.</p></div></div>
      <WorkGroup title="Featured Projects" projects={featuredProjects} />
      <WorkGroup title="Research & Additional Work" projects={additionalProjects} compact />
      {archiveProjects.length ? <WorkGroup title="Archive" projects={archiveProjects} compact /> : null}
    </section>

    <section id="about" className="home-section home-about-detail">
      <div className="about-hero">
        <p className="eyebrow">About</p>
        <h2>사용자 문제를 발견해 실행 가능한 제품 요구사항으로 구체화하는 Product Manager입니다.</h2>
        <p>인쇄 이커머스, EdTech SaaS, 생성형 AI 검색서비스에서 사용자 흐름과 운영 정책을 설계하고 개발·디자인·운영 조직과 출시 및 개선을 수행했습니다.</p>
      </div>
      <div className="about-profile-grid">{profileItems.map(([title, body]) => <article key={title}><span>{title}</span><p>{body}</p></article>)}</div>
      <section className="career-summary home-career-summary" aria-label="Career Timeline">
        <div className="section-heading-row"><div><p className="eyebrow">Career Timeline</p><h2>제품을 기획하고, 운영하고, 개선해 왔습니다.</h2></div></div>
        <ol className="career-timeline">{careerSummary.map((entry) => <li key={`${entry.company}-${entry.period}`}><div className="career-timeline__period">{entry.period}</div><div className="career-timeline__body"><h3>{entry.company}</h3><p className="career-timeline__role">{entry.role}</p><p>{entry.summary}</p><div className="career-projects">{entry.projects.map((project) => <Link key={project.slug} to={`/projects/${project.slug}`}>{project.label}</Link>)}</div></div></li>)}</ol>
      </section>
      <div className="about-lower-grid">
        <article><h3>Education</h3><ul>{profile.education.map((item) => <li key={item}>{item}</li>)}</ul></article>
        <article><h3>Certification</h3><div className="tag-list">{profile.certifications.map((item) => <span className="tag" key={item}>{item.replace(/^\d{4}\.\d{2} · /, '')}</span>)}</div></article>
        <article><h3>Tools & Interests</h3><div className="tag-list">{[...profile.tools, ...interests].map((item) => <span className="tag" key={item}>{item}</span>)}</div></article>
      </div>
    </section>
  </main><Footer email={profile.email} /></>;
}

function WorkGroup({ title, projects: items, compact = false }: { title: string; projects: typeof projects; compact?: boolean }) {
  return <section className="home-work-group"><h3>{title}</h3><div className={compact ? 'compact-grid home-project-grid' : 'featured-grid home-project-grid'}>{items.map((project) => <ProjectCard compact={compact} key={project.slug} project={project} />)}</div></section>;
}
