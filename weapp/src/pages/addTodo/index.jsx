import Taro from '@tarojs/taro'
import {getCurrentInstance} from '@tarojs/taro'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, Input, Picker } from '@tarojs/components'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import {addTodoAct} from '../actions/index'
import store from '../store/index'
import {formatDateToTime} from '../constants/date'



//这个组件不需要订阅store的任何属性 所以无需state参数
function mapStateToProps (state) {
    return {
      todoList: state.todoList
    }
}

function mapDispatchToProps(dispatch) {
    return {

        addTodo: (endTime, todoName, typeKey) => {return dispatch(addTodoAct(endTime, todoName, typeKey))}}
        
  }



class AddTodo extends React.Component {


        state = {
          endTime: "请选择截至日期",
          todoName: '',
          typeKey: ''
        }

        //获取由上一个页面传来的参数
        componentDidMount () {
          let typeKey = (getCurrentInstance()).router.params.typeKey
          
          this.setState({
            typeKey: typeKey
          })
        }

    handleChange = e => {
        this.setState({
            todoName : e.detail.value
        })
        
    }


    onDateChange = e => {
    this.setState({
      endTime: formatDateToTime(e.detail.value)
    }) 
  }


  

  render() {  
   const addTodo = this.props.addTodo
    return (

  <View className="total">
      <View className="input-wrp">
        <Input className="type-input" placeholder="请输入TODO名称"  onInput={this.handleChange}>
      </Input>
      </View>

      <View className="picker-wrp">
              <Picker mode='date' onChange={this.onDateChange} className="picker">
                <View className='picker-text'>
                  {this.state.endTime.length === 14 ? (this.state.endTime.substr(0, 4) + "-" 
                  + this.state.endTime.substr(4, 2)) + "-" + this.state.endTime.substr(6, 2) : 
                  this.state.endTime}
                </View>
              </Picker>
            </View>
  <View className="btn-wrp"> 
    <Button className="submit-btn" onClick={() => {if(this.state.endTime.length < 14); addTodo(this.state.endTime, this.state.todoName, this.state.typeKey);Taro.switchTab({url: "/pages/index/index"})}}>提交</Button>
    
    </View>

    </View>
    
    )
    
  }
}

{/* <View className="picker-wrp">
              <Picker mode='date' onChange={this.onDateChange} className="picker">
                <View className='picker-text' style="border: 3px solid wheat">
                  选择截至日期: {this.state.endTime}
                </View>
              </Picker>
            </View> */}

            // onClick={() => {console.log('wttttttt'); addTodo(this.state.endTime, this.state.todoName, this.state.typeKey);console.log(this.state.typeKey);Taro.switchTab({url: "/pages/index/index"})}}

 const VisibleAddType = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

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


