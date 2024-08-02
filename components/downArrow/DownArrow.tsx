import Link from 'next/link';
import Image from 'next/image';
import downArrow from '@/public/down-arrow.svg';

import classes from './DownArrow.module.scss';

type DownArrowProps = {
  id: string;
};

const DownArrow = ({ id }: DownArrowProps) => {
  return (
    <div className={classes.downArrow}>
      <Link href={id}>
        <Image
          src={downArrow}
          alt='down arrow'
          className={classes.downArrow__image}
        />
      </Link>
    </div>
  );
};

export default DownArrow;
