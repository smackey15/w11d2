import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from "./frontend/store/store";
import { receiveTodo, receiveTodos, removeTodo } from "./frontend/actions/todo_actions";
import Root from "./frontend/components/root"

document.addEventListener('DOMContentLoaded', () => {
    const store = configureStore();
    ReactDOM.render(<Root store={ store }/>, document.getElementById('root'));
    window.store = store;
    window.receiveTodos = receiveTodos;
    window.receiveTodo = receiveTodo;
    window.removeTodo = removeTodo;
});