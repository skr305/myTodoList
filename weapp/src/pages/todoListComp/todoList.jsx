import { connect } from 'react-redux'
import TodoList from './indexView'
import {showTypeAct} from '../actions/index'

function mapStateToProps (state) {
    return {
        
        todoList: state.todoList
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
        // show: (typeKey) => dispatch(showTodo(typeKey))}
    }
  }
 const VisibleTodoList = connect(mapStateToProps, mapDispatchToProps)(TodoList)
 export default VisibleTodoList