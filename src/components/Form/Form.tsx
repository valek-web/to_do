import React, {useState} from 'react'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'

type TodoProps = {
    addTodo(title: string): void
}

export const Form: React.FC<TodoProps> = ({addTodo}) => {
    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPress = (event: React.KeyboardEvent) => {
        if (title === '' && event.key === 'Enter') {
            alert('Заполните поле!')
            return
        }
        if (event.key === 'Enter') {
            addTodo(title)
            setTitle('')
        }
    }

    return (
        <Box
            component='div'
            sx={{
                '& > :not(style)': {m: 1, width: '100%'},
                width: '100%',
            }}
        >
            <TextField
                id='title'
                label='Задача'
                variant='standard'
                onChange={changeHandler}
                value={title}
                onKeyDown={keyPress}
                required
            />
        </Box>
    )
}
