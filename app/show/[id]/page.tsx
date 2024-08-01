import styles from './page.module.scss';
import { fetchShowDetails, fetchShowEpisodes } from '@/api/api';
import ShowDetail from '@/components/showDetail/ShowDetail';
import Loading from '@/app/loading';

export default async function ShowPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const show = await fetchShowDetails(id);
  const episodes = await fetchShowEpisodes(id);

  return <ShowDetail show={show} episodes={episodes} />;
}
