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
      work: {
          typeName: "work",
          show: false,
          list: {
              //属于normal类的eat任务
              20201005132201: {
                  typeKey: "work",
                  todoName: "code",
                  endTime: "22001011123133",
                  isOk: false,
                  typeName: "work"
              },
              20201005132091: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132061: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132051: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132031: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132021: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132015: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132012: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132013: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
          }
      },
      work1: {
        typeName: "work",
        show: false,
        list: {
            //属于normal类的eat任务
            20201005132201: {
                typeKey: "work",
                todoName: "code",
                endTime: "22001011123133",
                isOk: false,
                typeName: "work"
            },
            20201005132091: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132061: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132051: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132031: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132021: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132015: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132012: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132013: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
        }
    },
    work2: {
        typeName: "work",
        show: false,
        list: {
            //属于normal类的eat任务
            20201005132201: {
                typeKey: "work",
                todoName: "code",
                endTime: "22001011123133",
                isOk: false,
                typeName: "work"
            },
            20201005132091: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132061: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132051: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132031: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132021: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132015: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132012: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132013: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
        }
    },
    work3: {
        typeName: "work",
        show: false,
        list: {
            //属于normal类的eat任务
            20201005132201: {
                typeKey: "work",
                todoName: "code",
                endTime: "22001011123133",
                isOk: false,
                typeName: "work"
            },
            20201005132091: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132061: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132051: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132031: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132021: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132015: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132012: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
          20201005132013: {
              typeKey: "normal",
              todoName: "eat",
              endTime: "22001011123133",
              isOk: false,
              typeName: "normal"
          },
        }
    },
  },
  history: {
      currentMonth: '202010',
      currentDay: '20201020',
      dateList: {
          "20190510": {
                20190510132010: {typeKey: "normal",
                todoName: "takePhoto",
                endTime: "22001011123133",
                isOk: true,
                typeName: "normal" },
                20190510132011: {
                    typeKey: "normal",
                    todoName: "play",
                    endTime: "22001011123133",
                    isOk: true,
                    typeName: "normal"
                }
          },
          "20201005": {
            20201005132011: {
                typeKey: "normal",
                todoName: "eat",
                endTime: "22001011123133",
                isOk: true,
                typeName: "normal"
            },
            
            20201005132012: {
                typeKey: "normal",
                todoName: "walk",
                endTime: "22001011123133",
                isOk: false,
                typeName: "normal"
            },
            20201005132201: {
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
store["tip"] = initialStore["tip"] 
store["history"] = initialStore["history"]
export default store