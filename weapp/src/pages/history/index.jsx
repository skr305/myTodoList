import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Button, Text, Swiper } from '@tarojs/components'

// import { add, minus, asyncAdd } from '../../actions/counter'

import './index.less'
import TypeWrapper from '../component/typeWrapper'


@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
class App extends Component {
  render () {
    return (
      
      <View>
        <TypeWrapper>
        
      </TypeWrapper>
        <Text>
          我是ewae
        </Text>
      {/* <Swiper>
        233333
      </Swiper> */}
      </View>
      
    )
  }
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

class myComponent extends Component {
  render() {
    return (
      <App></App>
      
    )
  }
}

export default myComponent

