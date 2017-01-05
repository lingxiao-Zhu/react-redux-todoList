/**
 * Created by larry on 2017/1/6.
 */
import React from 'react';

class Todo extends React.Component{
    render(){
        return(
            <li
                onClick={this.props.onClick}
                style={{ textDecoration : this.props.completed ? 'line-through' : 'none' }}
            >
                {this.props.text}
            </li>
        )
    }
}

/*
const Todo = ({ onClick, completed, text }) =>{
    return(
        <li
            onClick={onClick}
            style={{ textDecoration : completed ? 'line-through' : 'none' }}
        >
            {text}
        </li>
    )
}
*/

export default Todo

