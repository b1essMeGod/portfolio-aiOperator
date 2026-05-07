import { copyFile, access } from 'node:fs/promises'
import { constants } from 'node:fs'
import { join } from 'node:path'

const distDir = join(process.cwd(), 'dist')
const indexFile = join(distDir, 'index.html')
const fallbackFile = join(distDir, '404.html')

async function main() {
  await access(indexFile, constants.F_OK)
  await copyFile(indexFile, fallbackFile)
  console.log('Created dist/404.html for GitHub Pages SPA fallback.')
}

main().catch((error) => {
  console.error('Failed to prepare GitHub Pages fallback:', error)
  process.exit(1)
})
