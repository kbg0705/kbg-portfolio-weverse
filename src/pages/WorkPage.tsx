import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projects } from '../data/projects';

const representativeSlugs = ['printbank-npb', 'magic-ecole', 'print-studio'];
const additionalSlugs = ['tax-canvas', 'visang-aidt', 'gachon-metaverse-campus', 'picar-ar-sns'];

const pickProjects = (slugs: string[]) => slugs.map((slug) => projects.find((project) => project.slug === slug)).filter((project): project is NonNullable<typeof project> => Boolean(project));

const representativeProjects = pickProjects(representativeSlugs);
const additionalProjects = pickProjects(additionalSlugs);
const researchProjects = projects.filter((project) => !representativeSlugs.includes(project.slug) && !additionalSlugs.includes(project.slug));

export function WorkPage() {
  const sections = [
    {
      eyebrow: 'Representative Work',
      title: '대표 프로젝트',
      description: '미리캔버스 Junior PM 역할과 가장 직접적으로 맞닿은 제품 기획 경험입니다.',
      items: representativeProjects,
      compact: false,
    },
    {
      eyebrow: 'Additional Work',
      title: '추가 프로젝트',
      description: '제품 실행, 운영 개선, 팀 리딩까지 이어진 확장 경험입니다.',
      items: additionalProjects,
      compact: true,
    },
    {
      eyebrow: 'Research & AI Experiments',
      title: '연구 및 AI 실험',
      description: '사용자 조사, AI UX 검증, 추천·VR 연구 경험을 압축해 정리했습니다.',
      items: researchProjects,
      compact: true,
    },
  ];

  return <><Header /><main className="page-shell work-page"><header className="page-hero"><p className="eyebrow">Work</p><h1>사용자 문제 발견부터 제품 실행과 검증까지 수행한 프로젝트</h1><p>데이터, VOC, 운영 흐름을 제품 요구사항으로 구조화하고 개발·QA·검증까지 연결한 작업을 모았습니다.</p></header>{sections.map((section) => section.items.length ? <section className="work-tier work-page-section" key={section.title}><div className="work-tier__heading"><span>{section.eyebrow}</span><h2>{section.title}</h2><p>{section.description}</p></div><div className="work-page-grid">{section.items.map((project) => <ProjectCard compact={section.compact} key={project.slug} project={project} />)}</div></section> : null)}</main><Footer email={profile.email} /></>;
}
