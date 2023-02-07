import { useEffect } from 'react';
import { db } from './Firebase-config'
import '/app.css';
import { conllection, getDocs} from 'firebase/firestore';
import { async } from '@firebase/util';

function App() {
  const tareaColeccionRef= collection(db, "tareas");

  useEffect(()=>{
    async function getTareas(){
      const data = await getDocs(tareaColeccionRef)
      console.log(data);
    }
    getTareas();
  })

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
