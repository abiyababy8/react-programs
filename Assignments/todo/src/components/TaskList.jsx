import { useState, useEffect } from "react";
import axios from "axios";
import TaskForm from "./TaskForm";
import TaskItem from "./TaskItem";
import { toast, ToastContainer } from "react-toastify";

const API_URL = "http://localhost:5000/tasks";

function TaskList() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        fetchTasks();

        const interval = setInterval(() => {
            console.log("Checking for overdue tasks...");
            updateOverdueTasks();
        }, 10000); // Runs every 30 seconds

        return () => clearInterval(interval);
    }, []);


    const fetchTasks = async () => {
        const response = await axios.get(API_URL);
        setTasks(response.data);
    };

    const addTask = async (task) => {
        await axios.post(API_URL, task);
        fetchTasks();
    };

    const deleteTask = async (id) => {
        await axios.delete(`${API_URL}/${id}`);
        fetchTasks();
    };

    const toggleComplete = async (id, completed) => {
        await axios.patch(`${API_URL}/${id}`, {
            completed,
            status: completed ? "done" : "pending",
        });
        fetchTasks();
    };


    const updateOverdueTasks = async () => {
        const response = await axios.get(API_URL);
        const now = new Date();

        response.data.forEach(async (task) => {
            if (!task.completed && new Date(task.dueTime) < now && task.status !== "pending") {
                await axios.patch(`${API_URL}/${task.id}`, { status: "pending" });
                showNotification(task.title);
            }
        });

        fetchTasks();
    };

    const showNotification = (taskTitle) => {
        toast.warning(`Your task "${taskTitle}" is overdue!`, {
            position: "top-right",
            autoClose: 10000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
        });
    };

    const updateTask = async (id, newTitle) => {
        await axios.patch(`${API_URL}/${id}`, { title: newTitle });
        fetchTasks();
    };

    return (
        <div>
            <TaskForm addTask={addTask} />
            <div className="container">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8 border border-secondary p-1 rounded">
                        {tasks.map((task) => (
                            <TaskItem key={task.id} task={task} deleteTask={deleteTask} toggleComplete={toggleComplete} updateTask={updateTask} />
                        ))}
                    </div>
                    <div className="col-md-2"></div>
                </div>
            </div>
            <ToastContainer position="top-right" autoClose={30000} />
        </div>

    );
}

export default TaskList;
