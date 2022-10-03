import { component$, mutable, useContext, useMount$, useStylesScoped$ } from '@builder.io/qwik';
import { AppContext, State, todoActions, } from '../todo.hook';
import TodoItem from "./todo-list-item.component";
import styles from "./todo-list.styles.css?inline"

export default component$(() => {
  useStylesScoped$(styles);
  const state = useContext<State>(AppContext);

  useMount$( async () => {
    state.todos = await todoActions.fetchTodos() || state.todos;
  });

  function _renderTodos() {
    return [...state.todos].map(todo => (
      <TodoItem
        todo={mutable(todo)}
      />
    ))
  }
  
  return (
    <div>
      <ul class="todos">
        {_renderTodos()}
      </ul>
    </div>
  );
});