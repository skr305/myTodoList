import Taro , {getCurrentInstance} from '@tarojs/taro'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, Input } from '@tarojs/components'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import store from '../store/index'




class TypeInfo extends React.Component {




  

  render() {  
    console.log(Taro.getCurrentInstance())
    let typeKey = (Taro.getCurrentInstance()["router"]["params"]).typeKey
    let typeName = (store["todoList"][typeKey]).typeName;
    let builtTime = typeKey

    return (
      <view className="total">
      <view className="type-name">{typeName}</view>
    <view className="built-time">创建时间:{builtTime}</view>
      </view>
    
    )
    
  }
}


class App extends React.Component {
  render() {
    return (
      <TypeInfo></TypeInfo>
    )
  }
}

 export default App

