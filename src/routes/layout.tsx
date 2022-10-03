import { component$, Slot } from '@builder.io/qwik';
import Header from '../ui-kit/components/header/header';

export default component$(() => {
  return (
    <>
      <main>
        <Header />
        <section>
          <Slot />
        </section>
      </main>
    </>
  );
});
