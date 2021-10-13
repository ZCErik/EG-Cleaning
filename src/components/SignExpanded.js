import React from 'react';
// import PropTypes from 'prop-types';

// import { SectionSplitProps } from '../../utils/SectionProps';
import classNames from 'classnames';

// const propTypes = {
// 	...SectionSplitProps.types
// }
  
// const defaultProps = {
// ...SectionSplitProps.defaults
// }


const SignExpanded = ({
	className,
	topOuterDivider,
	bottomOuterDivider,
	topDivider,
	bottomDivider,
	hasBgColor,
	invertColor,
	...props
	
	
}) => {
	const outerClasses = classNames(
		'hero section center-content',
		topOuterDivider && 'has-top-divider',
		bottomOuterDivider && 'has-bottom-divider',
		hasBgColor && 'has-bg-color',
		invertColor && 'invert-color',
		className
	);
	const innerClasses = classNames(
	'hero-inner section-inner',
	topDivider && 'has-top-divider',
	bottomDivider && 'has-bottom-divider'
	);
	
	return (
		<section
			{...props}
			className={outerClasses}
		>
			<div className="container-sm">
				<div className={innerClasses}>
					<div>
            			<h1 className="mt-0 mb-16 reveal-from-bottom" data-reveal-delay="200">
							<span>Welcome back. We exist to make entrepreneurship easier.</span>
						</h1>
					</div>
				</div>
			</div>
		</section>
	)
}

export default SignExpanded;