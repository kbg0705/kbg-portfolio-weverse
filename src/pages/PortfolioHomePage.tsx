import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';
import type { Project } from '../types/project';

const representativeSlugs = ['printbank-npb', 'magic-ecole', 'print-studio'];
const representativeProjects = representativeSlugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is Project => Boolean(project));
const aboutSummary = ['사용자 문제 발견', '제품 요구사항 구조화', '출시 이후 검증'];

export function PortfolioHomePage() {
  return <><Header /><main>
    <section className="home-hero home-hero--balanced">
      <div className="home-hero__copy"><p className="eyebrow">PRODUCT MANAGER · UX STRATEGY · AI</p><h1><span>사용자의 막힘을 발견해</span><span>실행 가능한 제품으로 바꿉니다.</span></h1><p>데이터와 VOC를 제품 요구사항으로 구조화하고, 출시 이후 반응까지 확인합니다.</p><div className="hero-actions"><Link className="primary-action" to="/work">프로젝트 살펴보기 <ArrowRight size={18} /></Link><Link className="secondary-action" to="/about">핵심 역량과 경험 보기</Link></div></div>
      <div className="signal-panel hero-signal"><p className="eyebrow">SIGNAL → STRUCTURE → PRODUCT</p><h2>문제의 신호를 제품 결정으로 연결합니다.</h2><div className="signal-steps"><div><span>01</span><strong>Signal</strong><p>데이터 · VOC · 인터뷰</p></div><div><span>02</span><strong>Structure</strong><p>정책 · 상태 · 우선순위</p></div><div><span>03</span><strong>Product</strong><p>화면 · 협업 · 검증</p></div></div></div>
    </section>
    <section id="work" className="home-section home-work"><div className="section-heading-row"><div><p className="eyebrow">Representative Work</p><h2>미리캔버스 Junior PM 역량을 보여주는 대표 프로젝트</h2></div><Link to="/work">전체 프로젝트 보기 <ArrowRight size={17} /></Link></div><div className="work-project-grid work-project-grid--representative">{representativeProjects.map((project) => <ProjectCard key={project.slug} project={project} />)}</div></section>
    <section id="about" className="home-section home-about-summary"><div className="section-heading-row"><div><p className="eyebrow">About</p><h2>문제를 제품 요구사항으로 바꾸는 PM입니다.</h2></div><Link className="secondary-action" to="/about">이력 보기</Link></div><div className="about-summary-layout"><p>{profile.summary}</p><div>{aboutSummary.map((item) => <span key={item}>{item}</span>)}</div></div></section>
  </main><Footer email={profile.email} /></>;
}
