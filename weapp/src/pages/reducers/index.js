
import {time} from '../constants/date'
import store from '../store/index'
// const INITIAL_STATE = {
//   num: 0
// }

// export default function reducer (state = INITIAL_STATE, action) {
//   switch (action.type) {
//     case "ADDSET":
//       return {
//         ...state,
//         num: state.num + 1
//       }
//      case "ADDTODO":
//        return {
//          ...state,
//          num: state.num - 1
//        }
//        case "REACH":
//          return {
//            ...state,
//            num: state.num - 1
//          }
//          case "DELSET":
//            return {
//              ...state,
//              num: state.num - 1
//            }
//            case "DELTODO":
//              return {
//                ...state,
//                num: state.num - 1
//              }
//              case "SHOWTODO":
//                return {
//                  ...state,
//                  num: state.num - 1
//                }
//      default:
//        return state
//   }
// }
export default function reducer (state = {}, action) {
  switch (action.type) {
    case "ADDTYPE":
        {
            //思路是创建一个新的任务集
            let typeName = action.payload.typeName
            let typeKey = time()
            console.log(typeName,typeKey + "--------")
            //key是自动分配的 所需要的就是这个任务集的名字
            let newTodoList = Object.assign({}, state.todoList)
            newTodoList[typeKey] = {typeName: typeName, show: false, list: {}}
            store["todoList"] = newTodoList
            //返回一个把旧的待办集列表换为新的待办列表的对象
            console.log(Object.assign({}, state, {todoList: newTodoList}))
            return Object.assign({}, state, {todoList: newTodoList})
        }
      
     case "ADDTODO":
     { 
      //为这个todo任务创建一个新的key
      let todoKey = time()
      //获取所在的分类
      let {typeKey, name, endTime} = action.payload
  
      //这是state中的待办列表 先去出来
      let todoList = Object.assign({}, state.todoList)

      let typeName = todoList[typeKey].name;

      //拷贝一份这个todoList
      let newList = Object.assign({}, todoList[typeKey].list)
       newList[todoKey] = {"name": name, "isOk": false, "typeKey": typeKey, "endTime": endTime, typeName: typeName}


       todoList[typeKey].list = newList 
       //思路是这样的 把一个以newList更改了之后type对应的对象和state对象组合成一个新的对象返回
       //目的是在不更改这个state的情况下创建一个加了一个新任务的state
      return  Object.assign({}, state, {todoList: todoList})
  }
       case "REACH":
         {

              //获取key
              let {typeKey, todoKey} = action.payload
          
              //这是state中的待办列表 先去出来
              let todoList = Object.assign({}, state.todoList)

              //拷贝一份这个todoList
              let newList = Object.assign({}, todoList[typeKey].list)
              
                

              // console.log(typeof todoKey)
              // for(let ele in newList[todoKey]) {
              //   console.log(newList[todoKey][ele])
              // }
              newList[todoKey]["isOk"] = true

              todoList[typeKey].list = newList 
              //思路是这样的 把一个以newList更改了之后type对应的对象和state对象组合成一个新的对象返回
              //目的是在不更改这个state的情况下创建一个加了一个新任务的state
              return  Object.assign({}, state, {todoList: todoList})
         }
         case "DELTYPE":
           {
              let typeKey = action.payload.typeKey
               //目的是删除一个任务集 
              let newTodoList = Object.assign({}, state.todoList)
              if(newTodoList[typeKey] !== undefined)
              {
                  //如果存在这个属性 就删除
                  delete newTodoList[typeKey] 
              }
              //返回一个把旧的待办集列表换为新的待办列表的对象
              return Object.assign({}, state, {todoList: newTodoList})
           }
           case "DELTODO":
             {
                 //获取key
              let {typeKey, todoKey} = action.payload
          
              //这是state中的待办列表 先去出来
              let todoList = Object.assign({}, state.todoList)

              //拷贝一份这个todoList
              let newList = Object.assign({}, todoList[typeKey].list)
              if(newList[todoKey] !== undefined) {
                  delete newList[todoKey]
              }
              todoList[typeKey].list = newList 
              //思路是这样的 把一个以newList更改了之后type对应的对象和state对象组合成一个新的对象返回
              //目的是在不更改这个state的情况下创建一个加了一个新任务的state
              return  Object.assign({}, state, {todoList: todoList})
             }
             case "SHOWTYPE": {
                  //目的是显示一个任务集的下属任务 
                  
                  let typeKey = action.payload.typeKey

                  let newTodoList = Object.assign({}, state.todoList)
                  if(newTodoList[typeKey] !== undefined)
                  {
                      newTodoList[typeKey].show = !newTodoList[typeKey].show
                  }
                  //返回一个把旧的待办集列表换为新的待办列表的对象
                  console.log("finishShowSet")
                  return Object.assign({}, state, {todoList: newTodoList})
             }
              default:
                  return state
  }
}