import React from 'react';
// import { receiveTodo } from '../../actions/todo_actions';
import Util from '../util';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: Util.uniqueId(), title: "", body: "", done: false }
        this.updateTitle = this.updateTitle.bind(this);
        this.updateBody = this.updateBody.bind(this);
        this.updateDone = this.updateDone.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    updateTitle(e) {
        this.setState({ title: e.target.value })
    }

    updateBody(e) {
        this.setState({ body: e.target.value })
    }

    updateDone(e) {
        this.setState({ done: e.target.value })
    }
    
    handleSubmit(e) {
        e.preventDefault();
        this.props.receiveTodo(this.state);
        this.setState({ id: Util.uniqueId(), title: "", body: "", done: false });
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title
                    <input type="text" value={this.state.title} onChange={this.updateTitle}/>
                </label>
                <label>Body
                    <input type="text" value={this.state.body} onChange={this.updateBody}/>
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

export default TodoForm;
