import React from 'react';
import {AiFillGithub} from 'react-icons/ai';

const Footer = () => {
    return (
      <footer className="footer">
          <small className='txts'> {`Developed by  <Carolina Altamiranda N. />`} &copy; 2021</small>
          <a href={'https://github.com/Qarola'} title={'github.com/Qarola'} target="_blank" rel="noreferrer"> <AiFillGithub className="github_icon" /></a>
          </footer>   
    );
  };
  export default Footer;