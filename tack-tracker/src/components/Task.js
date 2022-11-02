import { FaTimes } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task, onDelete }) => {
  return (
    <div className='task'>
        <h3>
            {task.text} 
            <FaTimes 
            style={{color: 'red'}} 
            onClick={() => onDelete(task.id)} />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.object,
}

export default Task

