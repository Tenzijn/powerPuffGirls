import ShowDetail from '@/components/showDetail/ShowDetail';
import { PowerpuffProvider } from '@/context/PowerpuffContext';

import classes from './page.module.scss';

export default async function ShowPage() {
  return (
    <PowerpuffProvider>
      <ShowDetail />;
    </PowerpuffProvider>
  );
}
