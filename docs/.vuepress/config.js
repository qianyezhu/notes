module.exports = {
  title:"浅叶竹",
  base:"/notes-vue-press/",
  dest:"./dist",
  themeConfig: {
   nav: [
    { text: '主页', link: '/' },
    { text: '博文', link: '/pages/notes/'},
    { text: '关于', link: '/pages/about/' },
    { text: 'Github', link: 'https://github.com/qianyezhu' },
   ],
   lastUpdated: 'Last Updated', 
  //  sidebar: 'auto', // 侧边栏配置
  //  sidebarDepth: 2, //嵌套的标题链接
  //  displayAllHeaders: true, //显示所有页面的标题链接
  }
  // plugins: [
  //   ['@vuepress/active-header-links', {
  //     sidebarLinkSelector: '.sidebar-link',
  //     headerAnchorSelector: '.header-anchor'
  //   }],
  //   ["vuepress-plugin-auto-sidebar",{
  //     collapsable: false, //分组是否可以折叠
  //     sidebarDepth: 2,
  //   }]
  // ]
}