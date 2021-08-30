import React, { useContext, useState} from 'react';
import { TodoContext } from '../../TodoContext';
import './TodoForm.css'

function TodoForm(){
  const { addTodo, setOpenModal } = useContext(TodoContext);
  const [newTodoValue, setNewTodoValue] = useState('');

  const onCancel = () => {
    setOpenModal(false);
  }

  const onChange = (e) => {
    setNewTodoValue(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(newTodoValue);
    setOpenModal(false);
  }

  return (
    <form onSubmit={onSubmit}>
      <h2>New Todo</h2>
      <textarea 
        placeholder="Crea una nueva actividad"
        value={newTodoValue}
        onChange={onChange}
      />
      <div className="TodoForm-buttonContainer">
        <button 
          className="TodoForm-button TodoForm-button-cancel"
          onClick={onCancel}
        >
          Cancelar
        </button>
        <button 
          className="TodoForm-button TodoForm-button-add"
          type="submit"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };