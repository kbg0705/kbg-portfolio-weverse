import { ArrowUpRight, Github, Mail } from 'lucide-react';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { profile } from '../data/profile';

export function ContactPage() {
  const copyEmail = () => {
    void navigator.clipboard?.writeText(profile.email);
  };

  return <><Header /><main className="page-shell contact-page"><header className="page-hero"><p className="eyebrow">Contact</p><h1>문제를 제품으로 바꾸는 과정이 궁금하다면 이야기 나누고 싶습니다.</h1><p>이메일과 GitHub로 연락하실 수 있습니다.</p></header><section className="contact-panel" aria-label="연락처"><a className="footer-action footer-action--primary" href={`mailto:${profile.email}`}><span><Mail size={18} aria-hidden="true" />이메일 보내기</span><strong>{profile.email}</strong><ArrowUpRight size={18} aria-hidden="true" /></a><button className="footer-action footer-action--secondary" type="button" onClick={copyEmail}>이메일 복사</button><a className="footer-action footer-action--secondary" href={profile.github} target="_blank" rel="noreferrer"><Github size={17} aria-hidden="true" />GitHub 보기<ArrowUpRight size={15} aria-hidden="true" /></a></section></main><Footer email={profile.email} /></>;
}
