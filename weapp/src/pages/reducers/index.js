
import {time} from '../constants/date'
import store from '../store/index'

export default function reducer (state = {}, action) {
  switch (action.type) {
    case "ADDTYPE":
        {
            //思路是创建一个新的任务集
            let typeName = action.payload.typeName
            let typeKey = time()

            store["todoList"][typeKey] = {typeName: typeName, show: false, list: {}}
            //返回一个把旧的待办集列表换为新的待办列表的对象
            return  Object.assign({}, state, store)
        }
      
     case "ADDTODO":
     { 
      //为这个todo任务创建一个新的key
      let todoKey = time()
      //获取所在的分类
      let {typeKey, todoName, endTime} = action.payload
      
      //这是state中的待办列表 先去出来
      let todoList = Object.assign({}, state.todoList)
      // 并把对应的信息添加到历史记录中去
      if((store["history"].dateList[todoKey.substr(0, 8)]) === undefined)
      {(store["history"].dateList[todoKey.substr(0, 8)])= {}}
        (store["history"].dateList[todoKey.substr(0, 8)])[todoKey] = {"todoName": todoName, "isOk": false, "typeKey": typeKey, "endTime": endTime}

      //拷贝一份这个todoList
      let newList = Object.assign({}, todoList[typeKey].list)
       newList[todoKey] = {"todoName": todoName, "isOk": false, "typeKey": typeKey, "endTime": endTime, typeName: store["todoList"][typeKey].typeName}


       todoList[typeKey].list = newList 
       store.todoList = todoList
       //思路是这样的 把一个以newList更改了之后type对应的对象和state对象组合成一个新的对象返回
       //目的是在不更改这个state的情况下创建一个加了一个新任务的state
      return  Object.assign({}, state, store)
  }
       case "REACH":
         {
              //获取key
              let {typeKey, todoKey} = action.payload
                 //同时修改历史记录
              if((store["history"].dateList[todoKey.substr(0, 8)])[todoKey] !== undefined)
                {(store["history"].dateList[todoKey.substr(0, 8)])[todoKey]["isOk"] = true}
              if(((store["todoList"][typeKey]).list)[todoKey] !== undefined)
                { ((store["todoList"][typeKey]).list)[todoKey]["isOk"] = true}
              //思路是这样的 把一个以newList更改了之后type对应的对象和state对象组合成一个新的对象返回
              //目的是在不更改这个state的情况下创建一个加了一个新任务的state
              return  Object.assign({}, state, store)
         }
         case "DELTYPE":
           {
              let typeKey = action.payload.typeKey
               
              let newTodoList = Object.assign({}, state.todoList)
              if(newTodoList[typeKey] !== undefined)
              {
                  //如果存在这个属性 就删除
                  delete newTodoList[typeKey] 
                  
                  //保险环 有些运行环境下这套代码不知道为什么不能通过reducer来更改store的数据
                  //所以这里采用直接删除的方式来进行
                  delete store["todoList"][typeKey]
              }
              store["todoList"] = newTodoList 


              

              //返回一个把旧的待办集列表换为新的待办列表的对象
              return  Object.assign({}, state, store)
           }
           case "DELTODO":
             {
                 //获取key
              let {typeKey, todoKey} = action.payload

              if(((store["todoList"][typeKey]).list)[todoKey] !== undefined) {
                  delete  ((store["todoList"][typeKey]).list)[todoKey]
              }
              if( (store["history"].dateList[todoKey.substr(0, 8)])["todoKey"] !== undefined) {
                  delete (store["history"].dateList[todoKey.substr(0, 8)])["todoKey"]
              }
 
              //思路是这样的 把一个以newList更改了之后type对应的对象和state对象组合成一个新的对象返回
              //目的是在不更改这个state的情况下创建一个加了一个新任务的state
              return  Object.assign({}, state, store)
             }
             case "SHOWTYPE": {
                  //目的是显示一个任务集的下属任务 
                  
                  let typeKey = action.payload.typeKey
                  console.log(typeKey);
                  if(store["todoList"][typeKey]!==undefined)
                  {
                      store["todoList"][typeKey].show = !store["todoList"][typeKey].show
                  }
                  //返回一个把旧的待办集列表换为新的待办列表的对象
                  
                  return  Object.assign({}, state, store)
             }
             case "WEATHER": {
              state["tip"].weather = action.payload.weather
              let newTip = Object.assign({}, state.tip, {weather: action.payload.weather})
              store["tip"] = newTip
              return  Object.assign({}, state, store)
         }
            case "CURRENTMONTH": {
              state["history"].currentMonth = action.payload.currentMonth
              return  Object.assign({}, state, store)
            }
              case "CURRENTDAY": {
                state["history"].currentDay = action.payload.currentDay
                return  Object.assign({}, state, store)
              }
              default:
                  return state
  }
}