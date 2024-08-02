import { fetchShowDetails } from '@/api/api';
import ShowDetail from '@/components/showDetail/ShowDetail';
import { notFound } from 'next/navigation';

import classes from './page.module.scss';

export default async function ShowPage({
  params: { id },
}: {
  params: { id: string };
}) {
  if (!id || parseInt(id) !== 6771) {
    return notFound();
  }
  try {
    const show = await fetchShowDetails(parseInt(id));
    return <ShowDetail show={show} />;
  } catch (error) {
    return notFound();
  }
}
