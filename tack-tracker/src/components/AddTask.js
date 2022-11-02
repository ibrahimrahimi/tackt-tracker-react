import React from 'react'
import { useState } from 'react' 


const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        console.log('submited')

        if(!text) {
            alert('Task name could not be empty!')
            return
        }

        onAdd({ text, day, reminder })

        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="text">Task ame</label>
                <input 
                type="text" 
                placeholder='Add task name'
                value={text}
                onChange={(e) => setText(e.target.value)}
                />
            </div>
            <div className="form-control">
                <label htmlFor="day">Day & Time</label>
                <input 
                type="text" 
                placeholder='Add day & time'
                value={day}
                onChange={(e) => setDay(e.target.value)}
                />
            </div>
            <div className="form-control form-control-check">
                <label htmlFor="reminder">Set reminder</label>
                <input 
                type="checkbox" 
                name="reminder" 
                id="reminder" 
                value={reminder}
                onChange={(e) => setReminder(e.currentTarget.checked)}
                />
            </div>
            <input className='btn btn-block' type="submit" value="Save" />
        </form>
    )
}

export default AddTask