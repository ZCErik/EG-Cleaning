import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const FooterNav = ({
  className,
  ...props
}) => {

  const classes = classNames(
    'footer-nav',
    className
  );

  return (
    <nav
      {...props}
      className={classes}
    >
      <ul className="list-reset">
        <li>
          <a href="expertgeneralservices@gmail.com">Contact</a>
        </li>
        <li>
          <Link to="/about-us">About us</Link>
        </li>
        <li>
          <Link to="/faq">FAQ's</Link>
        </li>
        <li>
          <a href="expertgeneralservices@gmail.com">Support</a>
        </li>
      </ul>
    </nav>
  );
}

export default FooterNav;