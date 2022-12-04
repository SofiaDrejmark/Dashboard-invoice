import React from "react";
import { useAppContext } from "../context/AppContext";

function ProjectList() {
  const { tasks, projects, deleteProject } = useAppContext();


const sort = (project: any) => {
const sortResult: any = tasks.filter((task:any) => task.projectId === project.id)
return sortResult.length
}


  return (
    <div className="taskListDiv">
      <div className="top">
        <h3>Project List</h3>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>Project Name: </th>
              <th>Tasks in project</th></tr>
            </thead>
            <tbody>
              {projects.map((project: any) => (
              <tr key={project.id}>
              <td>{project.project}</td>
              <td>{sort(project)}</td> <button onClick={() => deleteProject(project.id)}>Delete</button>
            </tr>
              ))}

            </tbody>
          </table>
        </div>
      
          </div>
  );
}

export default ProjectList;
