import { Link } from 'react-router-dom'
import {
  Briefcase, ExternalLink,
  PawPrint, Bell, Shield, Smartphone,
  FileText, Calendar,
} from 'lucide-react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import { usePageMeta } from '../hooks/usePageMeta'
import styles from './Portfolio.module.css'

const projects = [
  {
    id: 'pet-vaccine-tracker',
    name: 'ペット予防接種メモ',
    tagline: '犬と猫の予防接種スケジュール管理アプリ',
    description:
      '犬と猫の予防接種記録をかんたんに管理できるモバイルアプリ。接種予定日が近づくとプッシュ通知でお知らせ。すべてのデータは端末内に保存され、インターネット接続やアカウント登録は不要。無料・広告なしで利用可能。',
    image: '/og-image.png',
    color: '#0EA5A0',
    siteUrl: 'https://pet-vaccine-tracker.com',
    githubUrl: 'https://github.com/daikiymmt/rork-pet-vaccine-tracker',
    techStack: [
      'React Native',
      'Expo Router',
      'TypeScript',
      'Zustand',
      'React Query',
      'Expo Notifications',
    ],
    features: [
      { icon: PawPrint, label: '犬・猫のペット登録・管理' },
      { icon: FileText, label: '予防接種記録の登録・編集' },
      { icon: Bell, label: '接種予定日のプッシュ通知' },
      { icon: Shield, label: '完全オフライン・プライバシー重視' },
      { icon: Calendar, label: 'ステータス管理（予定・期限切れ等）' },
      { icon: Smartphone, label: 'iOS / Android 対応' },
    ],
    highlights: [
      { label: '価格', value: '無料' },
      { label: '広告', value: 'なし' },
      { label: '対応', value: 'iOS / Android' },
    ],
  },
]

export default function Portfolio() {
  const ref = useScrollAnimation<HTMLDivElement>()
  usePageMeta(
    'ポートフォリオ - 個人開発プロジェクト',
    '個人開発したアプリ・サービスのポートフォリオ。ペット予防接種メモなど、モバイルアプリの開発実績を紹介。',
  )

  return (
    <div ref={ref}>
      <section className={styles.hero}>
        <div className="container">
          <div className={styles.heroInner}>
            <div className={styles.icon}>
              <Briefcase size={32} />
            </div>
            <h1>ポートフォリオ</h1>
            <p className={styles.subtitle}>個人開発したアプリ・サービス</p>
          </div>
        </div>
      </section>

      <section className={styles.content}>
        <div className="container">
          {projects.map((project) => (
            <article key={project.id} className={`${styles.project} fade-in`}>
              {/* Project header */}
              <div className={styles.projectHeader}>
                <div className={styles.projectImage}>
                  <img src={project.image} alt={project.name} />
                </div>
              </div>

              {/* Project body */}
              <div className={styles.projectBody}>
                <div className={styles.projectMeta}>
                  <h2>{project.name}</h2>
                  <p className={styles.tagline}>{project.tagline}</p>
                </div>

                <p className={styles.description}>{project.description}</p>

                {/* Highlights */}
                <div className={styles.highlights}>
                  {project.highlights.map((h, i) => (
                    <div key={i} className={styles.highlightItem}>
                      <span className={styles.highlightValue}>{h.value}</span>
                      <span className={styles.highlightLabel}>{h.label}</span>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className={styles.section}>
                  <h3>主な機能</h3>
                  <div className={styles.featureGrid}>
                    {project.features.map((f, i) => (
                      <div key={i} className={styles.featureItem}>
                        <f.icon size={18} color={project.color} />
                        <span>{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className={styles.section}>
                  <h3>技術スタック</h3>
                  <div className={styles.techTags}>
                    {project.techStack.map((tech, i) => (
                      <span key={i} className={styles.techTag}>{tech}</span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                <div className={styles.projectLinks}>
                  <a
                    href={project.siteUrl}
                    className="btn btn-primary btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink size={18} />
                    サイトを見る
                  </a>
                  <a
                    href={project.githubUrl}
                    className="btn btn-outline btn-lg"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <GithubIcon />
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}

          <div className={styles.back}>
            <Link to="/" className="btn btn-outline">
              トップページに戻る
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

function GithubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
    </svg>
  )
}
