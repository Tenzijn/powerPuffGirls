import Image from 'next/image';
import DownArrow from '../downArrow/DownArrow';
import { SecondaryBtn } from '../buttons/Buttons';
import { notFound } from 'next/navigation';

import placeHolder from '../../public/placeholder.png';
import classes from './EpisodeDetail.module.scss';

type EpisodeDetailProps = {
  episode: {
    id: number;
    name: string;
    url: string;
    season: number;
    number: number;
    summary: string;
    airdate: string;
    image: {
      original: string;
    };
    _links: {
      show: {
        name: string;
      };
    };
  };
};

const EpisodeDetail: React.FC<EpisodeDetailProps> = ({ episode }) => {
  // to prevent showing episode details of other shows
  if (episode._links.show.name !== 'The Powerpuff Girls') {
    notFound();
  }

  // if there is no image, use placeholder image
  if (!episode.image) {
    episode = { ...episode, image: { original: placeHolder.src } };
  }

  return (
    <>
      <section className={classes.episodeSection}>
        <div className={classes.episodeDetail}>
          <Image
            className={classes.episodeDetail__background}
            src={episode.image.original ? episode.image.original : placeHolder}
            alt='background'
            fill
            sizes='(width: 400px, height: 250px)'
            style={{ objectFit: 'cover', objectPosition: 'center' }}
          />
          <div className={classes.episodeDetail__container}>
            <div className={classes.episodeDetail__image}>
              <Image
                src={
                  episode.image.original ? episode.image.original : placeHolder
                }
                alt={episode.name}
                fill
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
            </div>
            <div className={classes.episodeDetail__info}>
              <h1 className={classes.episodeDetail__info__title}>
                {episode.name}
              </h1>
              <div className={classes.episodeDetail__info__date}>
                <p className={classes.episodeDetail__info__date__releaseDate}>
                  Release Date: {episode.airdate}
                </p>
                <p className={classes.episodeDetail__info__date__season}>
                  Season {episode.season}
                </p>
                <p className={classes.episodeDetail__info__date__episode}>
                  Episode {episode.number}
                </p>
              </div>

              <div
                dangerouslySetInnerHTML={{ __html: episode.summary }}
                className={classes.episodeDetail__info__summary}
              ></div>
              <SecondaryBtn text='Watch Now' url={episode.url} />
            </div>
          </div>
          <DownArrow id='/show/6771#episode' />
        </div>
      </section>
    </>
  );
};

export default EpisodeDetail;
