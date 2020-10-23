import Taro  from '@tarojs/taro'
import React from 'react'
import './index.less'
import store from '../store/index'
import {toFormatDate} from '../constants/date'



class TodoInfo extends React.Component {
  

  render() {  

   //获取上一个页面的传来的对应todo的信息
    let params = ((Taro.getCurrentInstance())["router"]["params"]);
    let {typeKey, todoKey} = params

    //获取上一个页面的传来的对应todo的信息
    // let typeKey = ((Taro.getCurrentInstance())["router"]["params"]).typeKey
    // let todoKey = ((Taro.getCurrentInstance())["router"]["params"]).todoKey

    //调试信息
    console.log(Taro.getCurrentInstance())
    console.log(typeKey)
    console.log(todoKey)



    //获取对应todo对象内需要被描述的信息
    let {typeName, todoName, endTime} = (store["todoList"][typeKey])["list"][todoKey];
    //todoKey是这个todo被创建的时间 endTime是截止日期 用日期处理函数把它们转化为格式化的日期
    let formatBuiltTime = toFormatDate(todoKey.substr(0,8))
    let formatEndTime = toFormatDate(endTime.substr(0,8))



    return (
      <view className="total">
        <view className="todo-name">{todoName}</view>
        <view className="type-name">所属分类:{typeName}</view>
        <view className="built-time">创建时间:{formatBuiltTime}</view>
        <view className="end-time">截至日期:{formatEndTime}</view>
      </view>
    
    )
    
  }
}


class App extends React.Component {
  render() {
    return (
      <TodoInfo></TodoInfo>
    )
  }
}

 export default App

