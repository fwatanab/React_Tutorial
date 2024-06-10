import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, toggleTodo }) => {
	// todosから取り出したtodoをTodoコンポーネットに渡す
	return todos.map((todo) => <Todo todo={todo} key={todo.id} toggleTodo={toggleTodo} />);
};

export default TodoList;
