import PropTypes from 'prop-types';
import { Project } from './Project';
import ProjectCard from './ProjectCard';
import ProjectForm from './ProjectForm';
import { useState } from 'react';


function ProjectList({ projects, onSave }) {
  const [projectBeingEdited, setProjectBeingEdited] = useState();
  const handleEdit = (project) => {
     setProjectBeingEdited(project);
  };
  const handleCancel = () => {
    setProjectBeingEdited(null);
  };
  const items = projects.map(project => (
      <div key={project.id} className="cols-sm">
       {project === projectBeingEdited ? (
            <ProjectForm onSave={onSave} onCancel={handleCancel}/>
         ) : (
           <ProjectCard project={project} onEdit={handleEdit} />
         )}
      </div>
    ));
    return <div className="row">{items}</div>;
}

ProjectList.propTypes = {
    projects: PropTypes.arrayOf(PropTypes.instanceOf(Project)).isRequired,
    onSave: PropTypes.func.isRequired
};

export default ProjectList;
