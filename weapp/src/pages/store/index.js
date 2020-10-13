import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers/index'

// const composeEnhancers =
//   typeof window === 'object' &&
//   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
//     window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
//       // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
//     }) : compose

// const middlewares = [
//   thunkMiddleware
// ]

// if (process.env.NODE_ENV === 'development' && process.env.TARO_ENV !== 'quickapp') {
//   middlewares.push(require('redux-logger').createLogger())
// }

// const enhancer = composeEnhancers(
//   applyMiddleware(...middlewares),
//   // other store enhancers if any
// )

// export default function configStore () {
//   const store = createStore(rootReducer, enhancer)
//   return store
// }

//用于模拟实际情况中的key值
//这是列表的key
// let virtualKey1  = Date.now()
// //这是任务的key
// let virtualKey2 = virtualKey1++;

// let store = createStore(reducer, {
//     todoList: {
//       virtualKey1: {
//         name: "日常",
//         show: false,
//         virtualKey2: {
//           name: "吃饭",
//           isOk: false,
//           endTime: Date.now()//任务的结束时间 string
          
//         }
//       }
//     }
// })
let initialStore = {
  todoList : {
      normal: {
          typeName: "normal",
          show: false,
          list: {
              //属于normal类的eat任务
              eat: {
                  typeKey: "normal",
                  todoName: "eat",
                  endTime: "22001011123133",
                  isOk: false,
                  typeName: "normal"
              },
              walk: {
                  typeKey: "normal",
                  todoName: "walk",
                  endTime: "22001011123133",
                  isOk: false,
                  typeName: "normal"
              }
          }
      },
      work: {
          typeName: "work",
          show: false,
          list: {
              //属于normal类的eat任务
              code: {
                  typeKey: "work",
                  todoName: "code",
                  endTime: "22001011123133",
                  isOk: false,
                  typeName: "work"
              }
          }
      }
  }
}


const store = createStore(reducer, initialStore, applyMiddleware(thunk))
store["todoList"] = initialStore["todoList"] 
export default store