import Link from 'next/link';
import classes from './LinkButton.module.scss';

type LinkButtonProps = {
  text: string;
  url: string;
};

const LinkButton = ({ text, url }: LinkButtonProps) => {
  return (
    <Link href={`${url}`} className={classes.button}>
      {text}
    </Link>
  );
};

export default LinkButton;
