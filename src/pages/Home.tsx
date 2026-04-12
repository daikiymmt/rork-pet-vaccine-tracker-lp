import {
  Shield, Download, ArrowDown, Lock, PawPrint,
  FileText, Bell, AlertCircle, Calendar,
  CheckCircle, ArrowRight, Check,
  ChevronDown,
} from 'lucide-react'
import PhoneMockup from '../components/PhoneMockup'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Home.module.css'

export default function Home() {
  const ref = useScrollAnimation<HTMLDivElement>()
  usePageMeta(
    'ペット予防接種メモ - 犬と猫の予防接種スケジュール管理アプリ【無料】',
    '犬と猫の予防接種記録を無料で管理できるアプリ。接種予定日をプッシュ通知でお知らせ。オフライン対応・広告なし・アカウント登録不要。',
  )

  return (
    <div ref={ref}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={`${styles.heroShape} ${styles.heroShape1}`} />
          <div className={`${styles.heroShape} ${styles.heroShape2}`} />
          <div className={`${styles.heroShape} ${styles.heroShape3}`} />
        </div>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <Shield size={16} />
              安心のオフライン対応
            </div>
            <h1>大切なペットの<br /><span className="text-gradient">予防接種</span>を<br />もう忘れない</h1>
            <p className={styles.heroDesc}>
              犬と猫の予防接種記録をかんたんに管理。<br className={styles.spBr} />
              接種予定日が近づいたら通知でお知らせ。<br />
              すべてのデータはお使いの端末に保存されるので、<br className={styles.spBr} />
              インターネット接続は不要です。
            </p>
            <div className={styles.heroActions}>
              <a href="#download" className="btn btn-primary btn-lg" onClick={smoothScroll}>
                <Download size={20} />
                無料ダウンロード
              </a>
              <a href="#features" className="btn btn-outline btn-lg" onClick={smoothScroll}>
                詳しく見る
                <ArrowDown size={18} />
              </a>
            </div>
            <div className={styles.heroStats}>
              <div className={styles.stat}>
                <span className={styles.statValue}>100%</span>
                <span className={styles.statLabel}>無料</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}>0</span>
                <span className={styles.statLabel}>広告なし</span>
              </div>
              <div className={styles.statDivider} />
              <div className={styles.stat}>
                <span className={styles.statValue}><Lock size={18} /></span>
                <span className={styles.statLabel}>プライバシー安心</span>
              </div>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <PhoneMockup />
            <div className={`${styles.floatingCard} ${styles.floating1}`}>
              <CheckCircle size={20} color="#22C55E" />
              <span>狂犬病ワクチン接種済み</span>
            </div>
            <div className={`${styles.floatingCard} ${styles.floating2}`}>
              <Bell size={20} color="#F59E0B" />
              <span>3日後に接種予定</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className={styles.features} id="features">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">機能</span>
            <h2>シンプルだけど、<span className="text-gradient">必要な機能</span>はすべて揃っています</h2>
            <p>直感的なUIで、誰でもかんたんにペットの予防接種スケジュールを管理できます。</p>
          </div>
          <div className={styles.featuresGrid}>
            {features.map((f, i) => (
              <div key={i} className={`${styles.featureCard} ${i === 0 ? styles.featureHighlight : ''} fade-in`} style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className={`${styles.featureIcon} ${styles[f.color]}`}>
                  <f.icon size={28} />
                </div>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className={styles.howItWorks} id="how-it-works">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">使い方</span>
            <h2><span className="text-gradient">3ステップ</span>で、かんたんスタート</h2>
            <p>初めての方でも、すぐに使いこなせるシンプル設計です。</p>
          </div>
          <div className={styles.steps}>
            {steps.map((s, i) => (
              <div key={i} className={styles.stepRow}>
                {i > 0 && (
                  <div className={styles.stepArrow}>
                    <ArrowRight size={24} />
                  </div>
                )}
                <div className={`${styles.step} fade-in`} style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className={styles.stepNumber}>{i + 1}</div>
                  <div className={`${styles.stepIconWrap} ${styles[s.color]}`}>
                    <s.icon size={32} />
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vaccines */}
      <section className={styles.vaccines} id="vaccines">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">対応ワクチン</span>
            <h2>犬・猫の<span className="text-gradient">主要なワクチン</span>に対応</h2>
            <p>一般的な予防接種をプリセットで用意。カスタム入力にも対応しています。</p>
          </div>
          <div className={styles.vaccineGrid}>
            <VaccineCard type="dog" title="犬のワクチン" items={['狂犬病ワクチン', '5種混合ワクチン', '7種混合ワクチン', '9種混合ワクチン', 'その他（カスタム入力）']} />
            <VaccineCard type="cat" title="猫のワクチン" items={['3種混合ワクチン', '4種混合ワクチン', '5種混合ワクチン', 'その他（カスタム入力）']} />
          </div>
        </div>
      </section>

      {/* Privacy banner */}
      <section className={styles.privacySection}>
        <div className="container">
          <div className={`${styles.privacyCard} fade-in`}>
            <div className={styles.privacyIcon}>
              <Shield size={48} strokeWidth={1.5} />
            </div>
            <div className={styles.privacyContent}>
              <h2>プライバシーを最優先に設計</h2>
              <p>ペット予防接種メモは、お使いの端末内にすべてのデータを保存します。アカウント登録やインターネット接続は一切不要。あなたとペットの大切な情報が外部に送信されることはありません。</p>
              <div className={styles.privacyBadges}>
                <span className={styles.privacyBadge}><Lock size={18} />ローカル保存</span>
                <span className={styles.privacyBadge}><AlertCircle size={18} />アカウント不要</span>
                <span className={styles.privacyBadge}><Shield size={18} />トラッキングなし</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className={styles.faq} id="faq">
        <div className="container">
          <div className="section-header">
            <span className="section-badge">FAQ</span>
            <h2><span className="text-gradient">よくある質問</span></h2>
          </div>
          <div className={styles.faqList}>
            {faqs.map((faq, i) => (
              <details key={i} className={`${styles.faqItem} fade-in`} style={{ transitionDelay: `${i * 0.06}s` }}>
                <summary>
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={styles.faqChevron} />
                </summary>
                <div className={styles.faqAnswer}><p>{faq.a}</p></div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className={styles.download} id="download">
        <div className="container">
          <div className={`${styles.downloadInner} fade-in`}>
            <div className={styles.downloadBg}>
              <div className={`${styles.downloadShape} ${styles.downloadShape1}`} />
              <div className={`${styles.downloadShape} ${styles.downloadShape2}`} />
            </div>
            <h2>大切なペットの健康を、<br />今日から管理しませんか？</h2>
            <p>無料・広告なし・アカウント登録不要。<br />今すぐダウンロードして、予防接種のスケジュール管理を始めましょう。</p>
            <div className={styles.storeButtons}>
              <a href="https://apps.apple.com/jp/app/pet-vaccine-tracker/id6761318844" className={styles.storeBtn} target="_blank" rel="noopener noreferrer">
                <AppleIcon />
                <div>
                  <span className={styles.storeBtnLabel}>Download on the</span>
                  <span className={styles.storeBtnStore}>App Store</span>
                </div>
              </a>
              <a href="#" className={styles.storeBtn}>
                <PlayIcon />
                <div>
                  <span className={styles.storeBtnLabel}>GET IT ON</span>
                  <span className={styles.storeBtnStore}>Google Play</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---- Data ---- */

const features = [
  { icon: PawPrint, title: 'ペット登録', desc: '犬・猫を何匹でも登録可能。名前、種類、誕生日、メモなどの基本情報を記録できます。', color: 'iconPrimary' },
  { icon: FileText, title: '接種記録', desc: 'ワクチンの種類、接種日、次回予定日、動物病院名を記録。接種履歴を一覧で確認できます。', color: 'iconBlue' },
  { icon: Bell, title: '通知リマインダー', desc: '接種予定日の1〜7日前にプッシュ通知でお知らせ。期限切れも毎日通知で見逃しません。', color: 'iconWarning' },
  { icon: Shield, title: 'オフライン対応', desc: 'すべてのデータは端末内に保存。インターネット接続不要で、個人情報が外部に送信されることはありません。', color: 'iconSuccess' },
  { icon: AlertCircle, title: 'ステータス管理', desc: '「予定あり」「本日」「期限切れ」「未設定」の4つのステータスで接種状況を一目で把握。', color: 'iconDanger' },
  { icon: Calendar, title: 'かんたん操作', desc: '初回チュートリアルで使い方をガイド。直感的なUIで、すぐに使い始められます。', color: 'iconPurple' },
]

const steps = [
  { icon: PawPrint, title: 'ペットを登録', desc: '名前、種類（犬・猫）、誕生日などの基本情報を入力してペットを登録します。', color: 'stepTeal' },
  { icon: FileText, title: '接種記録を入力', desc: 'ワクチンの種類、接種日、次回予定日、動物病院名を記録します。', color: 'stepBlue' },
  { icon: Bell, title: '通知を受け取る', desc: '接種予定日が近づくと自動で通知。もう忘れる心配はありません。', color: 'stepOrange' },
]

const faqs = [
  { q: '料金はかかりますか？', a: '完全無料でご利用いただけます。アプリ内課金や広告もありません。' },
  { q: '犬と猫以外のペットにも使えますか？', a: '現在は犬と猫のみ対応しています。今後のアップデートで他のペットへの対応も検討しています。' },
  { q: 'データのバックアップはできますか？', a: 'データは端末のローカルストレージに保存されます。端末のバックアップ機能（iCloudバックアップなど）を利用することで、データの保持が可能です。' },
  { q: '通知のタイミングは変更できますか？', a: 'はい、設定画面から接種予定日の1日前、2日前、3日前、5日前、7日前から選択できます。期限切れのワクチンについては毎日通知されます。' },
  { q: 'インターネット接続は必要ですか？', a: 'いいえ、すべての機能がオフラインで動作します。データは端末内に保存されるため、インターネット接続は一切不要です。' },
  { q: 'ペットは何匹まで登録できますか？', a: '登録数に制限はありません。何匹でもペットを登録し、それぞれの予防接種記録を管理できます。' },
]

/* ---- Sub-components ---- */

function VaccineCard({ type, title, items }: { type: 'dog' | 'cat'; title: string; items: string[] }) {
  return (
    <div className={`${styles.vaccineCard} ${type === 'dog' ? styles.vaccineDog : styles.vaccineCat} fade-in`}>
      <div className={styles.vaccineHeader}>
        <div className={`${styles.vaccinePetIcon} ${type === 'dog' ? styles.vaccineIconDog : styles.vaccineIconCat}`}>
          <PawPrint size={24} color={type === 'dog' ? '#F59E0B' : '#8B5CF6'} />
        </div>
        <h3>{title}</h3>
      </div>
      <ul className={styles.vaccineList}>
        {items.map((item, i) => (
          <li key={i}><Check size={16} color="#22C55E" strokeWidth={2.5} />{item}</li>
        ))}
      </ul>
    </div>
  )
}

function AppleIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
    </svg>
  )
}

function PlayIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M3.18 23.76c.34.21.76.24 1.13.07l17.12-8.88c.39-.2.63-.6.63-1.03s-.24-.83-.63-1.03L4.31.01c-.37-.17-.79-.14-1.13.07-.34.22-.55.59-.55.99v21.7c0 .4.21.77.55.99z" />
    </svg>
  )
}

/* ---- Helpers ---- */

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
