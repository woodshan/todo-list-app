import style from "./TasksTable.module.css"
import TaskRow from "./TaskRow"

const TasksTable = () => {
    return (
        <div className={style["tasks-table-container"]}>
            <table className={style["tasks-table"]}>
                <thead>
                    <tr>
                        <th>Status</th>
                        <th>Title</th>
                        <th>Description</th>
                        <th>Created at</th>
                        <th>Time</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <TaskRow task={{title: "Task0", createdAt: new Date(), description:"Hello"}}/>
                    <TaskRow task={{title: "Task1", createdAt: new Date(), description:"Hello"}}/>
                    <TaskRow task={{title: "Task3", createdAt: new Date(), description:"Hello"}}/>
                </tbody>
            </table>
        </div>
    );
};

export default TasksTable;