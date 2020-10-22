import Taro from '@tarojs/taro'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, Input } from '@tarojs/components'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import {addTypeAct, showTypeAct} from '../actions/index'
import store from '../store/index'




//这个组件不需要订阅store的任何属性 所以无需state参数
function mapStateToProps (state) {
    return {
      todoList: state.todoList
    }
}


function mapDispatchToProps(dispatch) {
    return {
        showType: () => {return dispatch(showTypeAct("normal"))},
        addType: (typeName) => {return dispatch(addTypeAct(typeName))}}
        
  }


class AddType extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      typeName : ''
    }
    this.getTypeName = this.getTypeName.bind(this)
  }

  
  handleChange(e) {
    this.setState({
        typeName : e.detail.value
    })
    console.log("changeText")
    
}

  getTypeName() {
    
    return this.state.typeName
  }

  render() {  
   const addType = this.props.addType
    return (
      <View className="total">
      <View className="input-wrp">
        <Input className="type-input" placeholder="请输入分类名称"  onInput={this.handleChange.bind(this)}>

      </Input>
      </View>
  <View className="btn-wrp"> 
    <Button className="submit-btn" onClick={() => {addType(this.getTypeName());Taro.switchTab({url: "/pages/index/index"})}}>提交</Button>
    
    </View>
    </View>
    
    )
    
  }
}

 const VisibleAddType = connect(mapStateToProps, mapDispatchToProps)(AddType)

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <VisibleAddType></VisibleAddType>
      </Provider>
    )
  }
}

 export default App

