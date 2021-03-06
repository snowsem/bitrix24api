module.exports = {
  apps: [
    {
      name: 'bitrix24api',
      script: 'dist/index.js',
      restart_delay: 500,
      watch: ['config', 'dist'],
      watch_options: {
        followSymlinks: false,
      },
      node_args: [
        '--preserve-symlinks',
        '--experimental-worker',
        '--tls-min-v1.0',
        '--inspect=0.0.0.0:7007',
      ],
    },
  ],
};