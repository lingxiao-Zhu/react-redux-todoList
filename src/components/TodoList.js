/**
 * Created by larry on 2017/1/6.
 */
import React from 'react';
import Todo from './Todo';

//圆括号里面要写大括号
const TodoList = ({todos, onTodoClick}) => {
    return (
        <ul>
            {
                todos.map
                (
                    todo =>
                        <Todo
                            key={todo.id}
                            {...todo}
                            onClick={() => onTodoClick(todo.id)}
                        />
                )
            }
        </ul>
    )
};

export default TodoList;