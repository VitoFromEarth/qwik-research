import { component$ } from '@builder.io/qwik';
import TodoList from "./components/todo-list.component";
import TodoAddInput from "./components/todo-add-input.component";
import { setupStore, } from './todo.hook';

export default component$(() => {
  setupStore();
  
  return (
    <div>
      <h1>Todos</h1>
      <TodoAddInput />
      <TodoList />
    </div>
  );
});
