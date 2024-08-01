import styles from './page.module.scss';
import { fetchShowDetails, fetchShowEpisodes } from '@/api/api';
import ShowDetail from '@/components/showDetail/ShowDetail';

export default async function ShowPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const show = await fetchShowDetails(id);
  return <ShowDetail show={show} />;
}
