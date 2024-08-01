import styles from './page.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <div className={styles.container}>
        <h1> Welcome to the PowerPuff Girls Show</h1>
        <Link href='/show/6771'>Go to the show Details</Link>
      </div>
    </main>
  );
}
