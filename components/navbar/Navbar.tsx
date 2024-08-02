import classes from './Navbar.module.scss';
import Image from 'next/image';
import Logo from '@/public/logo.png';

const Navbar = () => {
  return (
    <nav className={classes.navbar}>
      <div className={classes.navbar__logo}>
        <Image
          src={Logo}
          alt='logo'
          fill
          style={{
            objectFit: 'contain',
            objectPosition: 'left',
          }}
        />
      </div>
    </nav>
  );
};

export default Navbar;
