import { Link } from 'react-router-dom'
import { Shield, Info, ArrowLeft, Check } from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import styles from './Privacy.module.css'

const tocItems = [
  { id: 'section-1', label: '基本方針' },
  { id: 'section-2', label: '収集する情報' },
  { id: 'section-3', label: '情報の保存場所' },
  { id: 'section-4', label: '第三者への情報提供' },
  { id: 'section-5', label: '通知機能について' },
  { id: 'section-6', label: 'お子様のプライバシー' },
  { id: 'section-7', label: 'データの削除' },
  { id: 'section-8', label: 'プライバシーポリシーの変更' },
  { id: 'section-9', label: 'お問い合わせ' },
]

export default function Privacy() {
  const ref = useScrollAnimation<HTMLDivElement>()

  return (
    <div ref={ref}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.icon}><Shield size={32} /></div>
            <h1>プライバシーポリシー</h1>
            <p className={styles.meta}>最終更新日: 2026年3月29日</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          <div className={styles.body}>
            <div className={styles.intro}>
              <p>「ペット予防接種メモ」（以下「本アプリ」）は、ユーザーのプライバシーを最優先に設計されています。本プライバシーポリシーでは、本アプリにおけるデータの取り扱いについてご説明します。</p>
            </div>

            <div className={styles.toc}>
              <h2>目次</h2>
              <ol>
                {tocItems.map((item, i) => (
                  <li key={item.id}>
                    <a href={`#${item.id}`} onClick={smoothScroll}>
                      <span className={styles.tocNum}>{i + 1}.</span> {item.label}
                    </a>
                  </li>
                ))}
              </ol>
            </div>

            <article>
              <Section id="section-1" num={1} title="基本方針">
                <div className={styles.highlight}>
                  <Shield size={20} color="var(--primary)" />
                  <p>本アプリは、ユーザーの個人情報を<strong>一切収集・送信しません</strong>。すべてのデータはお使いの端末内にのみ保存され、外部サーバーに送信されることはありません。</p>
                </div>
                <p>本アプリは以下の原則に基づいて設計されています：</p>
                <BulletList items={[
                  'アカウント登録は不要です',
                  'インターネット接続は不要です',
                  '広告は表示されません',
                  'トラッキングツールは使用していません',
                  'アナリティクスツールは使用していません',
                ]} />
              </Section>

              <Section id="section-2" num={2} title="収集する情報">
                <p>本アプリでは、以下の情報をユーザーが入力し、端末内に保存します：</p>
                <h3>ペットに関する情報</h3>
                <BulletList items={['ペットの名前', 'ペットの種類（犬・猫）', 'ペットの誕生日', 'メモ（任意）']} />
                <h3>予防接種に関する情報</h3>
                <BulletList items={['ワクチンの種類', '接種日', '次回接種予定日', '動物病院名', 'メモ（任意）']} />
                <h3>設定情報</h3>
                <BulletList items={['通知のオン/オフ設定', '通知日数の設定（接種予定日の何日前に通知するか）', 'チュートリアルの表示状態']} />
                <div className={styles.note}>
                  <Info size={18} color="var(--today)" />
                  <p>これらの情報はすべてユーザーが自発的に入力するものであり、本アプリが自動的に収集するものではありません。</p>
                </div>
              </Section>

              <Section id="section-3" num={3} title="情報の保存場所">
                <p>本アプリで入力されたすべての情報は、<strong>お使いの端末内のローカルストレージ（AsyncStorage）</strong>にのみ保存されます。</p>
                <BulletList items={[
                  '外部サーバーへのデータ送信は行いません',
                  'クラウドサービスとのデータ同期は行いません',
                  '他のアプリケーションとデータ共有は行いません',
                ]} />
                <p>端末のバックアップ機能（iCloudバックアップ、Googleバックアップなど）をご利用の場合、バックアップデータに本アプリのデータが含まれる可能性があります。これらのバックアップサービスのプライバシーポリシーについては、各サービス提供元にご確認ください。</p>
              </Section>

              <Section id="section-4" num={4} title="第三者への情報提供">
                <p>本アプリは、ユーザーのデータを<strong>第三者に提供、共有、販売することはありません</strong>。</p>
                <p>また、本アプリは以下のサービスを<strong>使用していません</strong>：</p>
                <BulletList items={[
                  '広告配信サービス',
                  'アクセス解析ツール（Google Analyticsなど）',
                  'ユーザートラッキングツール',
                  'ソーシャルメディア連携機能',
                  '外部APIとの通信',
                ]} />
              </Section>

              <Section id="section-5" num={5} title="通知機能について">
                <p>本アプリは、予防接種の予定日をお知らせするために<strong>ローカルプッシュ通知</strong>を使用します。</p>
                <BulletList items={[
                  '通知はすべて端末内で生成・管理されます',
                  '外部の通知サービス（Firebase Cloud Messagingなど）は使用していません',
                  '通知の送信にインターネット接続は不要です',
                  '通知機能は設定画面からいつでもオン/オフを切り替えられます',
                ]} />
                <p>通知機能の利用には、端末のOS設定で本アプリへの通知許可が必要です。許可しない場合も、本アプリのその他の機能はすべてご利用いただけます。</p>
              </Section>

              <Section id="section-6" num={6} title="お子様のプライバシー">
                <p>本アプリは、特定の年齢層を対象としたものではありませんが、個人情報の収集・送信を一切行わないため、お子様が使用されても個人情報に関するリスクはありません。</p>
              </Section>

              <Section id="section-7" num={7} title="データの削除">
                <p>本アプリ内のデータは、以下の方法で削除できます：</p>
                <BulletList items={[
                  '個別のペットの削除：ペット詳細画面から該当のペットとその接種記録をすべて削除',
                  '個別の接種記録の削除：接種記録の詳細画面から該当の記録を削除',
                  'アプリの削除：端末から本アプリをアンインストールすることで、すべてのデータが完全に削除されます',
                ]} />
                <p>データは端末内にのみ保存されているため、アプリの削除をもってすべてのデータが端末から完全に消去されます。外部サーバーにデータが残ることはありません。</p>
              </Section>

              <Section id="section-8" num={8} title="プライバシーポリシーの変更">
                <p>本プライバシーポリシーは、必要に応じて更新されることがあります。重要な変更がある場合は、本ページにてお知らせします。</p>
                <p>本プライバシーポリシーの変更は、本ページに掲載された時点で効力を生じるものとします。定期的にご確認いただくことをお勧めします。</p>
              </Section>

              <Section id="section-9" num={9} title="お問い合わせ">
                <p>本プライバシーポリシーに関するご質問やお問い合わせは、以下の連絡先までお願いいたします。</p>
                <div className={styles.contact}>
                  <p><strong>ペット予防接種メモ サポート</strong></p>
                  <p>メールアドレス: <a href="mailto:support@example.com">support@example.com</a></p>
                </div>
              </Section>
            </article>

            <div className={styles.back}>
              <Link to="/" className="btn btn-outline">
                <ArrowLeft size={18} />
                トップページに戻る
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

/* ---- Sub-components ---- */

function Section({ id, num, title, children }: { id: string; num: number; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className={`${styles.section} fade-in`}>
      <h2><span className={styles.sectionNum}>{num}.</span> {title}</h2>
      {children}
    </section>
  )
}

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className={styles.bulletList}>
      {items.map((item, i) => (
        <li key={i}><Check size={14} color="var(--primary)" strokeWidth={2.5} />{item}</li>
      ))}
    </ul>
  )
}

function smoothScroll(e: React.MouseEvent<HTMLAnchorElement>) {
  const href = e.currentTarget.getAttribute('href')
  if (!href?.startsWith('#')) return
  e.preventDefault()
  const el = document.querySelector(href)
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 100
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
