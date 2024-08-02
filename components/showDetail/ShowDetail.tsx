import classes from './ShowDetail.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import LinkButton from '../button/LinkButton';

type Episodes = {
  id: number;
  name: string;
  season: number;
};

type Show = {
  name: string;
  summary: string;
  image: {
    original: string;
  };
  _embedded: {
    episodes: Episodes[];
  };
};

const ShowDetail: React.FC<{ show: Show }> = ({ show }) => {
  console.log(show);
  return (
    <section className={classes.showSection}>
      <div className={classes.showDetail}>
        <div className={classes.showDetail__container}>
          <div className={classes.showDetail__image}>
            <Image
              src={show.image.original}
              alt={show.name}
              width={400}
              height={600}
              layout='responsive'
            />
          </div>
          <div className={classes.showDetail__info}>
            <h1 className={classes.showDetail__info__title}>{show.name}</h1>
            <ul className={classes.showDetail__info__genres}>
              {show.genres.map((genres) => {
                return (
                  <li
                    key={genres}
                    className={classes.showDetail__info__genres__genre}
                  >
                    {genres}
                  </li>
                );
              })}
            </ul>
            <div
              dangerouslySetInnerHTML={{ __html: show.summary }}
              className={classes.showDetail__info__summary}
            ></div>
            <a
              href={show ? show.url : ''}
              target='_blank'
              rel='noreferrer'
              className={classes.showDetail__info__button}
            >
              Visit Official Site
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShowDetail;
