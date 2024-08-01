import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import classes from './HomeImage.module.scss';

type HomeImageProps = {
  imgLink: StaticImageData;
  desc: string;
  url: string;
};

const HomeImage = ({ imgLink, desc, url }: HomeImageProps) => {
  return (
    <div className={classes.image}>
      <Link href={url} className={classes.button}>
        <Image src={imgLink} alt={desc} fill />
      </Link>
    </div>
  );
};

export default HomeImage;
