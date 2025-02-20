import React from "react";
import "../ItemTarea.css";

function ItemTarea(props) {
  return (
    <div className="tarea">
      <h4>{props.tarea.nombre}</h4>
      <p>Descripción: {props.tarea.desc}</p>
      <p>Encargado: {props.tarea.encargado} </p>
      <input className="checkbox" type="checkbox" />
    </div>
  );
}

export default ItemTarea;
