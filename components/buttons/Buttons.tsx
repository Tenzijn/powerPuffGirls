import Link from 'next/link';
import classes from './Buttons.module.scss';

type LinkButtonProps = {
  text: string;
  url: string;
};

export const PrimaryBtn = ({ text, url }: LinkButtonProps) => {
  return (
    <Link href={`${url}`} className={classes.primaryBtn}>
      {text}
    </Link>
  );
};

export const SecondaryBtn = ({ text, url }: LinkButtonProps) => {
  return (
    <Link href={`${url}`} className={classes.secondaryBtn}>
      {text}
    </Link>
  );
};
