import { useState } from 'react'
import { LIST_TYPES } from '../../config'
import { Link } from 'react-router-dom'
import FormAddNewTask from '../forms/FormAddNewTask'
import ChangeProgress from '../changeProgress/ChangeProgress'
import css from './List.module.css'


const List = props => {
	const {title, type, tasks, addNewTask, setTasks, fullTaskList, lists} = props
	const [isFormVisible, setFormVisible] = useState(false)

	function handleClick() {
		setFormVisible(!isFormVisible)
	}
	

	const [isChangeVisible, setChange] = useState(false)

	return (
		<div className={css.list}>
			<h2 className={css.listTitle}>{title}</h2>
			{tasks.map(task => {
				return (
					<Link to={`/tasks/${task.id}`} className={css.taskLink}>
						<div key={task.id} className={css.task}>
							{task.title}
							
						</div>
					</Link>
				)
			})}
			{type === LIST_TYPES.BACKLOG && isFormVisible && (
			<FormAddNewTask  addNewTask={addNewTask} setFormVisible={setFormVisible} />
			)}
			{type === LIST_TYPES.READY && isFormVisible && (
			<FormAddNewTask  addNewTask={addNewTask} setFormVisible={setFormVisible} />
			)}		
			{type === LIST_TYPES.IN_PROGRESS && isFormVisible && (
			<FormAddNewTask  addNewTask={addNewTask} setFormVisible={setFormVisible} />
			)}
			{type === LIST_TYPES.FINISHED && isFormVisible && (
			<FormAddNewTask  addNewTask={addNewTask} setFormVisible={setFormVisible} />
			)}
			{type === LIST_TYPES.BACKLOG  && (
			<button className={css.addButton} onClick={handleClick}>{isFormVisible ? '' : '+Add card'}</button>
			)}
			{type !== LIST_TYPES.BACKLOG  && isChangeVisible && (
			<ChangeProgress  tasks={fullTaskList} setTasks={setTasks} title={title} type={type} lists={lists} setChange={setChange} />
			)}
			{type !== LIST_TYPES.BACKLOG  && (
			<button className={css.addButton} onClick={() => setChange(true)}>{isChangeVisible ? '' : '+Add card'}</button>
			)}
		</div>
	)
}

export default List
