import { MOCK_PROJECTS } from './MockProjects';
import ProjectList from './ProjectList';
import { useState } from 'react';

function ProjectsPage() {
    const [projects, setProjects] = useState(MOCK_PROJECTS);
    const saveProject = (project) => {
        let updatedProjects = projects.map((p) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
    };

    return (
     <>
        <h1>Projects</h1>
        <ProjectList onSave={saveProject} projects={projects} />
    </>
 );
}

export default ProjectsPage;