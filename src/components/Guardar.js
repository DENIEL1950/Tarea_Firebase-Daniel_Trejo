import React from 'react'

export default function Guardar(props) {
  return (
    <div>
      <div className="row"></div>
      <form onSubmit={props.guardarRegistro}>
        <div className="card-header titulo2">Panel para Guardar datos del usuario</div>
        <div className='card-body'>
          <input className='texto' type="text" placeholder='Titulo' onChange={(event) => props.setNuevoTitulo(event.target.value)} />
          <input className='texto' type="text" placeholder='Descripcion' onChange={(event) => props.setNuevaDescripcion(event.target.value)} />
          <input className='texto' type="text" placeholder='Responsable' onChange={(event) => props.setNuevoResponsable(event.target.value)} />
          <input className='texto' type="text" placeholder='Prioridad' onChange={(event) => props.setNuevaPrioridad(event.target.value)} />
          <button className='botones'>Guardar</button>
        </div>
      </form>

    </div>
  )
}