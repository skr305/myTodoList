import { Button } from '@tarojs/components'
import React from 'react'
import {reachAct} from '../actions/index'

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
        let{todoList, typeIndex, todoIndex, reach} = this.props
        console.log(todoIndex+"5555555513")
        return (
          <view class="flex-wrp" style="flex-direction:row;" style = "border: solid 2px wheat">
          {(todoList[typeIndex].list)[todoIndex].todoName}
           <Button class="flex-item flex-item-V demo-text-1" size = "mini" onClick={reach.bind(this, typeIndex, todoIndex)}>√</Button>
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
        reach: (typeKey, todoKey) => {console.log(todoKey + "54321"); return dispatch(reachAct(typeKey, todoKey))}
  }
}
 const VisibleTodo = connect(mapStateToProps, mapDispatchToProps)(Todo)
 export default VisibleTodo

