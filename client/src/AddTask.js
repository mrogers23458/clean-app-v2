import Grassfooter from "./components/Grassfooter"

export default function AddTask () {
    return (
        <div className="task-add-box">
            <div className="task-add-header-box">
                <h1 className="task-add-header">Add an add a task to "area"</h1>
            </div>
            <form className="add-task-form-box">
                <label className="add-task-name-lab label">Name</label>
                <input className="add-task-name-inp input" type="text"></input>
                <label className="add-task-name-lab label">Description</label>
                <input className="add-task-name-inp input" type="text"></input>
                <button className="add-task-btn btn">Add task</button>
            </form>
            <Grassfooter />
        </div>
    )
}