const { defineConfig } = require('@vue/cli-service')
const { VantResolver } = require('unplugin-vue-components/resolvers')
const ComponentsPlugin = require('unplugin-vue-components/webpack')
const DefineOptions = require('unplugin-vue-define-options/webpack')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = defineConfig({
  // fix defineOptions is not defined
  // https://github.com/sxzz/unplugin-vue-macros/issues/23
  parallel: false,

  transpileDependencies: true,
  configureWebpack: {
    plugins:[
      // https://github.com/sxzz/unplugin-vue-macros/blob/main/packages/define-options/README-zh-CN.md
      DefineOptions({
        include: [/\.vue$/, /\.vue\?vue/]
      }),

      ComponentsPlugin({
        exclude: [],//如果node_modules里的也需要自动引入 这里不要排除node_modules
        resolvers:[
          VantResolver(),
          (componentName) => {
            if (componentName.startsWith('Hor')) {
              return { name: componentName, from: '@daysnap/horn-ui' }
            }
          },
        ]
      })
    ],
    resolve: {
      alias: {
        '@': resolve('src'),
        'src': resolve('src'),
      },
    },
  },
})
