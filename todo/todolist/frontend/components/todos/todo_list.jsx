import React from 'react';
import { TodoListItem } from '../todo_list/todo_list_item';
import TodoForm from '../todo_list/todo_form';
import { receiveTodo } from '../../actions/todo_actions';

export default (props) => (
    <div>
        <h3>Todo List goes here!</h3>
        {TodoListItem(props)};
        <TodoForm receiveTodo={props.receiveTodo} />
    </div>
)

