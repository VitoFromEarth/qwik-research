import { component$, useStore, $, useContext, useStylesScoped$ } from '@builder.io/qwik';
import { todoActions, State, AppContext } from '../todo.hook';
import styles from "./todo-add-input.styles.css?inline";

export default component$(() => {
  useStylesScoped$(styles);
  const appState = useContext<State>(AppContext);
  const state = useStore({
    todoText: ""
  });

  const _onIputChange = $(
    (ev: Event) => (state.todoText = (ev.target as HTMLInputElement).value)
  );

  const _onTodoAdd = $(
    async (ev: Event) => {
      if(state.todoText.length) {
        appState.todos = await todoActions.addTodo(state.todoText) || appState.todos;
        state.todoText = ""
      }
    }
  );

  return (
    <div class="form-container">
      <form
        preventdefault:submit 
        onSubmit$={_onTodoAdd}
        class="add-todo-container">
        <div class="input-container">
          <input
            placeholder='Write what you need to do'
            type="text"
            value={state.todoText}
            onKeyup$={_onIputChange}
          />
        </div>
        <div class="actions-container">
          <button
            type='submit'
            preventDefault:click
            onClick$={_onTodoAdd}
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
});