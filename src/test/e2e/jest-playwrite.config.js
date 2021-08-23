module.exports = {
  server: {
    // How you build your bundle.
    // If you use Rollup, add the plugin rollup-plugin-serve with the configuration serve({ contentBase: 'dist', port: 10002 })
    command: `npm run start`,
    port: 10002,
    // If default or tcp, the test starts right await whereas the dev server is not available on http
    protocol: 'http',
    // In ms
    launchTimeout: 30000,
    debug: true,
    usedPortAction: 'ignore', // your test are executed, we assume that the server is already started
  },
  launch: {
    headless: process.env.HEADLESS !== 'false',
    slowMo: process.env.SLOWMO ? process.env.SLOWMO : 0,
  },
  launchType: 'LAUNCH',
  contextOptions: {
    viewport: {
      width: 800,
      height: 600,
    },
  },
  browsers: ['chromium', 'firefox', 'webkit'],
};
