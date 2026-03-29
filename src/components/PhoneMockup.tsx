import { PawPrint, AlertCircle } from 'lucide-react'
import styles from './PhoneMockup.module.css'

export default function PhoneMockup() {
  return (
    <div className={styles.phone}>
      <div className={styles.frame}>
        <div className={styles.notch} />
        <div className={styles.screen}>
          <div className={styles.app}>
            <div className={styles.header}>
              <div className={styles.title}>ペット一覧</div>
            </div>
            <div className={styles.alert}>
              <AlertCircle size={14} color="#DC2626" />
              <span>接種期限を過ぎたワクチンがあります</span>
            </div>
            <PetCard name="ポチ" type="dog" sub="次回: 狂犬病ワクチン (3日後)" status="upcoming" />
            <PetCard name="ミケ" type="cat" sub="次回: 3種混合ワクチン (14日後)" status="upcoming" />
            <PetCard name="チョコ" type="dog" sub="期限切れ: 5種混合 (5日超過)" status="overdue" />
            <div className={styles.fab}>+</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function PetCard({ name, type, sub, status }: { name: string; type: 'dog' | 'cat'; sub: string; status: 'upcoming' | 'overdue' }) {
  return (
    <div className={styles.card}>
      <div className={`${styles.cardIcon} ${type === 'dog' ? styles.cardIconDog : styles.cardIconCat}`}>
        <PawPrint size={18} color={type === 'dog' ? '#F59E0B' : '#8B5CF6'} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.cardName}>{name}</div>
        <div className={styles.cardSub}>{sub}</div>
      </div>
      <div className={`${styles.badge} ${status === 'upcoming' ? styles.badgeUpcoming : styles.badgeOverdue}`}>
        {status === 'upcoming' ? '予定あり' : '期限切れ'}
      </div>
    </div>
  )
}
