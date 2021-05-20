module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        common: '@/components/common',
        content: '@/components/content',
        assets: '@/assets',
        router: '@/router',
        network: '@/network',
        store: '@/store',
        views: '@/views'
      }
    }
  }
}
