import Taro from "@tarojs/taro"
import React from 'react'
import {reachAct} from '../actions/index'
import {delTodoAct} from '../actions/index'
import "../iconfont/iconfont.css"
import { connect } from 'react-redux'


class Todo extends React.Component {
    constructor() {
        super()
        

    }

    render() {
        let{todoList, typeKey, todoKey, reach, delTodo} = this.props
        return (
          <view class="flex-wrp" class="todo">
            <view className="todo-text">{(todoList[typeKey].list)[todoKey].todoName}</view>
            <view class="todo-icon iconfont" width="15px" fontSize="90rpx" onClick={() => {Taro.navigateTo({url: '/pages/todoInfo/index?typeKey=' + typeKey + '&todoKey=' + todoKey});}}>&#xe613; </view>
           <view class="todo-icon iconfont" size = "mini" onClick={reach.bind(this, typeKey, todoKey)}>&#xe775;</view>
           <view class="todo-icon iconfont" size = "mini" onClick={delTodo.bind(this, typeKey, todoKey)}>&#xe670;</view>
           
          </view>
       
       )
    }


}


function mapStateToProps (state) {
    return {
        
        todoList: state.todoList
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
        // show: (typeKey) => dispatch(showTodo(typeKey))}
        reach: (typeKey, todoKey) => {console.log(todoKey + "54321"); return dispatch(reachAct(typeKey, todoKey))},
        delTodo: (typeKey, todoKey) => {return dispatch(delTodoAct(typeKey, todoKey))}
  }
}
 const VisibleTodo = connect(mapStateToProps, mapDispatchToProps)(Todo)
 export default VisibleTodo

