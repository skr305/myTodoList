import { Button} from '@tarojs/components'
import React from 'react'
import Todo from './todo'
import Type from './type'
//todolist面板



export default class TodoList extends React.Component {
    constructor() {
        super()
        // this.state = {
        //   open : true
        // }
    }

    render() {
        // const todoList = this.props.todoList
        // Object.assign({}, this.props.todoList)
        // const show = this.props.show
        // console.log(show)
        
        return (
            <view>
            {/* { 
           Object.keys(this.props.todoList).map((typeIndex) => {
                        if(todoList[typeIndex].show === true) {
                          return (<view key={typeIndex}>
                              <Type data={todoList[typeIndex]} show={show} typeIndex={typeIndex}>
                                </Type> 
                                {  
                                    //渲染每个type之下的todo对象
                                    Object.keys(todoList[typeIndex].list).map((todoIndex) => {
                                        return <Todo key={todoIndex} data={(todoList[typeIndex].list)[todoIndex]}></Todo>
                                    })
                                }
                          </view>
                          )
                        } else {
                            return (<view key={typeIndex}>
                                <Type data={todoList[typeIndex]} show={show} typeIndex={typeIndex}> 
                                  </Type> 
                            </view>
                            )
                        }
                        // return <UnfinishedItem name = {item} key = {item}
                        // delFunction = {this.props.delFunction} finishFunction = {this.props.finishFunction}/>
                    })} */}
            </view>

            )
    }


}