import React, { Component } from 'react'
import { connect, Provider } from 'react-redux'
import { View, Text} from '@tarojs/components'

import '../iconfont/iconfont.css'
import './index.css'

import store from '../store/index'
import {currentMonthAct, currentDayAct} from '../actions/index'




let monthDay = (month, year) => {
  switch(month)
		{
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
				return 31;
		
		case 2:
			if(year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
				return 29;
			else	
			    return 28;	
		
		case 4:
		case 6:
		case 9:
		case 11:
				return 30;
		}
}

let weekEnglish = ["Sunday", "Monday", "Tuesday", "Wendnesday", "Thursday", "Friday", "Saturday"]
let monthEnglish = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"] 

//用来算出某年某月某天是星期几
let getWeekDay = (currentDay) => {
  let year = currentDay.substr(0, 4)
  let month = currentDay.substr(4, 2)
  let day = currentDay.substr(6,2)

  //获取此月第一天是周几
  let firstDay = (parseInt((year-1)+(year-1)/4)-parseInt((year-1)/100)+parseInt((year-1)/400) + 1) % 7;
  for(let i=2; i<= Number(month); i++) {
    firstDay = (firstDay + monthDay(i-1, year)) % 7
  }

  return (firstDay + Number(day) - 1) % 7
}


//用来获取当月日历信息的
let getCalendar = (currentMonth) => {
  let year = currentMonth.substr(0, 4)
  let month = currentMonth.substr(4, 2) 

  //每年第一天
  let firstDay = (parseInt((year-1)+(year-1)/4)-parseInt((year-1)/100)+parseInt((year-1)/400) + 1) % 7;


  for(let i=2; i<= Number(month); i++) {
      firstDay = (firstDay + monthDay(i-1, year)) % 7
  }

  //本月日期表的数据本体
  let date = [];

  

  // //用来保存日历本月日期前后的日期
  // let before = [], after = []
  //如果此时正是一月 那么前一月是上一年的十二月
  for(let i=firstDay, beforeMonthDay = monthDay(Number(month) > 1 ? Number(month)-1 : 12, year);
  i>0; i--) {
    //如果前一月是上一年的
    //那么就令年数减1
    //由于出现在本月日历表中的前一月的日期必定>10 所以无需判断是否该加个0
    if(Number(month) <= 1) {
      date.push(String("" + (Number(year)-1) + 12 + beforeMonthDay-i+1))
    } else {
       date.push(String("" + year + (Number(month)-1 < 10 ? "0" + (Number(month)-1) : (Number(month)-1)) + beforeMonthDay-i+1))
    }
  }

  for(let i=1; i<=monthDay(Number(month, year)); i++) {
    date.push(String("" + year + month + (i >= 10 ? i : "0" + i)))
  }


  //接下来还要写末尾月份的遍历添加 这个的话思路相对容易些
  //要先算出最后一天是周几 然后补足未满的天数
  for(let i=0; i<6-((firstDay+monthDay(Number(month),year)-1)%7); i++) {
    //如果后一月是下一年的
    //那么就令年数加1
    //由于出现在本月日历表中的后一月的日期必定<10 所以需要加个'0'
    if(Number(month) >= 12) {
      date.push(String("" + (Number(year)+1) + "0" + 1 +  "0" + (i + 1)))
    } else {
       date.push(String("" + year + (Number(month)+1 < 10 ? "0" + (Number(month)+1) : (Number(month)+1)) + "0" + (i + 1)))
    }
  }

  return {date: date, week: ["S","M","T","W","T","F","S"], year: year, month: month}
}




class History extends Component {



  
  render () {
    let{date, week, year, month} = this.props.calendar
    let dateList = this.props.dateList
    let {beforeMonth, nextMonth, currentMonth, currentDay, changeDay} = this.props
    if(dateList[currentDay] === undefined) {
      //这部分也需要进行修正
      dateList[currentDay] = {}
    }
    // console.log(currentMonth)
    // console.log(date, week)
    return (
        
      <scroll-view class="total">

        
        <view class="calendar">
        <view class="top">
          <view class="switch-icon iconfont" style="font-size: 95rpx;" onClick={beforeMonth.bind(this,currentMonth)}>&#xe608;</view>
          <view class="top-text" > {monthEnglish[Number(month-1)] + "    " + year} </view>
          <view class="switch-icon iconfont" style="font-size: 95rpx;" onClick={nextMonth.bind(this, currentMonth)}>&#xe61e;</view>
        </view>
        <view className="calendar-body">
          <view class="week">
            {
              week.map((ele)=>{
              return <view className="week-block"> <Text>{ele}</Text></view>
              })
            }
          </view>
          <view class="date">
          {
              date.map((ele)=>{
              return <view  class={"date-block " + ((dateList[ele] !== undefined && Object.keys(dateList[ele]).length > 0) ? "on-todo " : "")
                     + ((ele.substr(4,2) == month) ? "" : "other-month")} 
              onClick={changeDay.bind(this, ele)}> <Text>{ele.substr(6,2)}</Text></view>
              })
            }
          </view>
          </view>
      </view>

      <view className="footer">
        {/* 需要进行更改的是这部分 */}
          
          <view className="nowDayTip">
             <view class="nowWeekDay">{weekEnglish[getWeekDay(currentDay)]}</view>
          <view class="nowDay">{currentDay.substr(6,2)}</view>
          </view>
         <view className="nowDayTodo">
        {
        Object.keys(dateList[currentDay]).map((key) => {
          if((dateList[currentDay])[key].isOk === true) {
          return <view className="okTodo"><text class="iconfont" style="color: rgba(15, 235, 107, 0.692); font-size: 76rpx;">&#xe775; </text>{"" + (dateList[currentDay])[key].todoName}</view>
          } else {
          return <view className="unOkTodo"><text class="iconfont" style="color: rgba(177, 33, 33, 0.5); font-size: 76rpx;">&#xe600; </text>{(dateList[currentDay])[key].todoName}</view>
          }
        })}
        </view>
      </view>
      </scroll-view>
      
        

    )
  }
}





function mapStateToProps (state) {
    return {
        dateList: state.history.dateList,
        calendar: getCalendar(state.history.currentMonth),
        currentMonth: state.history.currentMonth,
        currentDay: state.history.currentDay,
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
        nextMonth: (currentMonth) => {
          let year = currentMonth.substr(0, 4)
          let month = currentMonth.substr(4, 2)
          let nextMonth
          if(Number(month) >= 12) {
            nextMonth = String("" + (Number(year)+1) + "0" + 1)
          } else {
             nextMonth = String("" + year + (Number(month)+1 < 10 ? "0" + (Number(month)+1) : (Number(month)+1)))
          }
          return dispatch(currentMonthAct(nextMonth))
        },
        beforeMonth: (currentMonth) => {
          let year = currentMonth.substr(0, 4)
          let month = currentMonth.substr(4, 2)
          let beforeMonth
          if(Number(month) <= 1) {
            beforeMonth = String("" + (Number(year)-1) + 12)
          } else {
             beforeMonth = String("" + year + (Number(month)-1 < 10 ? "0" + (Number(month)-1) : (Number(month)-1)))
          }
          return dispatch(currentMonthAct(beforeMonth))
        },
        changeDay: (day) => dispatch(currentDayAct(day))
      }
        
  }
 const VisibleHistory = connect(mapStateToProps, mapDispatchToProps)(History)

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
    return (
      <View>
        
      <Provider store={store}>
        <VisibleHistory></VisibleHistory>
  </Provider>
  </View>
    )
    
  }
}

export default App

