import classes from './ShowDetail.module.scss';
import Image from 'next/image';
import Episodes from '../episodes/Episodes';
import DownArrow from '../downArrow/DownArrow';
import { SecondaryBtn } from '../buttons/Buttons';

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
  return (
    <>
      <section className={classes.showSection}>
        <div className={classes.showDetail}>
          <Image
            className={classes.showDetail__background}
            src={show.image.original}
            alt='background'
            fill
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={classes.showDetail__container}>
            <div className={classes.showDetail__image}>
              <Image
                src={show.image.original}
                alt={show.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
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
              <SecondaryBtn text='Watch Now' url={show.url} />
            </div>
          </div>
          <DownArrow id='#episode' />
        </div>
      </section>

      {/* Displaying all the Episodes */}
      <Episodes show={show} />
    </>
  );
};

export default ShowDetail;
