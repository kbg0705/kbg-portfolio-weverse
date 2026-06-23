import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { profile } from '../data/profile';

type FooterProps = {
  email: string;
};

export function Footer({ email }: FooterProps) {
  const copyEmail = () => {
    void navigator.clipboard?.writeText(email);
  };

  return (
    <footer className="site-footer" id="contact">
      <div className="footer-copy">
        <p className="eyebrow">Contact</p>
        <h2>Let&apos;s build a clearer product experience.</h2>
        <p>사용자의 막힘을 발견하고 제품으로 바꾸는 과정에 대해 이야기하고 싶습니다.</p>
      </div>

      <div className="footer-actions" aria-label="연락처 및 외부 링크">
        <a className="footer-action footer-action--primary" href={`mailto:${email}`}>
          <span>
            <Mail size={18} aria-hidden="true" />
            이메일 보내기
          </span>
          <strong>{email}</strong>
          <ArrowUpRight size={18} aria-hidden="true" />
        </a>

        <div className="footer-action-row">
          <button className="footer-action footer-action--secondary" type="button" onClick={copyEmail}>
            이메일 복사
          </button>
          <a className="footer-action footer-action--secondary" href={profile.github} target="_blank" rel="noreferrer">
            <Github size={17} aria-hidden="true" />
            GitHub 보기
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="footer-meta">
        <span>© 2026 Kim Bugyeong</span>
        <span>Product Manager Portfolio</span>
      </div>
    </footer>
  );
}
