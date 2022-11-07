module.exports = {
  globDirectory: 'build/',
  globPatterns: ['**/*.{json,svg,png,jpg,gif,js,css,txt,woff2,woff,ttf}'],
  ignoreURLParametersMatching: [/^utm_/, /^fbclid$/],
  swDest: 'build/service-worker.js',
}
