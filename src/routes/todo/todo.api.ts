import { ITodo } from "./todo.hook";

const BASE_URL = "http://localhost:8080";

const apiClient = async (url: string, options: RequestInit = {}) => await fetch(url, {
  ...options,
  headers: {
    "Content-Type": 'application/json',
  },
})

export async function fetchTodos() {
  try {
    const response = await apiClient(`${BASE_URL}/todos`)
    return await response.json();
  } catch(err) {
    console.error(err);
  }
}

export async function updateTodo(todo: ITodo) {
  try {
    await apiClient(`${BASE_URL}/todos/${todo.id}`, {
      method: "PUT",
      body: JSON.stringify(todo),
    })

    return await fetchTodos();
  } catch(err) {
    console.error(err);
  }
}

export async function addTodo(todoText: string) {
  try {
    if (todoText.length) {
      const todo = {
        id: Math.random().toString(16).slice(2),
        text: todoText,
        completed: false,
      }

      await apiClient(`${BASE_URL}/todos`, {
        method: "POST",
        body: JSON.stringify(todo)
      })
  
      return await fetchTodos();
    }
    throw new Error('Todo does not exist');
  } catch(err) {
    console.error(err);
  }
}

export async function removeTodoBy(id: string) {
  try {
    await apiClient(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    })

    return await fetchTodos();
  } catch(err) {
    console.error(err);
  }
}