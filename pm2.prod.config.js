module.exports = {
  apps: [
    {
      name: 'bitrix24api',
      script: 'dist/index.js',
      restart_delay: 100,
      watch: ['config', 'dist'],
      cwd: "/var/www/bitrix24api/bitrix24api",
      watch_options: {
        followSymlinks: true,
      },
      node_args: [
        '--preserve-symlinks',
        '--experimental-worker',
        '--tls-min-v1.0',
      ],
    },
  ],
};