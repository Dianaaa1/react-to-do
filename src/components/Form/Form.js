import React from 'react'
import './style.css'

class Form extends React.Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
      }
      
      onSubmit(event){
          event.preventDefault();
          var name=this.refs.name.value;
          var description=this.refs.description.value;
          if(name!==''  && description!==''){
            this.props.addItem({ name, description});
            this.refs.form.reset();
          }
          else alert("Введите все данные");         
      }
      render(){
    return (
    <div className="wrapper">
        <div className="project-form">
            <form ref="form" onSubmit={this.onSubmit} class="form">
                <fieldset>
                <label for="name"> Name:</label>
                <input type="text" ref="name" placeholder="name" /> <br />
                <label for="description"> Description:</label>
                <input type="text" ref="description" name="description" placeholder="description" id="description"/> <br />
                <input type="submit" value="Add Project"/> 
                
                </fieldset>
            </form>
        </div>
        <div classN="projects" id="projects">
        </div>
    </div> )}
}
export default Form;