import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos/1";

interface Todo {
	id: number;
	title: string;
	complited: boolean;
}

axios.get(url).then((response) => {
	const data = response.data as Todo;
	const id = data.id;
	const title = data.title;
	const finished = data.complited;

	console.log(id, title, finished);
});

const logTodo = (id, title, finished) => {};
