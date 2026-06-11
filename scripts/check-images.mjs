#!/usr/bin/env node
/**
 * Script de vérification : liste tous les fichiers .tsx/.ts du projet
 * qui contiennent des balises <img> (HTML natif) au lieu de next/image.
 *
 * Usage : node scripts/check-images.mjs
 */

import { readFileSync, readdirSync, statSync } from 'fs'
import { join, extname } from 'path'

const ROOT = process.cwd()
const EXTS = new Set(['.tsx', '.ts', '.jsx', '.js'])
const SKIP = new Set(['node_modules', '.next', 'scripts', '.git'])

let totalFiles  = 0
let flagged     = 0

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    if (SKIP.has(entry)) continue
    const full = join(dir, entry)
    const stat = statSync(full)
    if (stat.isDirectory()) { walk(full); continue }
    if (!EXTS.has(extname(entry))) continue

    totalFiles++
    const content = readFileSync(full, 'utf8')

    // Recherche <img (sans être précédé de next/image)
    const matches = [...content.matchAll(/<img\s/g)]
    if (matches.length === 0) continue

    flagged++
    console.log(`\n⚠️  ${full.replace(ROOT, '').replace(/\\/g, '/')}`)
    matches.forEach((m) => {
      const lineNo = content.slice(0, m.index).split('\n').length
      const line   = content.split('\n')[lineNo - 1].trim()
      console.log(`   Line ${lineNo}: ${line.slice(0, 100)}`)
    })
  }
}

console.log('🔍 Recherche des balises <img> natives (à remplacer par next/image)...\n')
walk(ROOT)
console.log(`\n──────────────────────────────────────`)
console.log(`Fichiers analysés : ${totalFiles}`)
console.log(`Fichiers avec <img> : ${flagged}`)
if (flagged === 0) {
  console.log('✅ Aucune balise <img> native trouvée. Tout est propre !')
} else {
  console.log('❌ Remplacez les balises <img> listées ci-dessus par <Image> de next/image.')
}

