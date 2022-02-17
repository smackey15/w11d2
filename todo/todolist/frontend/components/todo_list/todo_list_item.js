import React from "react";

export const TodoListItem = (props) => {
    return(
        <ul>{props.todos.map(todo => 
            <li key={todo.id}>{todo.title}</li>)}</ul>
    )
}
