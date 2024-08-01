import styles from './ShowDetail.module.scss';
import Link from 'next/link';

type Episodes = [{ id: number; name: string; season: number }];

type Show = {
  name: string;
  summary: string;
  image: {
    original: string;
  };
};

const ShowDetail: React.FC<{ show: Show; episodes: Episodes }> = ({
  show,
  episodes,
}) => {
  return (
    <>
      <h1>{show.name}</h1>
      <p>{show.summary}</p>
      <img src={show.image.original} alt={show.name} />
      <ul>
        {episodes.map((episode) => (
          <li key={episode.id}>
            <Link href={`/episode/${episode.id}`}>
              {episode.name} - Season {episode.season}
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ShowDetail;
