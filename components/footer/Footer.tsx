import classes from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <p>© {new Date().getFullYear()} | All rights reserved</p>
    </footer>
  );
};

export default Footer;
