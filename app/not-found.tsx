import Image from 'next/image';
import notFound from '@/public/not-found.svg';
export default function NotFound() {
  // after 10 seconds, redirect to the home page and also delete the timeout from memory
  // clear the timeout when the component is unmounted

  return (
    <main className='error'>
      <Image
        src={notFound}
        sizes='30vw'
        priority
        alt='404'
        className='error__image'
      />
      <h1 className='error__header'>OOPS! 404 Page Not Found</h1>
      <p className='error__message'>
        Sorry, the page you are looking for does not exist
      </p>
    </main>
  );
}
