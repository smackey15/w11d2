import React from 'react';
import { receiveTodo } from '../../actions/todo_actions';
import Util from '../util';

class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { id: Util.uniqueId(), title: "", body: "", done: false }
        this.updateTitle.bind(this);
        this.updateBody.bind(this);
        this.updateDone.bind(this);
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

    render() {

    }
}
