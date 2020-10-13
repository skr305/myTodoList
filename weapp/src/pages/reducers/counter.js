import { ADD, MINUS } from '../constants/counter'

const INITIAL_STATE = {
    normal: [
      '吃饭',
      '睡觉'
    ]
}

export default function counter (state = INITIAL_STATE, action) {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        num: state.num + 1
      }
     case MINUS:
       return {
         ...state,
         num: state.num - 1
       }
    case "INIT":
       return INITIAL_STATE
     default:
       return state
  }
}
