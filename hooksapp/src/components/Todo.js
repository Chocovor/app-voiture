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
    const [warning, setWarning] = useState(false)
    const warningMsg = warning &&  <div className="alert alert-danger" role='alert'>Veuillez indiquer un Todo</div>
    const addNewTodo = (newTodo) => {
        const newID = uuidv4()
        if(newTodo !== ''){

            warning && setWarning(false)

            setTodos([...todos,{
                id: newID ,
                todo: newTodo
            }])
        }else{
            setWarning(true)
        }
    }
console.log(todos)
  return (
    <div>
        {warningMsg}
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
