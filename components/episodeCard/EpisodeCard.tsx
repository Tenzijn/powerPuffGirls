import Image from 'next/image';
import placeholder from '/public/placeholder.png';
import Link from 'next/link';

import classes from './EpisodeCard.module.scss';

type Episodes = {
  id: number;
  name: string;
  season: number;
  number: number;
  image: {
    original: string;
  };
};

const EpisodeCard = ({ id, name, image, season, number }: Episodes) => {
  return (
    <Link href={`/episode/${id}`} className={classes.episodeLink}>
      <div key={id} className={classes.episode}>
        <div className={classes.episode__Card}>
          <div className={classes.episode__card__image}>
            {image?.original ? (
              <Image
                fill
                src={image ? image.original : placeholder}
                alt={name}
                sizes='(width: 300px, height: 200px)'
                loading='lazy'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            ) : (
              <Image
                fill
                src={placeholder}
                alt={name}
                sizes='(width: 300px, height: 200px)'
                loading='lazy'
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            )}
          </div>
          <div className={classes.episode__card__info}>
            <h3 className={classes.episode__card__info__title}>{name}</h3>
            <p className={classes.episode__card__info__season}>
              Season: {season} Ep: {number}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default EpisodeCard;
