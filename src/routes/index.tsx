import { component$ } from '@builder.io/qwik';
import type { DocumentHead } from '@builder.io/qwik-city';
import TodoPage from './todo';

export default TodoPage;

export const head: DocumentHead = {
  title: 'Todo Application',
};
