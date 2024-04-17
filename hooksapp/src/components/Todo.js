import React, {useState} from 'react'
import AddToDoForm from './AddToDoForm'
import { v4 as uuidv4 } from 'uuid'

const Todo = () => {
    const[todos, setTodos] = useState([
        {id:1, todo: 'Acheter du lait'},
        {id:2, todo:'Acheter du pain'},
        {id:3, todo: 'Récupérer le R1 au garage'}
    ])
    const myTodos = todos.map( todo => {
        return (
            <li className='list-group-item' key={todo.id}>{todo.todo}</li>
        )
    })
    // console.log(todos.lenght);
    const[id,setID]= useState(uuidv4())
    const addNewTodo = (newTodo) => {
    setTodos([...todos,{
        id:({id} ) ,
        todo: newTodo
    }])
}

  return (
    <div>
        <h1 >Liste des tâches à faire : </h1>
        <ul>
            {myTodos}
        </ul>
        <AddToDoForm addNewTodo={addNewTodo}/>
        <button
            class="btn btn-primary"
            onClick={() =>
            setTodos([...todos, { id: ( uuidv4() ), todo: "ne pas oublier la to do list" }])
            }>
            Rajouter une tâche
        </button>
    </div>
  )
}

export default Todo
