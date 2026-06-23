import { useMemo, useState } from 'react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { ProjectCard } from '../components/ProjectCard';
import { profile } from '../data/profile';
import { projectCategories, type ProjectCategoryFilter } from '../data/projectCategories';
import { projects } from '../data/projects';

export function WorkPage() {
  const [filter, setFilter] = useState<ProjectCategoryFilter>('All');
  const filtered = useMemo(() => filter === 'All' ? projects : projects.filter((project) => project.category.includes(filter)), [filter]);

  return (
    <>
      <Header />
      <main className="page-shell">
        <header className="page-hero">
          <p className="eyebrow">All Work</p>
          <h1>문제 유형과 제품 단계에 따라 프로젝트를 탐색하세요.</h1>
          <p>Featured, Compact, Archive를 구분하고 실제 측정 성과, 출시·산출물, 외부 선정, AI 예측을 따로 표시했습니다.</p>
        </header>
        <div className="filter-bar" aria-label="프로젝트 필터">
          {projectCategories.map((category) => <button type="button" key={category} aria-pressed={filter === category} onClick={() => setFilter(category)}>{category}</button>)}
        </div>
        {(['featured', 'compact', 'archive'] as const).map((tier) => {
          const items = filtered.filter((project) => project.tier === tier);
          if (!items.length) return null;
          const title = tier === 'featured' ? 'Featured Case Study' : tier === 'compact' ? 'Compact Project' : 'Archive / Additional Experience';
          const description = tier === 'featured' ? '상세한 판단 과정과 산출물을 제공하는 프로젝트' : tier === 'compact' ? '핵심 문제와 역량을 압축한 프로젝트' : '공개 가능한 텍스트와 역량 태그 중심 경험';
          return <section className="work-tier" key={tier}><div className="work-tier__heading"><span>{tier}</span><h2>{title}</h2><p>{description}</p></div><div className={tier === 'featured' ? 'featured-grid' : 'compact-grid'}>{items.map((project) => <ProjectCard compact={tier !== 'featured'} key={project.slug} project={project} />)}</div></section>;
        })}
      </main>
      <Footer email={profile.email} />
    </>
  );
}
