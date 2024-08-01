import classes from './page.module.scss';
import powerpuff from '@/public/powerpuffGirls.png';
import LinkButton from '@/components/button/LinkButton';
import HomeImage from '@/components/homeImage/HomeImage';

export default function Home() {
  // This is a hardcoded showId for the powerpuff girls show on TVMaze
  // You can replace this with any showId you want to display
  const id = 6771;

  return (
    <main>
      <div className={classes.welcome}>
        <HomeImage
          imgLink={powerpuff}
          desc='Powerpuff girls'
          url={`/show/${id}`}
        />
        <LinkButton text={`Let's Fly`} url={`/show/${id}`} />
      </div>
    </main>
  );
}
