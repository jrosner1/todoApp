import React, {Component} from "react"

class InputTodo extends Component{
    //Holds state because it gets it from the user so this should be a class component.
    state = {
        title: ""
    }
    // if you wanted to have multiple fields you would need to do:
    //this.setState({[e.target.name]: e.target.value});
    onChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTodoProps(this.state.title)
        this.setState({
            title: ""
        });
    }
    render() {
        return(
            <form onSubmit={this.handleSubmit} className="form-container">
                <input type="text" 
                className="input-text"
                placeholder="Add todo..." 
                value={this.state.title} 
                onChange={this.onChange} 
                name="title"/>
                <input type="submit" 
                className="input-submit"
                value="Submit"/>
            </form>
        )
    }
}
export default InputTodo