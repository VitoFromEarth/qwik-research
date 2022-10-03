import { component$, useStylesScoped$ } from '@builder.io/qwik';
import { Link } from '@builder.io/qwik-city';
import { QwikLogo } from '../icons/qwik';
import styles from './header.css';

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <header>
      <div class="logo">
        <Link href="/">
          <QwikLogo />
        </Link>
      </div>
      <div class="app-title-block">
        <Link class="link" href="/about">
          About
        </Link>
      </div>
    </header>
  );
});
