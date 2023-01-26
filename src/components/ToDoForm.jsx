import React from 'react'

export default function ToDoForm(props) {
  return (
    <form action="" className='my-3 w-50 container' onSubmit={props.handleFormSubmit}>
        <input type="text" name='task' className='form-control fs-1' placeholder='Enter Task Here'/>
        <input type="submit" value="Add New Task" className='btn btn-primary mt-3 w-100 fs-1' />
    </form>
  )
}