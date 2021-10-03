import React from 'react';
import classNames from 'classnames';
import { SectionProps } from '../utils/SectionProps';
// import GoogleLogin from 'react-google-login';
// import Input from '../components/Input';
// import ButtonGroup from '../components/elements/ButtonGroup';
// import Button from '../components/elements/Button';
// import Image from '../components/elements/Image';
// import Modal from '../components/elements/Modal';


const propTypes = {
    ...SectionProps.types
}
  
const defaultProps = {
    ...SectionProps.defaults
}

// const openModal = (e) => {
//     e.preventDefault();
//     setVideomodalactive(true);
// }

// const closeModal = (e) => {
//     e.preventDefault();
//     setVideomodalactive(false);
// }   
  
const Sigin = ({
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

    // // const handleLogin = async googleData => {  
    // //     const res = await fetch("/api/v1/auth/google", {
    // //     method: "POST",
    // //     body: JSON.stringify({
    // //     token: googleData.tokenId
    // //   }),
    // //   headers: {
    // //     "Content-Type": "application/json"
    // //   }
    // // });
    // const data = await res.json();
    // console.log(data);
    // store returned user somehow
    // return data;
  // }
  // const subscribe = (email) => {
  //   console.log("Working", email);
  //   alert("Thanks for subrscribing! You will receive an email shortly");
  // }
  // const _handleKeyDown = (e) => {
  //   if (e.key === 'Enter') {
  //     return subscribe(e.target.value);
  //   }
  // }

    return (
        <section
            {...props}
            className={outerClasses}>
            <div className="container-sm">
                Signin now and joint the community!
                <div className={innerClasses}>
                {/* <GoogleLogin
                  clientId="159989980998-rifisq2hq3mn2lj2gf08tdjns6rtlvin.apps.googleusercontent.com"
                  buttonText="Log in with Google"
                  onSuccess={handleLogin}
                  onFailure={handleLogin}
                  cookiePolicy={'single_host_origin'}
                /> */}
                </div>
            </div>
        </section>
    );
}
  
Sigin.propTypes = propTypes;
Sigin.defaultProps = defaultProps;
export default Sigin;