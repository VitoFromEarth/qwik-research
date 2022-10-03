import { component$, $, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { ITodo, todoActions, State, AppContext } from '../todo.hook';
import styles from './todo-list-item.styles.css?inline';

interface IProps {
  todo: ITodo,
}

export default component$(({ todo }: IProps) => {
  useStylesScoped$(styles);
  const appState = useContext<State>(AppContext);
  const _onRemove = $(async () => appState.todos = await todoActions.removeTodo(todo.id) || appState.todos);
  const _onChecked = $(
    async () => appState.todos = await todoActions.updateTodo({
      ...todo,
      completed: !todo.completed
    }) || appState.todos
  );

  const completedTodoClass = todo.completed ? "completed" : "";

  return (
    <li class={`todo-item ${completedTodoClass}`}>
      <div class="todo-data">
        <label htmlFor={todo.id}>
          <input checked={todo.completed} id={todo.id} type="checkbox" onChange$={_onChecked} />
          { todo.text }
        </label>
      </div>
      <div class="todo-actions">
        <button onClick$={_onRemove}>Remove</button>
      </div>
    </li>
  )
});