import React from 'react'

export default function ToDoCard(props) {
  return (
    <div className='col-12 col-sm-6'>
        <div className="card mb-3">
            <div className="card-body bg-warning">
                <h5 className='card-title text-center '> {props.task} </h5>
            </div>
        </div>
    </div>
  )
}