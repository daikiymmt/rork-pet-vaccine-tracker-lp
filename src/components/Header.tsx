import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { PawPrint, Menu, X } from 'lucide-react'
import styles from './Header.module.css'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navItems = isHome
    ? [
        { label: '機能', href: '#features' },
        { label: '使い方', href: '#how-it-works' },
        { label: '対応ワクチン', href: '#vaccines' },
        { label: 'よくある質問', href: '#faq' },
      ]
    : [
        { label: 'トップページ', href: '/' },
        { label: '機能', href: '/#features' },
        { label: 'よくある質問', href: '/#faq' },
        { label: 'ポートフォリオ', href: '/portfolio' },
      ]

  const ctaHref = isHome ? '#download' : '/#download'

  const handleNavClick = (href: string) => {
    setMenuOpen(false)
    if (href.startsWith('#')) {
      const el = document.querySelector(href)
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80
        window.scrollTo({ top, behavior: 'smooth' })
      }
    }
  }

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.inner}`}>
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}><PawPrint size={20} /></div>
          <span>犬猫ワクチン管理</span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) =>
            item.href.startsWith('#') ? (
              <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}>
                {item.label}
              </a>
            ) : (
              <Link key={item.label} to={item.href}>{item.label}</Link>
            ),
          )}
        </nav>

        {isHome ? (
          <a href={ctaHref} className={`btn btn-sm btn-primary ${styles.cta}`}
            onClick={(e) => { e.preventDefault(); handleNavClick(ctaHref) }}>
            ダウンロード
          </a>
        ) : (
          <Link to={ctaHref} className={`btn btn-sm btn-primary ${styles.cta}`}>ダウンロード</Link>
        )}

        <button className={styles.menuBtn} onClick={() => setMenuOpen(!menuOpen)} aria-label="メニュー">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className={styles.mobileMenu}>
          <nav>
            {navItems.map((item) =>
              item.href.startsWith('#') ? (
                <a key={item.label} href={item.href} onClick={(e) => { e.preventDefault(); handleNavClick(item.href) }}>
                  {item.label}
                </a>
              ) : (
                <Link key={item.label} to={item.href} onClick={() => setMenuOpen(false)}>{item.label}</Link>
              ),
            )}
            {isHome ? (
              <a href={ctaHref} className="btn btn-primary" onClick={(e) => { e.preventDefault(); handleNavClick(ctaHref) }}>
                ダウンロード
              </a>
            ) : (
              <Link to={ctaHref} className="btn btn-primary" onClick={() => setMenuOpen(false)}>ダウンロード</Link>
            )}
          </nav>
        </div>
      )}
    </header>
  )
}
