import { ArrowUpRight, BriefcaseBusiness, Mail, UserRound } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer({ email }: { email: string }) {
  return (
    <footer className="site-footer">
      <div className="footer-copy">
        <p className="eyebrow">Let’s work together</p>
        <h2>사용자의 막힘을 제품의 기회로 바꾸겠습니다.</h2>
        <p>주니어 프로덕트 매니저 김부경입니다. 함께 이야기할 기회를 기다리겠습니다.</p>
      </div>
      <div className="footer-actions" aria-label="연락처 및 외부 링크">
        <Link className="footer-action footer-action--primary" to="/contact">
          <span><Mail size={18} /> 연락하기</span>
          <strong>{email}</strong>
          <ArrowUpRight size={18} />
        </Link>
        <div className="footer-action-row">
          <Link className="footer-action" to="/about"><UserRound size={17} /> About</Link>
          <Link className="footer-action" to="/work"><BriefcaseBusiness size={17} /> Work</Link>
        </div>
      </div>
      <div className="footer-meta">
        <span>Kim Bugyeong · Product Manager Portfolio</span>
        <span>Last updated: 2026</span>
      </div>
    </footer>
  );
}
