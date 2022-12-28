import PageTitle from "../UI/PageTitle/PageTitle"
import Button from "../UI/Button/Button"
import style from "./Tasks.module.css"
import Modal from "../UI/Modal/Modal"
import { useState } from "react"
import TaskForm from "./TaskForm"
import TasksTable from "./TasksTable/TasksTable"

const Tasks = () => {

    const [isNewTaskModalOpen, setIsNewTaskModalOpen] = useState(false);

    return (
        <>
            <div className={style["tasks-header"]}>
                <PageTitle count={0} title="Task"/>
                <Button onClick={() => setIsNewTaskModalOpen(true)}>New Task</Button>
            </div>
            <TasksTable />
            <Modal isOpen={isNewTaskModalOpen} setIsOpen={setIsNewTaskModalOpen}>
                <TaskForm />
            </Modal>
        </>
    )
}

export default Tasks;