import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import type { MouseEvent } from 'react';
import { useEffect, useRef } from 'react';
import type { ProjectImage } from '../../types/project';
import { ImagePlaceholder } from './ImagePlaceholder';

export function ImageModal({ images, index, onClose, onChange }: { images: ProjectImage[]; index: number | null; onClose: () => void; onChange: (index: number) => void }) {
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const image = index === null ? undefined : images[index];
  useEffect(() => {
    if (!image) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeRef.current?.focus();
    const keydown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') onChange((index! - 1 + images.length) % images.length);
      if (event.key === 'ArrowRight') onChange((index! + 1) % images.length);
      if (event.key === 'Tab') {
        const dialog = document.querySelector<HTMLElement>('[data-image-dialog]');
        const items = dialog?.querySelectorAll<HTMLElement>('button, [href], [tabindex]:not([tabindex="-1"])');
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', keydown);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', keydown); };
  }, [image, images.length, index, onChange, onClose]);
  if (!image || index === null) return null;
  const backdrop = (event: MouseEvent<HTMLDivElement>) => { if (event.target === event.currentTarget) onClose(); };
  return <div className="image-modal" onMouseDown={backdrop}><div className="image-modal__dialog" role="dialog" aria-modal="true" aria-label={image.alt} data-image-dialog>
    <button ref={closeRef} className="icon-button image-modal__close" type="button" onClick={onClose} aria-label="닫기"><X /></button>
    {image.src ? <img src={image.src} alt={image.alt} /> : <ImagePlaceholder image={image} />}
    <p>{image.caption}</p>
    {images.length > 1 ? <div className="image-modal__navigation"><button type="button" onClick={() => onChange((index - 1 + images.length) % images.length)}><ChevronLeft /> 이전</button><span>{index + 1} / {images.length}</span><button type="button" onClick={() => onChange((index + 1) % images.length)}>다음 <ChevronRight /></button></div> : null}
  </div></div>;
}
