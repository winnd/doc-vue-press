module.exports = {
  title           : 'Hello VuePress',
  description     : 'Just playing around',
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '相对路径'
      }
    }
  },
  "base"          : "/",
  themeConfig     : {
    // nav         : [
    //   {text: "主页", link: "/"},
    //   {
    //     text: "博文", items: [{text: "Android", link: "/guide/"}]
    //   }
    // ],
    sidebar     : [
      "/",
      "/guide/"
    ],
    sidebarDepth: 2
  },
  "markdown"  : {
    toc:{
      includeLevel: [1, 2]
    }
  }
};
