import { useContext, useState } from "react";
import { TasksContext } from "../../../Contexts/TasksContext";
import useTimeParser from "../../../Hooks/useTimeParser";
import Button from "../../UI/Button/Button";
import Modal from "../../UI/Modal/Modal";
import TaskForm from "../TaskForm";
import TaskTimer from "../TaskTimer/TaskTimer";

const TaskRow = ({task, index}) => {

    const [isEditTaskModalOpen, setIsEditTaskModalOpen] = useState(false)
    const [isTimerModalOpen, setIsTimerModalOpen] = useState(false)

    const {removeTask, toggleTaskIsDone} = useContext(TasksContext)

    const {parseSecondsToHms} = useTimeParser()

    const handleDeleteTask = () => {
        removeTask(index);
    }

    const handleChangeStatus = (event) => {
        const value = event.target.checked;
        toggleTaskIsDone({taskIndex: index, isDone: value})
    }

    return(
        <>
            <tr>
                <td>
                    <input type="checkbox" checked={task.isDone} onChange={handleChangeStatus}/>
                </td>
                <td>
                    {task.title}
                </td>
                <td>
                    {task.description}
                </td>
                <td>
                    {task.createdAt.toLocaleDateString()}
                </td>
                <td>
                    {task.time && parseSecondsToHms(task.time)}
                </td>
                <td style={{display:"flex", gap:4, justifyContent: "end"}}>
                    <Button onClick={() => setIsTimerModalOpen(true)}>Launch Timer</Button>
                    <Button variant="danger" onClick={handleDeleteTask}>Delete</Button>
                    <Button onClick={() => setIsEditTaskModalOpen(true)}>Edit</Button>
                </td>
            </tr>
            <Modal isOpen={isEditTaskModalOpen} setIsOpen={setIsEditTaskModalOpen} title={task.title}>
                <TaskForm closeModal={() => setIsEditTaskModalOpen(false)} value={{title:task.title, description: task.description}} index={index}/>
            </Modal>
            <Modal isOpen={isTimerModalOpen} setIsOpen={setIsTimerModalOpen} title={task.title}>
                <TaskTimer index={index} onCloseModal={() => setIsTimerModalOpen(false)}/>
            </Modal>
        </>
    )
};

export default TaskRow;