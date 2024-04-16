import React, {useState} from 'react'

const Todo = () => {
    const[todos, setTodos] = useState([
        {id:1, todo: 'Acheter du lait'},
        {id:2, todo:'Acheter du pain'},
        {id:3, todo: 'Récupérer le R1 au garage'}
    ])
    const myTodos = () => {
        return (
          <li className='list-group-item' key={Todo.id}>{Todo.todo}</li>
        )
      }
    console.log(todos.lenght);
  return (
    <div>
        <h1 >Liste des tâches à faire : </h1>
        <ul>{myTodos}</ul>
    </div>
  )
}

export default Todo
