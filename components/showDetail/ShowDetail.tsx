import classes from './ShowDetail.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import downArrow from '../../public/down-arrow.svg';
import EpisodeCard from '../episodeCard/EpisodeCard';

type Episodes = {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    original: string;
  };
};

type Show = {
  name: string;
  summary: string;
  image: {
    original: string;
  };
  genres: string[];
  url: string;
  _embedded: {
    episodes: Episodes[];
  };
};

const ShowDetail: React.FC<{ show: Show }> = ({ show }) => {
  console.log(show._embedded.episodes[0]);
  return (
    <>
      <section
        className={classes.showSection}
        style={{ backgroundColor: 'red' }}
      >
        <div className={classes.showDetail} style={{ backgroundColor: 'red' }}>
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
          <div className={classes.showDetail__downArrow}>
            <Link href='#episode'>
              <Image
                src={downArrow}
                alt='down arrow'
                className={classes.showDetail__downArrow__image}
              />
            </Link>
          </div>
        </div>
      </section>
      <section className={classes.episodesSection} id='episode'>
        <h2 className={classes.episodesSection__title}>
          {' '}
          ✨ Seasons & Episodes ✨
        </h2>
        <div className={classes.episodesSection__episodesContainer}>
          {show._embedded.episodes.map((episode) => {
            return <EpisodeCard key={episode.id} {...episode} />;
          })}
        </div>
      </section>
    </>
  );
};

export default ShowDetail;
