
import React, { useEffect, useState } from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'


const initialTodos = [
    {
        id: 1,
        title: 'todo #1',
        description: 'Descripcion Todo #1',
        completed: false,
    },
    {
        id: 2,
        title: 'todo #2',
        description: 'Descripcion Todo #2',
        completed: true,
    }
]

const localTodos = JSON.parse(localStorage.getItem('todos'))

function App() {
    const [todos, setTodos] = useState(localTodos || initialTodos)
    const [todoEdit, setTodoEdit] = useState(null)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))

    }, [todos])



    const todoDelete = (todoId) => {

        if (todoEdit && todoId === todoEdit.id) {
            setTodoEdit(null)
        }
        const changedTodos = todos.filter(todo => todo.id !== todoId)
        setTodos(changedTodos);
    }

    const todoToogleCompleted = (todoId) => {
        const changedTodos = todos.map(todo => todo.id === todoId ? { ...todo, completed: !todo.completed } : todo)

        setTodos(changedTodos)
    }

    const todoAdd = (todo) => {

        const newTodo = {
            id: Date.now(),
            ...todo,
            completed: false
        }
        const changedTodos = [
            newTodo,
            ...todos,

        ]

        setTodos(changedTodos)
    }

    // creando nuestra funcion para actualizar
    const todoUpdate = (todoEdit) => {
        const changedTodos = todos.map(todo => (
            todo.id === todoEdit.id
                ? todoEdit
                : todo
        ))

        setTodos(changedTodos)
    }

    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-8'>
                    <TodoList
                        todos={todos}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}
                    />
                </div>
                <div className='col-4'>
                    <TodoForm
                        // estados
                        todoEdit={todoEdit}
                        // funciones
                        todoAdd={todoAdd}
                        todoUpdate={todoUpdate}
                        setTodoEdit={setTodoEdit}
                    />


                </div>

            </div>
        </div>

    )
}

export default App