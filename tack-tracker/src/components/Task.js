import { FaTimes } from 'react-icons/fa'
import React from 'react'
import PropTypes from 'prop-types'

const Task = ({ task }) => {
  return (
    <div className='task'>
        <h3>
            {task.text} 
            <FaTimes style={{color: 'red', cursor: 'pointer'}} />
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

Task.propTypes = {
    task: PropTypes.object,
}

export default Task
