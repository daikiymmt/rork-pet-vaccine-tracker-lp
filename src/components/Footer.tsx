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
            <span>ペット予防接種メモ</span>
          </div>
          <p className={styles.desc}>犬と猫の予防接種記録を管理し、接種予定日を忘れないようにするためのアプリです。</p>
        </div>
        <div className={styles.links}>
          <div className={styles.col}>
            <h4>アプリ</h4>
            <Link to="/#features">機能</Link>
            <Link to="/#how-it-works">使い方</Link>
            <Link to="/#vaccines">対応ワクチン</Link>
            <Link to="/#download">ダウンロード</Link>
          </div>
          <div className={styles.col}>
            <h4>サポート</h4>
            <Link to="/#faq">よくある質問</Link>
            <a href="#">お問い合わせ</a>
            <Link to="/privacy">プライバシーポリシー</Link>
            <a href="#">利用規約</a>
          </div>
        </div>
      </div>
      <div className="container">
        <div className={styles.bottom}>
          <p>&copy; 2026 ペット予防接種メモ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
