import React from 'react'
import {Itodo} from '../../inerfaces'

type TodoListProps = {
    todoList: Itodo[]
    checkedHandler(id: number): void
    removeTodo(id: number): void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.todoList.map((todo) => {
                let completed = todo.comlited === false ? '' : 'comlited'
                return (
                    <li className={`todo ${completed}`} key={todo.id}>
                        <input
                            type='checkbox'
                            checked={todo.comlited}
                            onChange={() => props.checkedHandler(todo.id)}
                        />
                        <span>{todo.title}</span>
                        <i className='red-text' onClick={() => props.removeTodo(todo.id)}>
                            delete
                        </i>
                    </li>
                )
            })}
        </ul>
    )
}
