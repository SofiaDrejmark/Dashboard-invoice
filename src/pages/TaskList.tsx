import { useAppContext } from "../context/AppContext";

function TaskList() {
  const { tasks, projects, deleteTask } = useAppContext();

  return (
    <div className="taskListDiv">
      <div className="top">
        <h3>Task List</h3>
      </div>

      <table>
        {tasks.map((task) => {
          const project: any = projects.find(
            (project) => project.id === task.projectId
          );
          return (
            <tr>
              <td className="taskTd">
                Task Name: {task.task} <br />
                From project: {project.project}
                <br />
                <button onClick={() => deleteTask(task.id)}>Delete</button>{" "}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default TaskList;
