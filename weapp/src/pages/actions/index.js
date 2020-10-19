

// import {
//   ADD,
//   MINUS
// } from '../constants/counter'

// export const add = () => {
//   return {
//     type: ADD
//   }
// }
// export const minus = () => {
//   return {
//     type: MINUS
//   }
// }

// // 异步的action
// export function asyncAdd () {
//   return dispatch => {
//     setTimeout(() => {
//       dispatch(add())
//     }, 2000)
//   }
// }


export function addTypeAct(typeName) {
    return {
        type: "ADDTYPE",
        payload: {
            typeName: typeName
        }
    }
}

export function addTodoAct(endTime ,todoName, typeKey ) {
    return {
        type: "ADDTODO",
        payload: {
            todoName: todoName,
            typeKey: typeKey,
            endTime: endTime
        }
    }
}

export function reachAct(typeKey, todoKey) {
    return {
        type: "REACH",
        payload: {
            todoKey: todoKey,
            typeKey: typeKey,
        }
    }
}


export function delTypeAct(typeKey) {
    console.log("produce delTypeAct")
    return {
        type: "DELTYPE",
        payload: {
            typeKey: typeKey
        }
    }
}


export function delTodoAct(typeKey, todoKey) {
    return {
        type: "DELTODO",
        payload: {
            todoKey: todoKey,
            typeKey: typeKey,
        }
    }
}



//用于切换列表的可见性
export function showTypeAct(typeKey) {
    console.log(typeKey)
    return {
        type: "SHOWTYPE",
        payload: {
            typeKey: typeKey
        }
    }
}


//用于切换列表的可见性
export function weatherAct(weather) {
    return {
        type: "WEATHER",
        payload: {
            weather: weather
        }
    }
}

//用于切换列表的可见性
export function currentMonthAct(month) {
    return {
        type: "CURRENTMONTH",
        payload: {
            currentMonth: month
        }
    }
}


//用于切换列表的可见性
export function currentDayAct(day) {
    return {
        type: "CURRENTDAY",
        payload: {
            currentDay: day
        }
    }
}

