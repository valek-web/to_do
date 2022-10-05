import React from 'react'
import {Itodo} from '../../inerfaces'
import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'

type TodoListProps = {
    todoList: Itodo[]
    checkedHandler(id: number): void
    removeTodo(id: number): void
}

export const TodoList: React.FC<TodoListProps> = (props) => {
    return (
        <ul>
            {props.todoList.map((todo) => {
                let completed = {
                    textDecoration: todo.comlited ? 'line-through' : 'none',
                }
                return (
                    <Box
                        component='li'
                        key={todo.id}
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'space-between',
                            listStyleType: 'none',
                        }}
                    >
                        <Box
                            component='div'
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                            }}
                        >
                            <Checkbox
                                defaultChecked={todo.comlited}
                                onChange={() => props.checkedHandler(todo.id)}
                            />
                            <Box component='span' sx={completed}>
                                {todo.title}
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                color: 'red',
                                cursor: 'pointer',
                            }}
                        >
                            <i className='red-text' onClick={() => props.removeTodo(todo.id)}>
                                delete
                            </i>
                        </Box>
                    </Box>
                )
            })}
        </ul>
    )
}
