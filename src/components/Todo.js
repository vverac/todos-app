import React from 'react'

function Todo({ todo, todoDelete, todoToogleCompleted, setTodoEdit }) { //recibimos la propiedad todoDelete y como la usaremos? al hacer 
    return (
        <div className='card mt-2'>
            <div className='card-body '>
                <h3 className='card-title text-right'>
                    {todo.title}
                    <button
                        onClick={() => todoToogleCompleted(todo.id)} // como mostramos este cambio de manera visual??
                        className={`btn btn-sm ${todo.completed ? 'btn-outline-success' : 'btn-success'} ml-2`}>
                        {todo.completed ? 'Terminado' : 'terminar'}
                    </button>
                </h3>
                <p className='card-text text-right'>
                    {todo.description}
                </p>
                <hr />
                <div className='d-flex justify-content-end'>
                    <button

                        // diremos que en el evento onclick se ejecutara esta funcion que recibe un argumento(y le enviamos el todo completo)(recordar convertirlo en funcion flecha para que no se)
                        onClick={() => setTodoEdit(todo)}
                        className='btn btn-sm btn-outline-primary'>
                        Editar
                    </button>
                    <button
                        onClick={() => todoDelete(todo.id)}
                        className='btn btn-sm btn-outline-danger'>

                        Eliminar
                    </button>
                </div>
            </div>
        </div >
    )
}

export default Todo