import Taro, { showModal } from '@tarojs/taro'
import { Button, View} from '@tarojs/components'
import React from 'react'
import { connect } from 'react-redux'
import {showTypeAct, delTypeAct} from '../actions/index'

let open = true;
console.log(open)


class Type extends React.Component {
    constructor() {
        super()
        this.state = {
            isShowingDel: false
        }
    }

    showDel() {
        this.setState({
            isShowingDel: !this.state.isShowingDel
        })
    }
    



    render() {
      const {show, typeKey, todoList, delType} = this.props
      console.log(typeof show)
      console.log(typeof todoList[typeKey])
        return (
          <view class="flex-wrp" >
              <view class="flex-top">{todoList[typeKey].typeName}</view>
           <view class="flex-item flex-item-V demo-text-1" width="15px"  onClick={()=>{Taro.navigateTo({url: '/pages/addTodo/index?typeKey=' + typeKey + '&'}); console.log(typeKey)}}>+</view>
           <view class="flex-item flex-item-V demo-text-1" width="15px"  onClick={show.bind(this, typeKey)}>↓</view>
           <view class="flex-item flex-item-V demo-text-1" width="15px"  onClick={() => {Taro.showModal({
                                                                                                title: '温馨提示',
                                                                                                content: "您确定要删除分类" + todoList[typeKey].typeName + "及其中所有内容吗",
                                                                                                success: function (res) {
                                                                                                    if (res.confirm) {
                                                                                                        
                                                                                                        delType(typeKey)
                                                                                                    } else if (res.cancel) {
                                                                                                    console.log('用户点击取消')
                                                                                                    }
                                                                                                }})}}>x</view>
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
        show: (typeKey) => dispatch(showTypeAct(typeKey)),
        delType: (typeKey) => dispatch(delTypeAct(typeKey))
    }
  }
 const VisibleType= connect(mapStateToProps, mapDispatchToProps)(Type)
 export default VisibleType