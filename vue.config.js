
module.exports = {
    outputDir: 'dist',
    publicPath: process.env.NODE_ENV === 'production'
      ? '/vue_ci_cd/'
      : '/'
  }