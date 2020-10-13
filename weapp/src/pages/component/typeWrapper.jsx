import { Button, View } from '@tarojs/components'
import React from 'react'


let open = true;
console.log(open)
let clickLow = () => {
  open = !open
  console.log(open)
}

export default class TypeWrapper extends React.Component {
    constructor() {
        super()
        this.state = {
          open : true
        }
    }

    render() {
        return (
            <view class="container">
  <view class="page-body">
    <view class="page-section">
      <view class="page-section-title">
        <text>flex-direction: row\n横向布局</text>
      </view>
      <scroll-view class="page-section-spacing" scroll-y= {true} style={"height: 100rpx;"}>
        <view class="flex-wrp" style="flex-direction:column;">
          <view class="flex-item ">1</view>
          <view class="flex-item ">2</view>
          <view class="flex-item ">3</view>
          <view>3</view>
          <view>4</view>
          <view>4</view>
          <view>4</view>
          <view>4</view>
          <view>4</view>
          <view>4</view>
          <view>4</view>
        </view>
      </scroll-view>
    </view>
    <view class="page-section">
      <view class="page-section-title">
        <text>flex-direction: column\n纵向布局</text>
      </view>
      <view class="flex-wrp" style="flex-direction:column;">
        <view class="flex-item flex-item-V demo-text-1"></view>
        <view class="flex-item flex-item-V demo-text-2"></view>
        <view class="flex-item flex-item-V demo-text-3"></view>
      </view>
    </view>
    <View class="flex-wrp" style="flex-direction:row;" style = "border: solid 2px wheat">
      待办事项
        <Button class="flex-item flex-item-V demo-text-1" size = "mini">+</Button>
        <Button class="flex-item flex-item-V demo-text-1"  onClick = {clickLow} size = "mini" >👇</Button>
          
  </View>
  <view style={{flexDirection:"column", visibility: open ? "visible" : "hidden"}}>
    <view>吃饭</view>
    <view>睡觉</view>
  </view>
  </view>
  </view>
  
        )
    }


}