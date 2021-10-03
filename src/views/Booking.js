import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
// import ButtonGroup from '../components/elements/ButtonGroup';
// import Button from '../components/elements/Button';
// import Image from '../components/elements/Image';
// import Modal from '../components/elements/Modal';

import Calendar from '../components/sections/Calendar';

const propTypes = {
  ...SectionProps.types
}

const defaultProps = {
  ...SectionProps.defaults
}

const Booking = ({
  className,
  topOuterDivider,
  bottomOuterDivider,
  topDivider,
  bottomDivider,
  hasBgColor,
  invertColor,
  ...props
}) => {

  // const [videoModalActive, setVideomodalactive] = useState(false);

  // const openModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(true);
  // }

  // const closeModal = (e) => {
  //   e.preventDefault();
  //   setVideomodalactive(false);
  // }   

  const outerClasses = classNames(
    'hero section center-content',
    topOuterDivider && 'has-top-divider',
    bottomOuterDivider && 'has-bottom-divider',
    hasBgColor && 'has-bg-color',
    invertColor && 'invert-color',
    className
  );

  // const innerClasses = classNames(
  //   'hero-inner section-inner',
  //   topDivider && 'has-top-divider',
  //   bottomDivider && 'has-bottom-divider'
  // );

  return (
    <section
      {...props}
      className={outerClasses}
    >
        <div className="container-sm">
            Signin now and joint the community!
            <Calendar />
        </div>
    </section>
  );
}

Booking.propTypes = propTypes;
Booking.defaultProps = defaultProps;

export default Booking;