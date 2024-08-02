import classes from './Episodes.module.scss';
import EpisodeCard from '../episodeCard/EpisodeCard';

type EpisodesProps = {
  show: {
    _embedded: {
      episodes: {
        id: number;
        name: string;
        season: number;
        number: number;
        image: {
          original: string;
        };
      }[];
    };
  };
};

const Episodes = ({ show }: EpisodesProps) => {
  return (
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
  );
};

export default Episodes;
