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
import {weatherAct} from '../actions/index'

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


//用于获取页首天气及城市信息的函数
//传入的参数是用来修改store的函数
//出于方便起见(事实上我只是想要让reducer帮我重新渲染页面)
//我就只放了更新天气属性的函数进去
let getTip = (upDate) => {
  console.log(typeof upDate)
  Taro.getLocation({
    type: 'wgs84',
    success (res) {
      const latitude = res.latitude
      const longitude = res.longitude
      console.log(latitude, longitude)
      store["tip"].location =  longitude + "," + latitude 
      getCity(store["tip"].location, upDate)
    }
   })
}




let getCity = (location, upDate) => {
  let cityInfoURL =  'https://geoapi.heweather.net/v2/city/lookup?location='+location+'&key=f8bc5a9e38c3449c84623c5f9ac9c452'

  Taro.request({
    url: cityInfoURL, //和风天气根据位置获取所在城市信息
   
    header: {
      'content-type': 'application/json' // 默认值
    },
    method: 'GET',
    success(res) {
      console.log(res)
      console.log(store["tip"].cityName = res.data.location[0].name)
      store["tip"].cityID = res.data.location[0].id
      getWheater(store["tip"].cityID, upDate)
    }
  
  })
}



let getWheater = (cityID, upDate) => {
  let cityInfoURL =  'https://devapi.heweather.net/v7/weather/now?location='+cityID+'&key=f8bc5a9e38c3449c84623c5f9ac9c452'
  Taro.request({
    url: cityInfoURL, //和风天气根据位置获取所在城市信息
   
    header: {
      'content-type': 'application/json' // 默认值
    },
    method: 'GET',
    success(res) {
      console.log(res)
      console.log(store["tip"].weather = res.data.now.text)
      console.log(store)
      upDate(res.data.now.text)
    }
  
  })
}
 




console.log(typeof store["todoList"])



class TodoList extends Component {



  componentDidMount() {
    const weather = this.props.weather
    console.log(typeof weather, "233333333")
    getTip(weather)
  }
  
  render () {
    return (
      <View>
        
    <View>{store["tip"].weather}</View>
        
        {
          
           Object.keys(store["todoList"]).map((typeKey) => {
            if((store["todoList"])[typeKey].show === true) {
              return (<view key={typeKey}>
                <VisibleType typeKey={typeKey}>
                  </VisibleType> 
                  {  
                      //渲染每个type之下的todo对象
                      Object.keys((store["todoList"])[typeKey].list).map((todoKey) => {
                        
                        if(((store["todoList"])[typeKey].list)[todoKey].isOk !== true)
                          return <VisibleTodo key={todoKey} typeKey={typeKey} todoKey={todoKey} ></VisibleTodo>
                      })
                  }
            </view>
            )
            } else {
              return (<view key={typeKey}>
                  <VisibleType typeKey={typeKey}> 
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
        weather: (weather) => dispatch(weatherAct(weather)),
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
        <View style="display: flex; flexDirection: row">
        <View class="addType" onClick={()=>{Taro.navigateTo({url: '/pages/addType/index'})}}>+</View>
        <Button onClick={()=> {console.log(store)}}>点我查看store数据</Button>
        </View>
        <VisibleTodoList></VisibleTodoList>
  </Provider>
  </View>
    )
    
  }
}

export default App

