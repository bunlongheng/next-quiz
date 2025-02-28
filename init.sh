npx create-next-app@latest next-quiz
cd next-quiz
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install react-confetti
npm run dev
git init
touch .gitignore
echo "node_modules\n.pnp\n.pnp.*\n.yarn/*\n!.yarn/patches\n!.yarn/plugins\n!.yarn/releases\n!.yarn/versions\n.next\nout\nbuild\nnpm-debug.log*\nyarn-debug.log*\nyarn-error.log*\n.pnpm-debug.log*\n.env*\n!.env.example\n.DS_Store\n.vercel\n*.tsbuildinfo\nnext-env.d.ts" > .gitignore
gh auth login
git add .
git commit -m "Initial commit: Setup Next.js quiz app"
gh repo create next-quiz --public --source=. --remote=origin
git branch -M main
git push -u origin main
gh repo view --web