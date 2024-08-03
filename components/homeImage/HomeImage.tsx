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
    <Link href={url} className={classes.image}>
      <Image
        fill
        src={imgLink}
        alt={desc}
        sizes='(width: 800px, height: 500px)'
        loading='lazy'
      />
    </Link>
  );
};

export default HomeImage;
