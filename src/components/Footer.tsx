import { Link } from 'react-router-dom'
import { PawPrint } from 'lucide-react'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}><PawPrint size={18} /></div>
            <span>犬猫ワクチン管理</span>
          </div>
          <p className={styles.desc}>犬と猫のワクチン接種証明書・接種記録をまとめて管理し、接種予定日を忘れないようにするためのアプリです。</p>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <h4>アプリ</h4>
            <Link to="/#features">機能</Link>
            <Link to="/#how-it-works">使い方</Link>
            <Link to="/#vaccines">対応ワクチン</Link>
            <a href="https://apps.apple.com/jp/app/pet-vaccine-tracker/id6761318844" target="_blank" rel="noopener noreferrer">ダウンロード</a>
          </div>
          <div className={styles.col}>
            <h4>サポート</h4>
            <Link to="/#faq">よくある質問</Link>
            <a href="#">お問い合わせ</a>
            <Link to="/privacy">プライバシーポリシー</Link>
            <Link to="/portfolio">ポートフォリオ</Link>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.bottom}>
          <p>&copy; 2026 犬猫ワクチン管理. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
