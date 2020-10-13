import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, Text, Swiper } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import reducer from '../reducers/index'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import VisibleTodo from '../todoListComp/todo'
import VisibleType from '../todoListComp/type'
import showTodo from '../actions/index'
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





console.log(typeof store["todoList"])



class TodoList extends Component {
  render () {
    return (
      <View>
        
        
        {
          
           Object.keys(store["todoList"]).map((typeIndex) => {
            if((store["todoList"])[typeIndex].show === true) {
              return (<view key={typeIndex}>
                <VisibleType typeIndex={typeIndex}>
                  </VisibleType> 
                  {  
                      //渲染每个type之下的todo对象
                      Object.keys((store["todoList"])[typeIndex].list).map((todoIndex) => {
                        
                        if(((store["todoList"])[typeIndex].list)[todoIndex].isOk !== true)
                          return <VisibleTodo key={todoIndex} typeIndex={typeIndex} todoIndex={todoIndex}></VisibleTodo>
                      })
                  }
            </view>
            )
            } else {
              return (<view key={typeIndex}>
                  <VisibleType typeIndex={typeIndex}> 
                    </VisibleType> 
              </view>
              )
          }
          })
      }
        

      </View>
    )
  }
}




function mapStateToProps (state) {
    return {
        
        state: state
    }
}

// let mapDispatchToProps = {
//     add: () => {type: "ADD"},
//     minus: () => {type: "MINUS"}
// }
// , mapDispatchToProps
function mapDispatchToProps(dispatch) {
    return {
    //   add: () => dispatch({type: "ADD"}),
    //   minus: () => dispatch({type: "MINUS"})
        show: (typeKey) => dispatch(showTodo(typeKey))}
  }
 const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)

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
class App extends React.Component {
  render() {
    console.log("indexPage rendering...")
    return (
      <View>
        
      <Provider store={store}>
        {/* 跳转到添加分类的页面 */}
        <View>
        <Button onClick={()=>{Taro.navigateTo({url: '/pages/addType/index'})}}>点我进行页面跳转</Button>
        <Button onClick={()=> {console.log(store)}}>点我查看store数据</Button>
        </View>
        <VisibleTodoList></VisibleTodoList>
  </Provider>
  </View>
    )
    
  }
}

export default App

