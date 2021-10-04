// import React from 'react';
// // import classNames from 'classnames';
// import { SectionTilesProps } from '../../utils/SectionProps';
// import SectionHeader from './partials/SectionHeader';

// import { useState } from "react";
// import DatePicker from "react-datepicker";

// import "react-datepicker/dist/react-datepicker.css";

// const propTypes = {
//   ...SectionTilesProps.types
// }

// const defaultProps = {
//   ...SectionTilesProps.defaults
// }

// const Booking = ({
//   className,
//   topOuterDivider,
//   bottomOuterDivider,
//   topDivider,
//   bottomDivider,
//   hasBgColor,
//   invertColor,
//   pushLeft,
//   ...props
// }) => {

//   // const outerClasses = classNames(
//   //   'testimonial section',
//   //   topOuterDivider && 'has-top-divider',
//   //   bottomOuterDivider && 'has-bottom-divider',
//   //   hasBgColor && 'has-bg-color',
//   //   invertColor && 'invert-color',
//   //   className
//   // );

//   // const innerClasses = classNames(
//   //   'testimonial-inner section-inner',
//   //   topDivider && 'has-top-divider',
//   //   bottomDivider && 'has-bottom-divider'
//   // );

//   // const tilesClasses = classNames(
//   //   'tiles-wrap',
//   //   pushLeft && 'push-left'
//   // );

//   const Calendar = () => {
//     const [startDate, setStartDate] = useState(new Date());
//     console.log(startDate,setStartDate )
//     return (
//       <DatePicker className="cta-slogan" selected={startDate} onChange={(date) => setStartDate(date)} />
//     );
//   };

//   const sectionHeader = {
//     title: 'Book your dates',
//     paragraph: 'Select the dates you prefer, you can check flexible box to allow 3 days before/after your dates'
//   };

//   return (
//     <section
//       {...props}
//     >
//       <div className="container">
//         <SectionHeader data={sectionHeader} className="center-content" />
//         <div className="tiles-item-inner back">
//             Select Start Date: <Calendar/>
//             Select End Date: <Calendar/>
//         </div>
//       </div>
//     </section>
//   );
// }

// Booking.propTypes = propTypes;
// Booking.defaultProps = defaultProps;

// export default Booking;