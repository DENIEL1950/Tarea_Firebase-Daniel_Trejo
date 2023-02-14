import React from 'react'

export default function Tareas(props) {
    const eliminarClick = (item) => {
        props.eliminarClick(item);
    };
    const editarClick = (item) => {
        props.editarClick(item);
    };
    console.log(props.tareas)
    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                    <h1 className='titulo'>Tareas</h1>
                    {props.tareas.map((tarea) => {
                        return (
                            <div clasName="col-md-4" key={tarea.id}>
                                <div className="card mt-4">
                                    <div className="card-header card-head cabeza">
                                        <h3>Titulo: {tarea.titulo}</h3>
                                        </div>

                                    <div className="card-body carta-body">
                                        <p className='descripcion'><strong>Descripcion:</strong>{tarea.descripcion}</p>
                                        <p className='responsable'><strong>Responsable:</strong>{tarea.responsable}</p>
                                        <p className='prioridad'><strong>Prioridad:</strong> {tarea.prioridad}</p>
                                    </div>

                                    <div className="card-footer carta-foot">
                                        <button className='botones' onClick={() => eliminarClick(tarea)}>Eliminar</button>
                                        <button className='botones' onClick={() => editarClick(tarea)}>Editar</button>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </div>
    )
}