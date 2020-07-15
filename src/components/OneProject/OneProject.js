import React from 'react'
import './style.css'

class OneProject extends React.Component{
    constructor(props){
        super(props);
        this.Save = this.Save.bind(this);
        this.showEditForm=this.showEditForm.bind(this);
      }
      
      Save(event){
          event.preventDefault();
          var name=this.refs.ename.value;
          var description=this.refs.edescription.value;
          if(name=='' || description==''){
              alert("Введите все данные");
              return;   
          }
          this.props.editProject(this.props.index, {name, description});
          this.refs.form.style.display="none";
      }
      //показываю кнопку
      showEditForm(){
        this.refs.form.style.display="block";
      }
      render(){
        var classtoggle=this.props.project.done ?  'done':  'undone';
    return (
    <div className="wrapper">
        <div className="project">
            <div onClick={()=>this.props.markToDone(this.props.index)} className={classtoggle}>
                <div className="title-name">Name: </div>
                <div className="item-name"> {this.props.project.name}</div>
                <div className="title-description">Description:</div>
                <div className="item-description"> {this.props.project.description}</div>
            </div>
            <button onClick={()=>this.props.removeProject(this.props.index)}>Delete</button>
            <button onClick={this.showEditForm}>Edit</button>
        </div>
        <div className="project-form">
            <form ref="form" onSubmit={this.Save} className="form-update">
                <fieldset>               
                <input type="text" ref="ename" placeholder="name" /> <br />
                <input type="text" ref="edescription" name="description" placeholder="description" id="description"/> <br />
                <input type="submit" value="Save Project"/> 
                </fieldset>
            </form>
        </div>
    </div> )}
}
export default OneProject;