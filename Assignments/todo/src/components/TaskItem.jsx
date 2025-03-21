import { useState } from "react";

function TaskItem({ task, deleteTask, toggleComplete, updateTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [newTitle, setNewTitle] = useState(task.title);

    const handleUpdate = () => {
        if (newTitle.trim() === "") return;
        updateTask(task.id, newTitle);
        setIsEditing(false);
    };

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-3"></div>
                    <div className="col-md-6 rounded p-1 mt-1">
                        <div className={`d-flex justify-content-between align-items-center p-2 border rounded mb-2 ${task.completed ? "bg-success text-white" : "bg-light"}`}>
                            <div className="d-flex align-items-center">
                                <input type="checkbox" checked={task.completed} onChange={() => toggleComplete(task.id, !task.completed)} className="form-check-input me-2" />

                                {isEditing ? (
                                    <input
                                        type="text"
                                        className="form-control me-2"
                                        value={newTitle}
                                        onChange={(e) => setNewTitle(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleUpdate()}
                                    />
                                ) : (
                                    <span className={`ms-2 ${task.completed ? "text-decoration-line-through" : ""}`}>{task.title} ({task.status})</span>
                                )}
                            </div>

                            <div>
                                {isEditing ? (
                                    <>
                                        <button className="btn btn-success btn-sm me-2" onClick={handleUpdate}>Save</button>
                                        <button className="btn btn-secondary btn-sm me-2" onClick={() => setIsEditing(false)}>Cancel</button>
                                    </>
                                ) : (
                                    <button className="btn btn-warning btn-sm me-2" onClick={() => setIsEditing(true)}>Edit</button>
                                )}

                                <button className="btn btn-danger btn-sm" onClick={() => deleteTask(task.id)}>Delete</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3"></div>
                </div>
            </div>
        </>
    );
}

export default TaskItem;

