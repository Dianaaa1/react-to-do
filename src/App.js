import React from 'react'
import Form from './components/Form/Form'
import ProjectsList from './components/ProjectsList/ProjectsList'


 class Projects extends React.Component{
  constructor (props){
    super(props);
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.editProject=this.editProject.bind(this);
    this.markToDone = this.markToDone.bind(this);
    this.state={projects: this.props.projects};
  }
  
  //создаем
   addItem(projeect){
    this.props.projects.push({
      id: Math.random(),
      name: projeect.name,
      description: projeect.description,
      done: false
    });
    this.setState({projects: this.props.projects});
    }
    editProject(i, project){
      this.props.projects.splice(i, 1, project);
      this.setState({projects: this.props.projects});
    }
   removeItem(index){
      this.props.projects.splice(index, 1);
      this.setState({projects: this.props.projects});
    }
    markToDone(index){
      var done=this.props.projects[index].done;
      this.props.projects[index].done=!done;
      this.setState({projects: this.props.projects});
    }
    render(){
      return(
        <div class="main">
        <Form addItem={this.addItem} editProject={this.editProject}/>
        <ProjectsList projects={this.props.projects} editProject={this.editProject} markToDone={this.markToDone} removeProject={this.removeItem} ></ProjectsList>
        </div>
      )
    }
  }
  export default Projects

