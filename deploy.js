import { execSync } from 'child_process'
import { rmSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const root = path.dirname(fileURLToPath(import.meta.url))
const dist = path.join(root, 'dist')

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: dist })
}

// Get the remote URL from the main repo
const remote = execSync('git remote get-url origin', { cwd: root }).toString().trim()

// Remove any leftover .git from a previous failed deploy
const gitDir = path.join(dist, '.git')
if (existsSync(gitDir)) rmSync(gitDir, { recursive: true, force: true })

// Fresh repo → commit everything in dist → force push to gh-pages
run('git init')
run('git config user.email "harishankar1014@gmail.com"')
run('git config user.name "harishankar1014"')
run('git add -A')
run('git commit -m "Deploy to GitHub Pages"')
run(`git push -f "${remote}" HEAD:gh-pages`)

console.log('\nDeployed successfully to GitHub Pages.')
