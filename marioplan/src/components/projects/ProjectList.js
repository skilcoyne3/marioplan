import React from 'react';
import ProjectSummary from './ProjectSummary';
import { Link } from 'react-router-dom';

const ProjectList = ({projects}) => {
  return (
    <div className="project-list section">
      { 
        // if there's a project then map
        projects && projects.map(project => {
          return ( 
            <Link to={`/project/${project.id}`} key={project.id}>
              <ProjectSummary project={project} key={project.id} />  
            </Link>
          );
        })
      }
    </div>
    
  )
};

export default ProjectList;
