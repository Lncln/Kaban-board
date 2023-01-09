import React from "react"
import css from '../task-detail/TaskDetail.module.css'
import { LIST_TYPES, LIST_COPY, LIST_COLORS } from '../../config.js'

function ChangeProgress({tasks, setTasks, type, lists, title, setChange}) {


    function handleChange(e) {
        setTasks(tasks.map(task => {
            // console.log(e.target.value)
            if (e.target.value === task.title) {
                return {...task, status: type};
            } else {
                return task;
            }
        }));
        setChange(false)
	}

    if (type === LIST_TYPES.READY) {
        return (<>
            <select onChange={handleChange} className={css.select}>
            <option value={null}>
            </option>}
            {tasks.map(task => {
                if (task.status === lists[0]) {
                    // console.log(task.title)
                    return (<>
                        <option value={task.title}>
                            {task.title}
                        </option>
                    </>
                    )
                }
            })}
            </select>
        </>
        )
    }

    if (type === LIST_TYPES.IN_PROGRESS) {
        return (<>
            <select value={type} onChange={handleChange} className={css.select}>
            <option value={null}> 
            </option>
            {tasks.map(task => {
                if (task.status === lists[1]) {
                    // console.log(task.title)
                    return (<>
                        <option value={task.title}>
                            {task.title}
                        </option>
                    </>
                    )
                }
            })}
            </select>
        </>
        )
    }
    
    if (type === LIST_TYPES.FINISHED) {
        return (<>
            <select value={type} onChange={handleChange} className={css.select}>
            <option value={null} selected={true} label=''>
            </option>
            {tasks.map(task => {
                if (task.status === lists[2]) {
                    // console.log(type)
                    return (<>
                        <option value={task.title}>
                            {task.title}
                        </option>
                        </>
                    )
                }
            })}
            </select>
        </>
        )
    }
}


export default ChangeProgress