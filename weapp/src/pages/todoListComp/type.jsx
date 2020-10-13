import { Button, View } from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import {showTypeAct} from '../actions/index'

let open = true;
console.log(open)


class Type extends React.Component {
    constructor() {
        super()
    }

    render() {
      const {show, typeIndex, todoList} = this.props
      console.log(typeof show)
        return (
          <view class="flex-wrp" style="flex-direction:row;" style = "border: solid 2px wheat">
              {todoList[typeIndex].typeName}
           <view class="flex-item flex-item-V demo-text-1" size = "mini">+</view>
           <view class="flex-item flex-item-V demo-text-1" size = "mini" onClick={show.bind(this, typeIndex)}>↓</view>
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
        show: (typeKey) => dispatch(showTypeAct(typeKey))}
  }
 const VisibleType= connect(mapStateToProps, mapDispatchToProps)(Type)
 export default VisibleType