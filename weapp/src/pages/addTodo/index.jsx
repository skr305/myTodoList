import Taro from '@tarojs/taro'
import {getCurrentInstance} from '@tarojs/taro'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, Text, Swiper, Input, Picker } from '@tarojs/components'
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

        addTodo: (endTime, todoName, typeKey) => {console.log("putOUT");return dispatch(addTodoAct(endTime, todoName, typeKey))}}
        
  }



class AddTodo extends React.Component {

  // state = {
  //   selector: ['美国', '中国', '巴西', '日本'],
  //   selectorChecked: '美国',
  //   timeSel: '12:01',
  //   dateSel: '2018-04-22'
  // }

  // onChange = e => {
  //   this.setState({
  //     selectorChecked: this.state.selector[e.detail.value]
  //   })
  // }

  // onTimeChange = e => {
  //   this.setState({
  //     timeSel: e.detail.value
  //   })
  // }
 

  // render () {
  //   return (
  //     <View className='container'>
  //       <View className='page-body'>
  //         <View className='page-section'>
  //           <Text>地区选择器</Text>
  //           <View>
  //             <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
  //               <View className='picker'>
  //                 当前选择：{this.state.selectorChecked}
  //               </View>
  //             </Picker>
  //           </View>
  //         </View>
  //         <View className='page-section'>
  //           <Text>时间选择器</Text>
  //           <View>
  //             <Picker mode='time' onChange={this.onTimeChange}>
  //               <View className='picker'>
  //                 当前选择：{this.state.timeSel}
  //               </View>
  //             </Picker>
  //           </View>
  //         </View>
  //         <View className='page-section'>
  //           <Text>日期选择器</Text>
  //           <View>
  //             <Picker mode='date' onChange={this.onDateChange}>
  //               <View className='picker'>
  //                 当前选择：{this.state.dateSel}
  //               </View>
  //             </Picker>
  //           </View>
  //         </View>
  //       </View>
  //     </View>
  //   )
  //






//   constructor(props) {
//     super(props)
//     this.state = {
//       typeName : ''
//     }
//     this.getTypeName = this.getTypeName.bind(this)
//   }


        state = {
          endTime: "20201111080000",
          todoName: '',
          typeKey: ''
        }

        //获取由上一个页面传来的参数
        componentDidMount () {
          console.log(getCurrentInstance())
          let typeKey = (getCurrentInstance()).router.params.typeKey
          
          this.setState({
            typeKey: typeKey
          })
        }

    handleChange = e => {
        this.setState({
            todoName : e.detail.value
        })
        console.log("changeText")
        
    }


    onDateChange = e => {
    this.setState({
      endTime: formatDateToTime(e.detail.value)
    }) 
    console.log(this.state.endTime);
  }


//   getTypeName() {
    
//     return this.state.typeName
//   }
  

  render() {  
   const addTodo = this.props.addTodo
    return (
      <View>
        <Input placeholder="请输入任务名称"  onInput={this.handleChange}>         
      </Input>
      <View >
            <View>
              <Picker mode='date' onChange={this.onDateChange}>
                <View className='picker' style="border: 3px solid wheat">
                  选择截至日期: {this.state.endTime}
                </View>
              </Picker>
            </View>
      </View>
  <View>
    <Button onClick={() => {console.log('wttttttt'); addTodo(this.state.endTime, this.state.todoName, this.state.typeKey);console.log(this.state.typeKey);Taro.switchTab({url: "/pages/index/index"})}}>提交</Button>
    
    </View>
    </View>
    
    )
    
  }
}

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


