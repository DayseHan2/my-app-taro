export default {
  pages: [
    'pages/index/index',
    'pages/my/index',
    'pages/category/index',
    'pages/detail/index'
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#dddddd',
    selectedColor: '#3cc51f',
    borderStyle: 'black',
    backgroundColor: '#ffffff',
    list: [
      {
        pagePath: 'pages/index/index',
        iconPath: 'images/icon_1.png',
        selectedIconPath: 'images/icon_1.png',
        text: '首页'
      },
      {
        pagePath: 'pages/category/index',
        iconPath: 'images/icon_2.png',
        selectedIconPath: 'images/icon_2.png',
        text: '分类'
      },
      {
        pagePath: 'pages/my/index',
        iconPath: 'images/icon_3.png',
        selectedIconPath: 'images/icon_3.png',
        text: '我的'
      }
    ]
  }
}
