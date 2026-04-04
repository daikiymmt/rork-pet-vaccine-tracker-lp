import sharp from 'sharp'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outputPath = join(__dirname, '..', 'public', 'og-image.png')

const WIDTH = 1200
const HEIGHT = 630

const svg = `
<svg width="${WIDTH}" height="${HEIGHT}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#FFFFFF"/>
      <stop offset="100%" stop-color="#E0F5F4"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0EA5A0"/>
      <stop offset="100%" stop-color="#087E7B"/>
    </linearGradient>
    <linearGradient id="badge-dog" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#FEF3C7"/>
      <stop offset="100%" stop-color="#FDE68A"/>
    </linearGradient>
    <linearGradient id="badge-cat" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#EDE9FE"/>
      <stop offset="100%" stop-color="#DDD6FE"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${WIDTH}" height="${HEIGHT}" fill="url(#bg)"/>

  <!-- Decorative shapes -->
  <circle cx="1050" cy="80" r="200" fill="#0EA5A0" opacity="0.06"/>
  <circle cx="150" cy="550" r="180" fill="#8B5CF6" opacity="0.05"/>
  <circle cx="900" cy="500" r="120" fill="#F59E0B" opacity="0.05"/>

  <!-- Left content area -->

  <!-- App icon -->
  <rect x="80" y="140" width="64" height="64" rx="16" fill="url(#accent)"/>
  <circle cx="105" cy="162" r="5" fill="none" stroke="white" stroke-width="2"/>
  <circle cx="125" cy="158" r="5" fill="none" stroke="white" stroke-width="2"/>
  <circle cx="145" cy="162" r="5" fill="none" stroke="white" stroke-width="2"/>
  <circle cx="120" cy="180" r="7" fill="none" stroke="white" stroke-width="2"/>

  <!-- App name -->
  <text x="156" y="183" font-family="system-ui, 'Segoe UI', sans-serif" font-size="24" font-weight="700" fill="#1C1E21">ペット予防接種メモ</text>

  <!-- Main heading -->
  <text x="80" y="280" font-family="system-ui, 'Segoe UI', sans-serif" font-size="52" font-weight="800" fill="#1C1E21">大切なペットの</text>
  <text x="80" y="345" font-family="system-ui, 'Segoe UI', sans-serif" font-size="52" font-weight="800" fill="#0EA5A0">予防接種</text>
  <text x="340" y="345" font-family="system-ui, 'Segoe UI', sans-serif" font-size="52" font-weight="800" fill="#1C1E21">を</text>
  <text x="80" y="410" font-family="system-ui, 'Segoe UI', sans-serif" font-size="52" font-weight="800" fill="#1C1E21">もう忘れない</text>

  <!-- Subtitle -->
  <text x="80" y="465" font-family="system-ui, 'Segoe UI', sans-serif" font-size="20" fill="#6B7280">犬と猫の予防接種記録をかんたん管理</text>

  <!-- Tags -->
  <rect x="80" y="500" width="80" height="32" rx="16" fill="#E0F5F4"/>
  <text x="100" y="521" font-family="system-ui, 'Segoe UI', sans-serif" font-size="14" font-weight="700" fill="#087E7B">無料</text>

  <rect x="172" y="500" width="100" height="32" rx="16" fill="#E0F5F4"/>
  <text x="189" y="521" font-family="system-ui, 'Segoe UI', sans-serif" font-size="14" font-weight="700" fill="#087E7B">広告なし</text>

  <rect x="284" y="500" width="148" height="32" rx="16" fill="#E0F5F4"/>
  <text x="300" y="521" font-family="system-ui, 'Segoe UI', sans-serif" font-size="14" font-weight="700" fill="#087E7B">オフライン対応</text>

  <!-- Right side: Phone mockup -->
  <!-- Phone frame -->
  <rect x="760" y="60" width="240" height="480" rx="32" fill="#1C1E21"/>
  <rect x="772" y="72" width="216" height="456" rx="22" fill="#F5F6F8"/>

  <!-- Phone notch -->
  <rect x="840" y="60" width="100" height="24" rx="0 0 12 12" fill="#1C1E21"/>
  <rect x="840" y="72" width="100" height="12" rx="0 0 12 12" fill="#1C1E21"/>

  <!-- Screen content -->
  <!-- Title -->
  <text x="792" y="116" font-family="system-ui, 'Segoe UI', sans-serif" font-size="15" font-weight="800" fill="#1C1E21">ペット一覧</text>

  <!-- Alert bar -->
  <rect x="784" y="126" width="192" height="28" rx="6" fill="#FEE2E2" stroke="#FECACA" stroke-width="1"/>
  <circle cx="796" cy="140" r="5" fill="none" stroke="#DC2626" stroke-width="1.5"/>
  <line x1="796" y1="137" x2="796" y2="140" stroke="#DC2626" stroke-width="1.5"/>
  <circle cx="796" cy="143" r="0.8" fill="#DC2626"/>
  <text x="806" y="144" font-family="system-ui, 'Segoe UI', sans-serif" font-size="8" fill="#DC2626">接種期限を過ぎたワクチンがあります</text>

  <!-- Pet Card 1 -->
  <rect x="784" y="164" width="192" height="56" rx="10" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="796" y="176" width="32" height="32" rx="8" fill="#FEF3C7"/>
  <circle cx="808" cy="186" r="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <circle cx="815" cy="189" r="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <circle cx="801" cy="189" r="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <circle cx="808" cy="197" r="4" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="836" y="190" font-family="system-ui, 'Segoe UI', sans-serif" font-size="11" font-weight="700" fill="#1C1E21">ポチ</text>
  <text x="836" y="204" font-family="system-ui, 'Segoe UI', sans-serif" font-size="8" fill="#6B7280">次回: 狂犬病ワクチン (3日後)</text>
  <rect x="924" y="186" width="40" height="16" rx="8" fill="#DCFCE7"/>
  <text x="929" y="197" font-family="system-ui, 'Segoe UI', sans-serif" font-size="7" font-weight="700" fill="#16A34A">予定あり</text>

  <!-- Pet Card 2 -->
  <rect x="784" y="228" width="192" height="56" rx="10" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="796" y="240" width="32" height="32" rx="8" fill="#EDE9FE"/>
  <circle cx="808" cy="250" r="3" fill="none" stroke="#8B5CF6" stroke-width="1.5"/>
  <circle cx="815" cy="253" r="3" fill="none" stroke="#8B5CF6" stroke-width="1.5"/>
  <circle cx="801" cy="253" r="3" fill="none" stroke="#8B5CF6" stroke-width="1.5"/>
  <circle cx="808" cy="261" r="4" fill="none" stroke="#8B5CF6" stroke-width="1.5"/>
  <text x="836" y="254" font-family="system-ui, 'Segoe UI', sans-serif" font-size="11" font-weight="700" fill="#1C1E21">ミケ</text>
  <text x="836" y="268" font-family="system-ui, 'Segoe UI', sans-serif" font-size="8" fill="#6B7280">次回: 3種混合ワクチン (14日後)</text>
  <rect x="924" y="250" width="40" height="16" rx="8" fill="#DCFCE7"/>
  <text x="929" y="261" font-family="system-ui, 'Segoe UI', sans-serif" font-size="7" font-weight="700" fill="#16A34A">予定あり</text>

  <!-- Pet Card 3 -->
  <rect x="784" y="292" width="192" height="56" rx="10" fill="white" stroke="#E5E7EB" stroke-width="1"/>
  <rect x="796" y="304" width="32" height="32" rx="8" fill="#FEF3C7"/>
  <circle cx="808" cy="314" r="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <circle cx="815" cy="317" r="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <circle cx="801" cy="317" r="3" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <circle cx="808" cy="325" r="4" fill="none" stroke="#F59E0B" stroke-width="1.5"/>
  <text x="836" y="318" font-family="system-ui, 'Segoe UI', sans-serif" font-size="11" font-weight="700" fill="#1C1E21">チョコ</text>
  <text x="836" y="332" font-family="system-ui, 'Segoe UI', sans-serif" font-size="8" fill="#6B7280">期限切れ: 5種混合 (5日超過)</text>
  <rect x="924" y="314" width="40" height="16" rx="8" fill="#FEE2E2"/>
  <text x="929" y="325" font-family="system-ui, 'Segoe UI', sans-serif" font-size="7" font-weight="700" fill="#DC2626">期限切れ</text>

  <!-- FAB -->
  <rect x="936" y="480" width="40" height="40" rx="12" fill="#0EA5A0"/>
  <line x1="956" y1="492" x2="956" y2="508" stroke="white" stroke-width="2.5" stroke-linecap="round"/>
  <line x1="948" y1="500" x2="964" y2="500" stroke="white" stroke-width="2.5" stroke-linecap="round"/>

  <!-- Floating notification card -->
  <rect x="680" y="370" width="200" height="44" rx="10" fill="white" filter="url(#shadow)"/>
  <circle cx="704" cy="392" r="10" fill="#DCFCE7"/>
  <polyline points="699,392 702,395 709,388" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <text x="720" y="396" font-family="system-ui, 'Segoe UI', sans-serif" font-size="11" font-weight="600" fill="#1C1E21">狂犬病ワクチン接種済み</text>

  <!-- Bottom accent line -->
  <rect x="0" y="620" width="${WIDTH}" height="10" fill="url(#accent)"/>
</svg>
`

await sharp(Buffer.from(svg))
  .png()
  .toFile(outputPath)

console.log(`OG image generated: ${outputPath}`)
