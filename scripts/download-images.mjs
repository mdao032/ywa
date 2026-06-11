#!/usr/bin/env node
import { createWriteStream, mkdirSync } from 'fs'
import { join } from 'path'
import https from 'https'

const DEST = join(process.cwd(), 'public', 'images')
mkdirSync(DEST, { recursive: true })

const IMAGES = [
  ['logo.png',                'https://ywaconsulting.com/wp-content/uploads/2026/04/android-chrome-512x512-1.png'],
  ['hero-bg.webp',            'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_rfwjjc3hf.webp'],
  ['hero-portrait.webp',      'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_swuqojuwx.webp'],
  ['service-strategy.webp',   'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_sopfhpnyz.webp'],
  ['service-optimization.webp','https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_sesruh67q.webp'],
  ['service-tools.webp',      'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_rtuo4okdy.webp'],
  ['mission-bg.webp',         'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_sltmn34zr.webp'],
  ['team-1.webp',             'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_sjbauy5gr.webp'],
  ['team-2.webp',             'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_svsr5ftsk.webp'],
  ['team-meeting.webp',       'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_sofejpevf.webp'],
  ['career-portrait.webp',    'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_se3kldlkf.webp'],
  ['about-team.webp',         'https://ywaconsulting.com/wp-content/uploads/2026/02/tenweb_media_suu6kzeag.webp'],
  ['og-default.png',          'https://ywaconsulting.com/wp-content/uploads/2026/04/android-chrome-512x512-1.png'],
]

function download(name, url) {
  return new Promise((resolve) => {
    const dest = join(DEST, name)
    const file = createWriteStream(dest)
    https.get(url, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        file.close()
        download(name, res.headers.location).then(resolve)
        return
      }
      res.pipe(file)
      file.on('finish', () => {
        file.close()
        const kb = Math.round(file.bytesWritten / 1024 * 10) / 10
        console.log(`✓ ${name} (${kb} KB)`)
        resolve()
      })
    }).on('error', (err) => {
      console.error(`✗ ${name} — ${err.message}`)
      resolve()
    })
  })
}

console.log('📥 Téléchargement des images depuis ywaconsulting.com...\n')
for (const [name, url] of IMAGES) {
  await download(name, url)
}
console.log('\n✅ Terminé !')

