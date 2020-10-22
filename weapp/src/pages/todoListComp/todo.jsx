import { Button } from '@tarojs/components'
import React from 'react'
import {reachAct} from '../actions/index'
import {delTodoAct} from '../actions/index'

// let open = true;
// console.log(open)
// let clickLow = () => {
//   open = !open
//   console.log(open)
// }

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
           <view class="todo-icon" size = "mini" onClick={reach.bind(this, typeKey, todoKey)}>√</view>
           <view class="todo-icon" size = "mini" onClick={delTodo.bind(this, typeKey, todoKey)}>x</view>
           
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

