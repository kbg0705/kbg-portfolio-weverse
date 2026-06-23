import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../types/project';
import { ProjectThumbnail } from './project/ProjectThumbnail';

export function ProjectCard({ project, compact = false }: { project: Project; compact?: boolean }) {
  const primaryOutcome = project.impact[0];

  return (
    <article className={`project-card project-card--${project.tier}${compact ? ' is-compact' : ''}`}>
      <div className="project-card__meta"><span>{String(project.order).padStart(2, '0')}</span><p>{project.company ?? project.service}</p></div>
      <ProjectThumbnail compact={compact} project={project} />
      <div className="project-card__content">
        <h3>{project.title}</h3>
        <p className="project-card__description">{project.problem}</p>
        <dl className="project-card__facts">
          <div><dt>Role</dt><dd>{project.role}</dd></div>
          <div><dt>{primaryOutcome ? 'Outcome' : 'Status'}</dt><dd>{primaryOutcome ? `${primaryOutcome.value} · ${primaryOutcome.label}` : project.status}</dd></div>
        </dl>
        <div className="tag-list">{project.tags.slice(0, compact ? 2 : 3).map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
        {project.detailPageEnabled ? <Link className="detail-link" to={`/projects/${project.slug}`}>Case Study <ArrowUpRight size={17} /></Link> : <span className="detail-link detail-link--disabled">Overview</span>}
      </div>
    </article>
  );
}
