import {
  useStore,
  createContext,
  Context,
  useContext,
  useContextProvider,
} from "@builder.io/qwik";
import { addTodo, fetchTodos, removeTodoBy, updateTodo } from "./todo.api";

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}

export interface State {
  todos: ITodo[];
}

export const AppContext: Context<State> = createContext('app-context');

export function setupStore() {
  const state = useStore<State>({
    todos: [],
  }, { recursive: true });

  useContextProvider(AppContext, state);
}

export const todoActions = {
  fetchTodos: async (): Promise<ITodo[] | undefined> => {
    try {
      return await fetchTodos();
    } catch(err) {
      console.error(err);
    }
  },
  addTodo: async (todoText: string): Promise<ITodo[] | undefined> => {
    try {
      if (todoText.length) {
        return await addTodo(todoText);
      }
    } catch(err) {
      console.error(err);
    }
  },
  removeTodo: async (id: string): Promise<ITodo[] | undefined> => {
    try {
      return await removeTodoBy(id);
    } catch(err) {
      console.error(err);
    }
  },
  updateTodo: async (todo: ITodo): Promise<ITodo[] | undefined> => {
    try {
      if (todo) {
        return await updateTodo(todo);
      }
    } catch(err) {
      console.error(err);
    }
  },
}

