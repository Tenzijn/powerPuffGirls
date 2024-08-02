import classes from './loading.module.scss';

export default function Loading() {
  return (
    <main className='loading'>
      <h1 className='loading__header'>Please be patient.</h1>
      <p className='loading__message'>Loading ...</p>
    </main>
  );
}
