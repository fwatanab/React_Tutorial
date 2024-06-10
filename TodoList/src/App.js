import { useState, useRef } from "react";
import TodoList from "./TodoList";

function App() {
	// todosのステータスを空で初期化
	const [todos, setTodos] = useState([]);

	const todoNameRef = useRef();

	const handleAddTodo = () => {
		// タスクの追加
		const name = todoNameRef.current.value;
		if (!name.trim())
			return;
		setTodos((prevTodos) => {
			// 配列の末尾に新しい要素を追加
			return [...prevTodos, {id: prevTodos.length + 1, name: name, completed: false}]
		});
		// 入力フォームのリセット
		todoNameRef.current.value = null;
	};

	const handleDelTodo = () => {
		// 未達成のタスクのみ取り出す(todo.completed == false)
		const newTodos = todos.filter((todo) => !todo.completed);
		// 未達成のタスクのみを更新
		setTodos(newTodos);
	}

	// completedの真偽, チェックマーク
	const toggleTodo = (id) => {
		const newTodos = [...todos];
		// todo.idとidが一致したらtodoに格納
		const todo = newTodos.find((todo) => todo.id === id);
		todo.completed = !todo.completed;
		// 配列の末尾の要素を更新
		setTodos(newTodos);
	}

	return (
		<div>
			<h1>To Do List</h1>
			<TodoList todos={todos} toggleTodo={toggleTodo} />
			<input type="text" ref={todoNameRef} />
			<button onClick={handleAddTodo}>タスクを追加</button>
			<button onClick={handleDelTodo}>完了したタスクの削除</button>
			<div>残りのタスク:{todos.filter((todo) => !todo.completed).length}</div>
		</div>
	);
}

export default App;
