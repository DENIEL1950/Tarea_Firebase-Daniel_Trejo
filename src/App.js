import { useEffect, useState } from 'react';
import { db } from './Firebase-config';
import { addDoc, collection, getDocs, deleteDoc, doc, updateDoc } from 'firebase/firestore'
import './App.css';
import Tareas from './components/Tareas';
import Actualizar from './components/Actualizar';
import Guardar from './components/Guardar';


function App() {
  const [tareas, setTareas] = useState([]);
  const [titulo, setNuevoTitulo] = useState('');
  const [descripcion, setNuevaDescripcion] = useState('');
  const [responsable, setNuevoResponsable] = useState('');
  const [prioridad, setNuevaPrioridad] = useState('');

  const [id, setNuevoid] = useState('');
  const [titulo2, setNuevoTitulo2] = useState('');
  const [descripcion2, setNuevaDescripcion2] = useState('');
  const [responsable2, setNuevoResponsable2] = useState('');
  const [prioridad2, setNuevaprioridad2] = useState('');

  const [Guardado, setGuardado] = useState(false);
  
  const tareasColeccionRef = collection(db, 'tareas');
  useEffect(() => {
    async function getTareas() {
      const data = await getDocs(tareasColeccionRef);
      setTareas(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
      //console.log(data);
    }
    getTareas();
    setGuardado(false)
  }, [Guardado]);
  const guardarRegistro = async (event) => {
    event.preventDefault();
    const nuevaTarea = {
      titulo, descripcion, responsable, prioridad
    }
    const actTarea={
       titulo: titulo2, 
       descripcion: descripcion2, 
       responsable: responsable2, 
       prioridad: prioridad2
     }
     if(id){
      const docRef = doc(db, "tareas", id);
      await updateDoc(docRef,actTarea)
      setNuevoid('')
      setNuevoTitulo('')
      setNuevaDescripcion('')
      setNuevoResponsable('')
      setNuevaPrioridad('')
     }
     else{
      await addDoc(tareasColeccionRef, nuevaTarea);//guarda la tarea en firebase
     }
    setGuardado(true)
  }
  const eliminarClick = async (item) => {
    console.log(item.id);
    if (window.confirm("¿Está seguro de eliminar esta tarea?")) {
      const docRef = doc(db, "tareas", item.id);
      await deleteDoc(docRef);
    }
    setGuardado(true);
  };
  const editarClick=(item)=>{
    console.log(item.id)
    console.log(item.titulo)
    setNuevoid(item.id);
    setNuevoTitulo2(item.titulo);
    setNuevaDescripcion2(item.descripcion);
    setNuevoResponsable2(item.responsable);
    setNuevaprioridad2(item.prioridad);

};
  return (
    <div className="App">
      <Guardar
      guardarRegistro={guardarRegistro} 
      titulo={titulo}
      descripcion={descripcion}
      responsable={responsable}
      prioridad={prioridad}
      setNuevoTitulo={setNuevoTitulo} 
      setNuevaDescripcion={setNuevaDescripcion}
      setNuevoResponsable={setNuevoResponsable}
      setNuevaPrioridad={setNuevaPrioridad}/>
      <Actualizar 
      guardarRegistro={guardarRegistro} 
      titulo={titulo2}
      descripcion={descripcion2}
      responsable={responsable2}
      prioridad={prioridad2}
      setNuevoTitulo={setNuevoTitulo2} 
      setNuevaDescripcion={setNuevaDescripcion2}
      setNuevoResponsable={setNuevoResponsable2}
      setNuevaPrioridad={setNuevaprioridad2}/>
      <Tareas tareas={tareas} eliminarClick={eliminarClick} editarClick={editarClick}/>
    </div>
  );
}

export default App;