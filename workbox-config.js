module.exports = {
  globDirectory: 'build/',
  globPatterns: [
    '**/*.{html,js,css,png,jpg,svg,eot,ttf,woff}'
  ],
  swDest: 'build/service-worker.js',
  swSrc: 'src/serviceWorker.js',
};