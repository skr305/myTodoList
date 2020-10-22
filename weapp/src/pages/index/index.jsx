import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { View, Button, ScrollView } from '@tarojs/components'
import Taro from '@tarojs/taro'
// import { createStore, applyMiddleware } from 'redux'
// import thunk from 'redux-thunk'
// import reducer from '../reducers/index'
// import { add, minus, asyncAdd } from '../../actions/counter'
import './index.less'
import VisibleTodo from '../todoListComp/todo'
import VisibleType from '../todoListComp/type'
import store from '../store/index'
import {weatherAct, reachAct} from '../actions/index'
import {time} from '../constants/date'
import '../iconfont/iconfont.css'

let getTip = (upDate) => {
  Taro.getLocation({
    type: 'wgs84',
    success (res) {
      const latitude = res.latitude
      const longitude = res.longitude
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
      upDate(res.data.now.text)
    }
  
  })
}
 





class TodoList extends Component {


  componentDidMount() {
    const weather = this.props.weather
    getTip(weather)
  }
  
  
  render () {
    
    let nowTime = time()
    let reachTodo = this.props.reachTodo
    return (
      <view>
     
        {/* 跳转到添加分类的页面 */}
        <View style="display: flex; flexDirection: row" class="top">
        {Object.keys(store["tip"]).map((key) => {
          if(key == "weather") {
              let weather = store["tip"][key]
              if(weather == "晴")
                { 
                  return (<view class="weather">
                  <view class="weatherIcon iconfont">&#xe60c;</view>
                  <view class="weatherText" >{store["tip"].cityName}天气不错</view>
                </view>)
                } else if(weather == "多云")
                { 
                  return (<view class="weather">
                  <view class="weatherIcon iconfont">&#xe60b;</view>
                  <view class="weatherText" >{store["tip"].cityName}天气不错</view>
                </view>)
                }
              else if(weather == "阴") 
               { return(<view class="weather">
               <view class="weatherIcon iconfont">&#xe680;</view>
       <view class="weatherText"> {store["tip"].cityName}{store["tip"].cityName}是阴天 不如散散步吧</view>
             </view>)}
              else if(weather.indexOf("雨") != -1)
                {return (<view class="weather">
                <view class="weatherIcon iconfont">&#xe622;</view>
        <view class="weatherText"> {store["tip"].cityName}下雨了 呆在房子里吧</view>
              </view>)}
              else if(weather.indexOf("雪") != -1)
              {  return (<view class="weather">
              <view class="weatherIcon iconfont">&#xe67f;</view>
      <view class="weatherText"> {store["tip"].cityName}今天下雪啦</view>
            </view>)}
              else 
               { return (<view class="weather">
               <view class="weatherIcon iconfont">&#xe680;</view>
       <view class="weatherText"> {store["tip"].cityName}今天天气不太好呢</view>
             </view>)}
          }
        })}

        </View>
      <ScrollView scrollY={true} class="main">
      <View class="addType iconfont" onClick={()=>{Taro.navigateTo({url: '/pages/addType/index'})}}>&#xe85e;</View>

        {
          
           Object.keys(store["todoList"]).map((typeKey) => {
            if((store["todoList"])[typeKey].show === true) {
              if(Object.keys(store["todoList"][typeKey].list).length > 0) {
              return (<scroll-view key={typeKey}>
                <VisibleType typeKey={typeKey} class="type">
                  </VisibleType> 
                  <view className="todo-wrp">
                  {  
                      //渲染每个type之下的todo对象
                      Object.keys((store["todoList"])[typeKey].list).map((todoKey) => {
                        if(((store["todoList"])[typeKey].list)[todoKey].isOk !== true) {
                          // return <VisibleTodo key={todoKey} typeKey={typeKey} todoKey={todoKey} ></VisibleTodo>
                          if(((store["todoList"])[typeKey].list)[todoKey].endTime > nowTime) {
                            return <VisibleTodo  key={todoKey} typeKey={typeKey} todoKey={todoKey} ></VisibleTodo>
                          }
                          else {
                            reachTodo(typeKey, todoKey)
                          }
                              
                        }
                      })
                  }
                  </view>
                  
            </scroll-view>)}
              else {
              return  (<view key={typeKey}>
                  <VisibleType typeKey={typeKey}>
                    </VisibleType> 
                    <view class="todo-tip">此分类下还没有任务~</view>
              </view>)
              }
            } else {
              return (<view key={typeKey}>
                  <VisibleType typeKey={typeKey}> 
                    </VisibleType> 
              </view>
              )
          }
          })
      }
    </ScrollView>
      </view>
    )
  }
}




function mapStateToProps (state) {
    return {
        
        state: state
    }
}


function mapDispatchToProps(dispatch) {
    return {

        weather: (weather) => dispatch(weatherAct(weather)),
        reachTodo: (typeKey, todoKey) => {console.log("dispatching"); return dispatch(reachAct(typeKey, todoKey)) }
    }
        
  }
 const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)


class App extends React.Component {

  

  render() {
    return (
    <View>
  
    <Provider store={store}>
        <VisibleTodoList></VisibleTodoList>
  </Provider>
  </View>
    )
    
  }
}

export default App

