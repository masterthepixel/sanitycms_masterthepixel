import nextConfig from 'eslint-config-next';

export default [
  ...nextConfig,
  {
    ignores: ['.next/**', 'out/**', '.open-next/**', '.wrangler/**', 'node_modules/**', '.claude/worktrees/**'],
  },
];
