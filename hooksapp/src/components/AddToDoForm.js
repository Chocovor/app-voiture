import React, {useState}from 'react'

const AddToDoForm = ({addNewTodo}) => {
    const[addTodo, setAddTodo] = useState('')

const handleTodo = (e) => {
    e.preventDefault()
    addNewTodo(addTodo)
    e.target.reset()
}
console.log(addTodo)
  return (
    <form className="mt -4" onSubmit={handleTodo}>
      <div className="card card-body">
        <div className="form_group">
            <label>Ajouter Todo</label>
            <input className='form-control' type='text' onChange={(e)=>setAddTodo(e.target.value)}/>
            <input className='btn btn-success mt-4' type='submit' value='Submit' />
        </div>
      </div>
    </form>
  )
}
export default AddToDoForm