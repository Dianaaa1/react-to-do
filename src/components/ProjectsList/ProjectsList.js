import React from 'react'
import OneProject from '../OneProject/OneProject'


class AllProjects extends React.Component {
    render(){
        var projects = this.props.projects.map((project,index)=>{
            return(
                <OneProject index={index} projects={projects} project={project} editProject={this.props.editProject} markToDone={this.props.markToDone} removeProject={this.props.removeProject}></OneProject>
            )})
        return(
        <div className="projectlist">Your project: <br/> {projects}</div>
        )
    }

}

export default AllProjects