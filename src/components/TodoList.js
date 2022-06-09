import React, { useState } from 'react'
import Todo from './Todo'


function TodoList({ todos, todoDelete, todoToogleCompleted, setTodoEdit }) { //  recibimos la funcion todoDelete que viene desde App de aqui se la enviamos a cada todo y se la pasamos al componente Todo ver mas abajo

    return (
        <div>
            <h1>TodoList</h1>


            {todos.length === 0
                ? (<div className='alert alert-primary'>
                    No hay Tareas , agrega una!!!
                </div>)
                :
                (todos.map(todo => (
                    <Todo
                        todo={todo}
                        key={todo.id}
                        todoDelete={todoDelete}
                        todoToogleCompleted={todoToogleCompleted}
                        setTodoEdit={setTodoEdit}

                    />
                )))
            }


            {

            }
        </div >
    )
}

export default TodoList




