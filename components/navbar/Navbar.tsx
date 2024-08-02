import Image from 'next/image';
import Link from 'next/link';

import Logo from '@/public/logo.png';

import classes from './Navbar.module.scss';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <Link href={'/'} className={classes.navbar__logo}>
        <Image
          src={Logo}
          alt='logo'
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'left',
          }}
        />
      </Link>
    </nav>
  );
};

export default Navbar;
