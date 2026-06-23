import { useState } from 'react';
import type { Project } from '../../types/project';
import { resolveAssetPath } from '../../utils/assets';

type ProjectThumbnailProps = {
  project: Project;
  compact?: boolean;
};

const fallbackMap: Record<string, { label: string; flow: string[]; keywords: string[]; tone: string }> = {
  'printbank-npb': { label: 'PROJECT STRUCTURE', flow: ['VOC', 'FD', 'RP', 'QA'], keywords: ['FO/BO', 'Policy', 'Operations'], tone: 'operations' },
  'printbank-main': { label: 'RECONSTRUCTED VISUAL', flow: ['GA4', 'IA', 'CTA', '1.7x'], keywords: ['GA4', 'IA', 'Experiment'], tone: 'metric' },
  'magic-ecole': { label: 'CASE STUDY PREVIEW', flow: ['Global Role', 'Course Role', 'Library'], keywords: ['SaaS', 'Permission', 'Scrum'], tone: 'saas' },
  'tax-canvas': { label: 'CASE STUDY PREVIEW', flow: ['Question', 'AI Analysis', 'Evidence'], keywords: ['Generative AI', 'RAG', 'Trust'], tone: 'ai' },
  'print-studio': { label: 'CASE STUDY PREVIEW', flow: ['Upload', 'Guide', 'Order', 'Intranet'], keywords: ['E-commerce', 'Automation', 'UX Writing'], tone: 'commerce' },
  'print-decision-support': { label: 'RECONSTRUCTED VISUAL', flow: ['Interview', 'Insight', 'Blueprint', 'Concept'], keywords: ['Research', 'Decision Support', 'Human-in-the-loop'], tone: 'research' },
  'gachon-metaverse-campus': { label: 'CASE STUDY PREVIEW', flow: ['Map', 'Portal', 'Route', 'Flag'], keywords: ['Navigation', 'Content', 'Leadership'], tone: 'campus' },
  'visang-aidt': { label: 'PROJECT STRUCTURE', flow: ['Content', 'Print', 'QA'], keywords: ['AIDT', 'Documentation', 'Selenium'], tone: 'qa' },
  'smooth-route': { label: 'RECONSTRUCTED VISUAL', flow: ['Route', 'Crowd', 'Heatmap'], keywords: ['AI UX', 'PRD', 'Simulation'], tone: 'mobility' },
  'my-ai-service-business': { label: 'PROJECT STRUCTURE', flow: ['Tools', 'Hub', 'B2B'], keywords: ['BMC', 'Blueprint', 'Ecosystem'], tone: 'business' },
  'picar-ar-sns': { label: 'CASE STUDY PREVIEW', flow: ['Pin', 'AR Route', 'Camera', 'Feed'], keywords: ['AR', 'Location', 'SNS'], tone: 'ar' },
  recommendation: { label: 'PROJECT STRUCTURE', flow: ['User', 'Content', 'Result'], keywords: ['Python', 'Recommendation', 'Data'], tone: 'data' },
  'hci-vr': { label: 'RECONSTRUCTED VISUAL', flow: ['VR', 'Observe', 'Note'], keywords: ['HCI', 'VR', 'User Research'], tone: 'vr' },
};

export function ProjectThumbnail({ project, compact = false }: ProjectThumbnailProps) {
  const [hasImageError, setHasImageError] = useState(false);
  const src = project.thumbnail?.src?.trim();
  const hasValidThumbnail = Boolean(src) && !hasImageError;
  const objectFit = project.thumbnail?.objectFit ?? 'cover';

  if (hasValidThumbnail) {
    return (
      <figure className={`project-thumbnail project-thumbnail--${compact ? 'compact' : 'featured'}`}>
        <img src={resolveAssetPath(src)} alt={project.thumbnail?.alt ?? `${project.title} 대표 이미지`} loading="lazy" style={{ objectFit }} onError={() => setHasImageError(true)} />
      </figure>
    );
  }

  return <ProjectThumbnailFallback project={project} compact={compact} />;
}

function ProjectThumbnailFallback({ project, compact }: ProjectThumbnailProps) {
  const fallback = fallbackMap[project.slug] ?? {
    label: 'CASE STUDY PREVIEW',
    flow: ['Problem', 'Decision', 'Outcome'],
    keywords: project.tags.slice(0, 3),
    tone: 'default',
  };

  return (
    <div className={`project-thumbnail project-thumbnail--${compact ? 'compact' : 'featured'} project-thumbnail--fallback tone-${fallback.tone}`} role="img" aria-label={`${project.title} 프로젝트 구조 미리보기`}>
      <div className="project-thumbnail__topline">
        <span>{fallback.label}</span>
        <b>{project.service}</b>
      </div>
      <div className="project-thumbnail__diagram" aria-hidden="true">
        {fallback.flow.map((item, index) => (
          <span key={item}>
            <i>{String(index + 1).padStart(2, '0')}</i>
            {item}
          </span>
        ))}
      </div>
      <div className="project-thumbnail__keywords">
        {fallback.keywords.map((keyword) => <em key={keyword}>{keyword}</em>)}
      </div>
    </div>
  );
}
