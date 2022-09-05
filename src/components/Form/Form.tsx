import React, {useState} from 'react'

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
        <div className='input-field mt2'>
            <input
                type='text'
                id='title'
                onChange={changeHandler}
                value={title}
                onKeyDown={keyPress}
            />
            <label htmlFor='title' className='active '>
                Задача
            </label>
        </div>
    )
}
