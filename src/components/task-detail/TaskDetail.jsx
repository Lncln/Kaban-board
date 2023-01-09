import css from './TaskDetail.module.css'
import { useRouteMatch, Link } from 'react-router-dom'
import { LIST_TYPES, LIST_COPY, LIST_COLORS } from '../../config'
import { formatDate } from '../../utils'
import { useState } from 'react'


const TaskDetail = props => {
	const {tasks, setTasks} = props
	const match = useRouteMatch()
	const {taskId} = match.params

	const [value, setValue] = useState('');
	const task = tasks.find(task => task.id === taskId)
	const [isOnfocus, setOnFocus] = useState(false)


	function changeDescription(e) {
		setTasks(tasks.map(task => {
            if (task.id === taskId) {
                return {...task, description: value};
            } else {
                return task;
            }
        }));
		setOnFocus(false)
	}


	return (
		<div className={css.wrapper}>
		<Link to='/' className={css.homeLink}>&#10005; Back</Link>
		{task ? (
			<>
				<div className={css.header}>
					<h2 className={css.title}>
						{task.title}
					</h2>
				</div>
				<p>
				{isOnfocus ?  <textarea value={value} onChange={event => setValue(event.target.value)} onBlur={changeDescription} placeholder='Enter description' cols="30" rows="10" autofocus={true} /> : <span onClick={() => setOnFocus(true)}>{value || 'This task has no description'}</span>}
				</p>
			</>
		) : (
			<h2>
				Task {taskId} not found
			</h2>
		)}
		</div>
	)
}

export default TaskDetail
