export default {
  pages: [
    'pages/index/index',
    'pages/addTodo/index',
    'pages/addType/index',
    'pages/history/index',
    'pages/typeInfo/index',
    'pages/todoInfo/index'
    
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    "color": "#666667",
    "selectedColor": "#f10b2e",
    "list": [
      {
        "pagePath": "pages/index/index",
        "text": "待办",
      },
      {
        "pagePath": "pages/history/index",
        "text": "历史",
      }
    ]
  }
}
