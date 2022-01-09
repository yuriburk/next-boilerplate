// eslint-disable-next-line @typescript-eslint/no-var-requires
const withPWA = require('next-pwa')
const withAntdLess = require('next-plugin-antd-less')

const { theme } = require('./src/styles/theme.js')
const isProd = process.env.NODE_ENV === 'production'

module.exports = {
  reactStrictMode: true,
  ...withPWA({
    pwa: {
      dest: 'public',
      disable: !isProd
    }
  }),
  ...withAntdLess({
    modifyVars: {
      '@primary-color': theme.colors.primaryColor
    },
    webpack(config) {
      return config
    }
  })
}
