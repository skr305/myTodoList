import Taro from '@tarojs/taro'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index'
import {initAct} from '../actions/index'






let initialStore = {
    tip: {
        weather: '',
        location: '',
        cityID: '',
        cityName: '',
        
    },
  todoList : {
      normal: {
          typeName: "normal",
          show: false,
          list: {
              //属于normal类的eat任务
              20201005132011: {
                  typeKey: "normal",
                  todoName: "eat",
                  endTime: "22001011123133",
                  isOk: false,
                  typeName: "normal"
              },
              20201005132012: {
                  typeKey: "normal",
                  todoName: "walk",
                  endTime: "22001011123133",
                  isOk: false,
                  typeName: "normal"
              },
               20190510132010: {
                typeKey: "normal",
                todoName: "takePhoto",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            }, 20190510132011: {
                typeKey: "normal",
                todoName: "play",
                endTime: "22001011123133",
                isOk: true,
                typeName: "normal"
            }
          }
      },
    //   work: {
    //       typeName: "work",
    //       show: false,
    //       list: {
    //           //属于normal类的eat任务
    //           20201005132201: {
    //               typeKey: "work",
    //               todoName: "code",
    //               endTime: "22001011123133",
    //               isOk: false,
    //               typeName: "work"
    //           },
    //           20201005132091: {
    //             typeKey: "normal",
    //             todoName: "eat",
    //             endTime: "22001011123133",
    //             isOk: false,
    //             typeName: "normal"
    //         }
    //       }
    //   },
  },
  history: {
      currentMonth: '202010',
      currentDay: '20201020',
      dateList: {}
    //   dateList: {
    //       "20190510": {
    //             20190510132010: {typeKey: "normal",
    //             todoName: "takePhoto",
    //             endTime: "22001011123133",
    //             isOk: true,
    //             typeName: "normal" },
    //             20190510132011: {
    //                 typeKey: "normal",
    //                 todoName: "play",
    //                 endTime: "22001011123133",
    //                 isOk: true,
    //                 typeName: "normal"
    //             }
    //       },
    //       "20201005": {
    //         20201005132011: {
    //             typeKey: "normal",
    //             todoName: "eat",
    //             endTime: "22001011123133",
    //             isOk: true,
    //             typeName: "normal"
    //         },
            
    //         20201005132012: {
    //             typeKey: "normal",
    //             todoName: "walk",
    //             endTime: "22001011123133",
    //             isOk: false,
    //             typeName: "normal"
    //         },
    //         20201005132201: {
    //             typeKey: "work",
    //             todoName: "code",
    //             endTime: "22001011123133",
    //             isOk: false,
    //             typeName: "work"
    //         }
    //       }
    //   }
  }
}


//第二次初始化 从本地提取数据内容 装填到store中
try {
  let data = Taro.getStorageSync('storeCache')
  if (data) {
    initialStore["todoList"] = data["todoList"] 
    initialStore["tip"] = data["tip"] 
    initialStore["history"] = data["history"]
  }
} catch (e) {
  console.log("no cache of store")
  // Do 
}

const store = createStore(reducer, initialStore, applyMiddleware(thunk))

//进行第一次初始化 先把对象的基本构造弄出来 因为这里的createStore出了点问题 不能通过第二个参数初始化了
//所以只能手动初始化了
store["todoList"] = initialStore["todoList"] 
store["tip"] = initialStore["tip"] 
store["history"] = initialStore["history"]



// Taro.getStorage({
//     key: 'storeCache',
//     success: function (res) {
//       console.log(res.data)
//     }
//   })

export default store