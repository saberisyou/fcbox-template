/*
 * @Author: 乐祥孚
 * @Date: 2021-05-12 15:50:58
 * @LastEditors: 乐祥孚
 * @LastEditTime: 2021-05-12 16:06:39
 * @Description: file content
 * @FilePath: \qiankun\frame\vue-prev-frame\vue.config.js
 */
module.exports = {
  devServer: {
    proxy: {
      "/api/": {
        target: `https://fcbox-oplatform-admin-sit1.fcbox.com`,
        changeOrigin: true,
        pathRewrite: { "^/api": "" },
      },
    },
  },
};
