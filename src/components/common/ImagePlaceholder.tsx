import type { ProjectImage } from '../../types/project';

function resolveAssetPath(src: string) {
  if (/^(https?:)?\/\//.test(src) || src.startsWith('data:')) return src;
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : `${import.meta.env.BASE_URL}/`;
  return `${base}${src.replace(/^\/+/, '')}`;
}

export function ImagePlaceholder({ image, onOpen }: { image: ProjectImage; onOpen?: () => void }) {
  const content = (
    <>
      <span>IMAGE REQUIRED</span>
      <strong>{image.placeholderTitle}</strong>
      <p>{image.placeholderDescription}</p>
      <small>권장 비율 {image.aspectRatio}{image.isConfidential ? ' · 비식별화 필요' : ''}</small>
    </>
  );

  if (image.src) {
    return (
      <button type="button" className="image-placeholder has-image" onClick={onOpen}>
        <img src={resolveAssetPath(image.src)} alt={image.alt} loading="lazy" />
        <em>{image.caption}</em>
      </button>
    );
  }

  return onOpen ? (
    <button type="button" className="image-placeholder" onClick={onOpen}>{content}</button>
  ) : (
    <div className="image-placeholder" role="img" aria-label={image.alt}>{content}</div>
  );
}
