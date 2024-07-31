import styles from './page.module.scss';

export default function Home() {
  return (
    <main>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.description}>This is a description</p>
    </main>
  );
}
