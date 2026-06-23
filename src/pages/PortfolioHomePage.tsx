import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { careerSummary } from '../data/career';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

const representativeSlugs = ['printbank-npb', 'magic-ecole', 'print-studio'];
const representativeProjects = representativeSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter(Boolean);
const resumeActions = ['문제보다 먼저 증거를 확인합니다.', '정상 흐름보다 예외와 책임 범위를 먼저 설계합니다.', '출시 여부와 측정 결과를 분리해 표현합니다.'];

export function PortfolioHomePage() {
  return <><Header /><main>
    <section className="home-hero home-hero--balanced">
      <div className="home-hero__copy"><p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p><h1><span>사용자의 막힘을 발견해</span><span>실행 가능한 제품으로 바꿉니다.</span></h1><p>데이터와 VOC를 제품 요구사항으로 구조화하고, 출시 이후 반응까지 확인합니다.</p><div className="hero-actions"><Link className="primary-action" to="/work">프로젝트 살펴보기 <ArrowRight size={18} /></Link><Link className="secondary-action" to="/about">핵심 역량과 경험 보기</Link></div></div>
      <div className="signal-panel hero-signal"><p className="eyebrow">SIGNAL → STRUCTURE → PRODUCT</p><h2>문제의 신호를 제품 결정으로 연결합니다.</h2><div className="signal-steps"><div><span>01</span><strong>Signal</strong><p>데이터 · VOC · 인터뷰</p></div><div><span>02</span><strong>Structure</strong><p>정책 · 상태 · 우선순위</p></div><div><span>03</span><strong>Product</strong><p>화면 · 협업 · 검증</p></div></div></div>
    </section>
    <section id="work" className="home-section home-work"><div className="section-heading-row"><div><p className="eyebrow">Representative Work</p><h2>미리캔버스 Junior PM 역량을 보여주는 대표 프로젝트</h2></div><Link to="/work">전체 프로젝트 보기 <ArrowRight size={17} /></Link></div><div className="work-project-grid work-project-grid--representative">{representativeProjects.map((project) => project ? <ProjectCard key={project.slug} project={project} /> : null)}</div></section>
    <section id="about" className="home-section home-resume"><div className="section-heading-row"><div><p className="eyebrow">About</p><h2>문제를 제품 요구사항으로 바꾸는 PM입니다.</h2></div><Link className="secondary-action" to="/about">이력 보기</Link></div><div className="resume-layout"><article className="resume-profile"><h3>Profile</h3>{profile.profile.map((item) => <p key={item}>{item}</p>)}</article><article className="resume-career"><h3>Career</h3><ol>{careerSummary.map((entry) => <li key={`${entry.company}-${entry.period}`}><strong>{entry.company}</strong><span>{entry.role}</span><em>{entry.period}</em><p>{entry.summary}</p></li>)}</ol></article><article><h3>Education</h3><ul>{profile.education.map((item) => <li key={item}>{item}</li>)}</ul></article><article><h3>Certifications · Tools</h3><ul>{[...profile.certifications, profile.tools.join(' · ')].map((item) => <li key={item}>{item}</li>)}</ul></article></div><div className="resume-principles">{resumeActions.map((item) => <p key={item}>{item}</p>)}</div></section>
  </main><Footer email={profile.email} /></>;
}
