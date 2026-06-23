import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const navItems = [
  { label: 'HOME', to: '/' },
  { label: 'WORK', to: '/work' },
  { label: 'ABOUT', to: '/about' },
  { label: 'CONTACT', to: '/contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const updateScrolled = () => setIsScrolled(window.scrollY >= 50);

    updateScrolled();
    window.addEventListener('scroll', updateScrolled, { passive: true });

    return () => window.removeEventListener('scroll', updateScrolled);
  }, []);

  return (
    <header className={`site-header${isScrolled ? ' is-scrolled' : ''}`}>
      <Link className="brand-lockup" to="/">
        <strong>KB.</strong>
        <span>KIM BUGYEONG / PRODUCT MANAGER</span>
      </Link>
      <nav className="global-nav" aria-label="주요 페이지">
        {navItems.map((item) => (
          <NavLink
            end={item.to === '/'}
            key={item.to}
            to={item.to}
          >
            {item.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}
