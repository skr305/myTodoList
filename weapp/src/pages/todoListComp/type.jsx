import Taro  from '@tarojs/taro'
import React from 'react'
import { connect } from 'react-redux'
import {showTypeAct, delTypeAct} from '../actions/index'
import '../iconfont/iconfont.css'


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
      console.log(typeKey)
        return (
          <view class="type flex-wrp" id="out" >
              <view class="type-text" id="text">{todoList[typeKey].typeName}</view>
           <view class="type-icon iconfont" width="15px" fontSize="90rpx" onClick={()=>{Taro.navigateTo({url: '/pages/addTodo/index?typeKey=' + typeKey + '&'});}}>&#xe610;</view>
           <view class="type-icon iconfont" width="15px" fontSize="90rpx" onClick={show.bind(this, typeKey)}>&#xe785;</view>
           <view class="type-icon iconfont" width="15px" fontSize="90rpx" onClick={() => {Taro.showModal({
                                                                                                title: '温馨提示',
                                                                                                content: "您确定要删除分类" + todoList[typeKey].typeName + "及其中所有内容吗",
                                                                                                success: function (res) {
                                                                                                    if (res.confirm) {
                                                                                                        
                                                                                                        delType(typeKey)
                                                                                                    } 
                                                                                                }})}}>&#xe670;</view>
          </view>
        )
    }
   

}



// onClick={() => {Taro.navigateTo({url: '/pages/typeInfo/index?typeKey=' + typeKey + '&'});}}

function mapStateToProps (state) {
    return {
        
        todoList: state.todoList
    }
}


function mapDispatchToProps(dispatch) {
    return {

        show: (typeKey) => {return dispatch(showTypeAct(typeKey))},
        delType: (typeKey) => dispatch(delTypeAct(typeKey))
    }
  }
 const VisibleType= connect(mapStateToProps, mapDispatchToProps)(Type)
 export default VisibleType