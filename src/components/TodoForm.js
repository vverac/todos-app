
import React, { useState, useEffect } from 'react'
const initialFormValues = {
    title: '',
    description: '',

}

function TodoForm({ todoAdd, todoEdit, todoUpdate, setTodoEdit }) {
    const [formValues, setFormValues] = useState(initialFormValues)
    const { title, description } = formValues;
    const [error, setError] = useState(null)
    const [successMessage, setSuccessMessage] = useState(null)

    useEffect(() => {
        if (todoEdit) {
            setFormValues(todoEdit)
        }
        else {
            setFormValues(initialFormValues)
        }


    }, [todoEdit])
    const handleInputChange = (e) => {
        const changedFormValues = {
            ...formValues,
            [e.target.name]: e.target.value
        }
        setFormValues(changedFormValues)

    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (title.trim() === '') {
            setError('Debes Indicar un Titulo')
            return;

        }

        if (description.trim() === '') {
            setError('Debes Indicar una Descripcion')
            return;
        }



        if (todoEdit) {
            // actualizando
            todoUpdate(formValues)
            setSuccessMessage('Actualizado con exito')

        } else {
            todoAdd(formValues)
            setSuccessMessage('Agregado con exito')
            setFormValues(initialFormValues)
        }

        setTimeout(() => {
            setSuccessMessage(null)
        }, 2000)

        setError(null)
    }
    return (
        <div>
            <h1>{todoEdit ? 'Editar Tarea' : 'Nueva Tarea'}</h1>

            {
                todoEdit &&
                <button
                    onClick={() => setTodoEdit(null)}
                    className='btn btn-sm btn-warning mb-2'
                >Cancelar Edicion
                </button>
            }

            <form onSubmit={handleSubmit}>
                <input
                    type='text'
                    placeholder='Titulo'
                    className='form-control'
                    value={title}
                    name='title'
                    onChange={handleInputChange}
                />
                <textarea
                    placeholder='Descripcion'
                    className='form-control mt-2'
                    value={description}
                    name='description' //conozcamos la utilidad de colocar este atributo (name) a cada input crearemos una funcion handleInputChange
                    onChange={handleInputChange}
                >
                </textarea>
                <button
                    className='btn btn-primary btn-block mt-2'>
                    {todoEdit ? 'Actulizar Tarea' : ' Agregar Tarea'}
                </button>
            </form>
            {
                error &&
                (
                    <div className='alert alert-danger mt-2'>{error}</div>
                )
            }
            {
                successMessage &&
                (
                    <div className='alert alert-success mt-2'>{successMessage}</div>
                )
            }
        </div>
    )
}
export default TodoForm