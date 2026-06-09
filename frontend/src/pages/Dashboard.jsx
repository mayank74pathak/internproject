import { useEffect, useState } from "react";
import API from "../api/axios";

function Dashboard() {
  const [tasks, setTasks] = useState([]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const token = localStorage.getItem("token");

  const fetchTasks = async () => {
    try {
      const res = await API.get("/tasks", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setTasks(res.data.tasks);
    } catch (error) {
      console.log(error);
    }
  };

  const createTask = async (e) => {
    e.preventDefault();

    try {
      await API.post(
        "/tasks",
        {
          title,
          description,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setTitle("");
      setDescription("");

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteTask = async (id) => {
    try {
      await API.delete(`/tasks/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchTasks();
    } catch (error) {
      console.log(error);
    }
  };

const updateTask = async (task) => {
  const newTitle = prompt(
    "Enter new title",
    task.title
  );

  const newDescription = prompt(
    "Enter new description",
    task.description
  );

  const newStatus = prompt(
    "Enter status (Pending/Completed)",
    task.status
  );

  if (!newTitle) return;

  try {
    await API.put(
      `/tasks/${task._id}`,
      {
        title: newTitle,
        description: newDescription,
        status: newStatus,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    fetchTasks();
  } catch (error) {
    console.log(error);
  }
};

  const logout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  useEffect(() => {
    if (!token) {
      window.location.href = "/";
      return;
    }

    fetchTasks();
  }, []);

  return (
    <div className="dashboard">
      <div className="navbar">
        <h2>Task Manager</h2>

        <button
          className="logout-btn"
          onClick={logout}
        >
          Logout
        </button>
      </div>

      <div className="task-form">
        <h3>Create Task</h3>

        <form onSubmit={createTask}>
          <input
            placeholder="Task Title"
            value={title}
            onChange={(e) =>
              setTitle(e.target.value)
            }
          />

          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) =>
              setDescription(e.target.value)
            }
          />

          <button type="submit">
            Add Task
          </button>
        </form>
      </div>

      <div className="tasks-section">
        <h3>My Tasks</h3>

        {tasks.length === 0 ? (
          <p>No tasks found.</p>
        ) : (
          tasks.map((task) => (
            <div
              className="task"
              key={task._id}
            >
              <h4>{task.title}</h4>

              <p>{task.description}</p>

              <p>
                Status:
                <strong>
                  {" "}
                  {task.status}
                </strong>
              </p>

              <div className="task-actions">
                  <button
    className="edit-btn"
    onClick={() => updateTask(task)}
  >
    Edit
  </button>
                <button
                  className="delete-btn"
                  onClick={() =>
                    deleteTask(task._id)
                  }
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default Dashboard;