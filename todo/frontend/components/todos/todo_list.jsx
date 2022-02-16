import React from 'react';
import { render } from 'react-dom';
import { TodoListItem } from '../todo_list/todo_list_item';

export default (props) => (
    <div>
        <h3>Todo List goes here!</h3>
        {TodoListItem(props)};
    </div>
)

