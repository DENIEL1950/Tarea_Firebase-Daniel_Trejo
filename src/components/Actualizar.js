import React from 'react'

export default function Actualizar(props) {
    return (
        <form onSubmit={props.guardarRegistro}>
            <div className="card-header titulo2">Panel para Actualizar datos del usuario</div>
            <div className='card-body'>
            <input
                className='texto'
                type='text'
                placeholder='Titulo'
                value={props.titulo}
                onChange={(event) => props.setNuevoTitulo(event.target.value)} />

            <input
                className='texto' 
                type='text'
                placeholder='Descripcion'
                value={props.descripcion}
                onChange={(event) => props.setNuevaDescripcion(event.target.value)} />

            <input
                className='texto' 
                type='text'
                placeholder='Responsable'
                value={props.responsable}
                onChange={(event) => props.setNuevoResponsable(event.target.value)} />

            <input
                className='texto' 
                type='text'
                placeholder='Prioridad'
                value={props.prioridad}
                onChange={(event) => props.setNuevaPrioridad(event.target.value)} />


            <button className='Actualizarboton'>Actualizar</button>

            </div>

        </form>
    )
}