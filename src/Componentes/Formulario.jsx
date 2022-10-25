import React, { useState } from 'react'

const Formulario = () => {
    const [datos,setDatos]= useState({nombre:"",descripcion:""})
    const [lista,setLista]= useState([])

const agregarDatos = (datos)=>{
    setLista([...lista,datos])
}

const handleChange = (e) => {
        setDatos({
            ...datos,
            [e.target.name]:e.target.value
        })
    }
const handleSubmit = (e)=>{
        e.preventDefault()
        
       
        if (datos.nombre === ""&& datos.descripcion=== ""){
            console.log("no hay datos ")
        }else{
            agregarDatos({
                nombre: datos.nombre,
                descripcion: datos.descripcion,
                id: Date.now()
            })
        }
        
        setDatos({nombre:"",descripcion:""})

    }
const eliminar =(id)=>{
 setLista(lista.filter((tarea)=>tarea.id !== id))
}

const montarDatos = (tarea)=>{
    setDatos({
        nombre:tarea.nombre,
        descripcion:tarea.descripcion,
        id:tarea.id
    })
}

const actualizar = ()=>{
    setLista(lista.map((tarea)=>{
        if(tarea.id === datos.id){
            console.log("son iguales")
            return {
                ...tarea,nombre:datos.nombre,
                descripcion:datos.descripcion
            }
        }else{
            return tarea
        }
    }))
    setDatos({nombre:"",descripcion:""})
}
  return (
    <div>
        <h3>App de Tareas</h3>
        <form onSubmit={handleSubmit}>
             <input 
             type="text" 
             name='nombre'
            onChange={handleChange} 
            value={datos.nombre}/>
             <input 
             type="text" 
             name='descripcion'
              onChange={handleChange} 
              value={datos.descripcion} />
             <button>Guardar</button>

        </form>
             <button onClick={actualizar}>Actualizar</button>
        <div>
            <ul>
            {lista.map((tarea,index)=> (
               
               <li key={index}>
                    {tarea.nombre}-{tarea.descripcion} 
                    <button onClick={()=>eliminar(tarea.id)} >x</button>
                    <button onClick={()=>montarDatos(tarea)} >O</button>


                </li>

                ))}
          </ul>
        </div>
       
         </div>
  )
}

export default Formulario 