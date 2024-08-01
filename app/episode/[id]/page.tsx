import { fetchEpisodeDetails } from '@/api/api';

export default async function EpisodePage({
  params: { id },
}: {
  params: { id: number };
}) {
  console.log('id:', id);
  const episode = await fetchEpisodeDetails(id);

  return <></>;
}
