import { useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if (!text) {
            alert('please add task')
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }
    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>
                    Task
                </label>
                <input type='text' placeholder="add task" value={text} onChange={(e) =>
                    setText(e.target.value)
                }>
                </input>
            </div>
            <div className="form-control ">
                <label>
                    Day and time
                </label>
                <input type='text' placeholder="add date and time" value={day} onChange={(e) =>
                    setDay(e.target.value)
                }>
                </input>
            </div>
            <div className="form-control form-control-check">
                <label>
                    Reminder
                </label>
                <input type='checkbox' checked={reminder} value={reminder} onChange={(e) =>
                    setReminder(e.currentTarget.checked)}>
                </input>
            </div>
            <input type='submit' value='save task' className="btn btn-block"></input>
        </form>
    )
}

export default AddTask