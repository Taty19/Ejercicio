import React, { useState } from "react";
import ItemTarea from "./ItemTarea";
import "../ListaTareas.css";

function ListaTareas() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      nombre: "Aprender React",
      desc: "Instalar NodeJS, npm y Visual Studio code",
      encargado: "Juan",
    },
    {
      id: 2,
      nombre: "Construir una aplicación",
      desc: "Crear por medio de consola un proyecto de React",
      encargado: "Luis",
    },
  ]);

  const [nuevoTexto, setNuevoTexto] = useState("");
  const [nuevadesc, setNuevadesc] = useState("");
  const [nuevoencargado, setNuevoencargado] = useState("");

  const agregarTarea = () => {
    if (nuevoTexto.trim() !== "") {
      setTareas([
        ...tareas,
        {
          id: tareas.length + 1,
          nombre: nuevoTexto,
          desc: nuevadesc,
          encargado: nuevoencargado,
        },
      ]);
      setNuevoTexto("");
      setNuevadesc("");
      setNuevoencargado("");
    }
  };

  return (
    <div className="contenedor">
      <h2>Lista de Tareas</h2>
      {tareas.map((tarea) => {
        return <ItemTarea key={tarea.id} tarea={tarea} />;
      })}

      <h3>Agregar Nueva Tarea</h3>
      <div className="formulario">
        <input
          type="nombre"
          placeholder="Nombre"
          value={nuevoTexto}
          onChange={(e) => setNuevoTexto(e.target.value)}
        />
        <input
          type="desc"
          placeholder="Descripción"
          value={nuevadesc}
          onChange={(e) => setNuevadesc(e.target.value)}
        />
        <input
          type="encargado"
          placeholder="Encargado"
          value={nuevoencargado}
          onChange={(e) => setNuevoencargado(e.target.value)}
        />
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
    </div>
  );
}

export default ListaTareas;
