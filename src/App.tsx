import React, {useState} from 'react'
import './App.css'
import {Form} from './components/Form/Form'
import {Navbar} from './components/Navbar/Navbar'
import {Itodo} from './inerfaces'
import {TodoList} from './components/TodoList/TodoList'

function App() {
    const [todo, setTodo] = useState<Itodo[]>([])

    const addTodo = (title: string) => {
        let newTodo: Itodo = {
            title,
            id: Date.now(),
            comlited: false,
        }
        setTodo((prev) => [newTodo, ...prev])
    }

    const checkedHandler = (id: number) => {
        setTodo((prev) =>
            prev.map((todo) => {
                if (id === todo.id) {
                    todo.comlited = !todo.comlited
                }
                debugger
                return todo
            })
        )
    }

    const removeTodo = (id: number) => {
        setTodo((prev) => prev.filter((todo) => todo.id !== id))
    }

    return (
        <main className='App'>
            <Navbar />
            <div className='container'>
                <Form addTodo={addTodo} />
                <TodoList todoList={todo} checkedHandler={checkedHandler} removeTodo={removeTodo} />
            </div>
        </main>
    )
}

export default App
