import Taro from '@tarojs/taro'
import React from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, Text, Swiper, Input } from '@tarojs/components'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import {addTypeAct, showTypeAct} from '../actions/index'
import store from '../store/index'
// @connect(({ counter }) => ({
//   counter
// }), (dispatch) => ({
//   add () {
//     dispatch(add())
//   },
//   dec () {
//     dispatch(minus())
//   },
//   asyncAdd () {
//     dispatch(asyncAdd())
//   }
// }))
// let initialStore = {
//   todoList : {
//     normal: {
//         name: "normal",
//         show: false,
//         list: {
//             //属于normal类的eat任务
//             eat: {
//                 typeKey: "normal",
//                 name: "eat",
//                 load: "233",
//                 isOk: false,
//                 typeName: "normal"
//             },
//             walk: {
//                 typeKey: "normal",
//                 name: "walk",
//                 load: "233",
//                 isOk: false,
//                 typeName: "normal"
//             }
//         }
//     },
//     work: {
//         name: "work",
//         show: false,
//         list: {
//             //属于normal类的eat任务
//             code: {
//                 typeKey: "work",
//                 name: "code",
//                 load: "233",
//                 isOk: false,
//                 typeName: "work"
//             }
//         }
//     }
// }
// }


// let store = createStore(reducer, initialStore,applyMiddleware(thunk) )

// store["todoList"] = initialStore["todoList"] 



// console.log(typeof store["todoList"])



// class TodoList extends Component {
//   render () {
//     return (
//       <View> 
//           <Button></Button>
//       </View>
//     )
//   }
// }



//这个组件不需要订阅store的任何属性 所以无需state参数
function mapStateToProps (state) {
    return {
      todoList: state.todoList
    }
}

// // let mapDispatchToProps = {
// //     add: () => {type: "ADD"},
// //     minus: () => {type: "MINUS"}
// // }
// // , mapDispatchToProps
function mapDispatchToProps(dispatch) {
    return {
        showType: () => {return dispatch(showTypeAct("normal"))},
        addType: (typeName) => {console.log("putOUT");return dispatch(addTypeAct(typeName))}}
        
  }


// class Index extends Component {
//   componentWillReceiveProps (nextProps) {
//     console.log(this.props, nextProps)
//   }

//   componentWillUnmount () { }

//   componentDidShow () { }

//   componentDidHide () { }

//   render () {
//     return (
//       <View className='index'>
//         <Button className='add_btn' onClick={this.props.add}>++</Button>
//         <Button className='dec_btn' onClick={this.props.dec}>--</Button>
//         <Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>
//         <View><Text>{this.props.counter.num}</Text></View>
//         <View><Text>Hello, World</Text></View>
//       </View>
//     )
//   }
// }
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
   const showType = this.props.showType
    return (
      <View>
      <View>
        <Input placeholder="请输入任务分类"  onInput={this.handleChange.bind(this)}>

      </Input>
      </View>
  <View>
    <Button onClick={() => {console.log('wttttttt'); addType(this.getTypeName());console.log(store);Taro.switchTab({url: "/pages/index/index"})}}>提交</Button>
    
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


