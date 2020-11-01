import React from 'react';
import { FaLinkedin, FaGithubSquare } from 'react-icons/fa';
import FooterSm from '../../public/svgs/footer-sm.svg';
import FooterMd from '../../public/svgs/footer-md.svg';
import ContactContainer from './ContactContainer';

interface FooterProps {}

const Footer: React.FunctionComponent<FooterProps> = ({}) => {
  return (
    <footer className="mt-10 md:bottom-0 w-full md:flex md:flex-row-reverse md:flex ">
      <ContactContainer />
      <div className="mt-4 md:w-3/4 relative md:border-gray-600 md:border-r-2 md:mt-0 md:h-48 md:flex">
        <div className="text-white flex flex-row absolute bottom-0 mb-4 ml-4 md:right-0 md:text-gray-500 md:flex-col md:top-0 md:mr-2">
          <a
            href="https://github.com/zarghamkhandev"
            target="_blank"
            rel="noopener noreferrer">
            <FaGithubSquare
              size={35}
              className="cursor-pointer mx-1 md:mx-0 md:p-1 text-gray-800"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/zarghamahmadkhan/"
            target="_blank"
            rel="noopener noreferrer">
            <FaLinkedin
              size={35}
              className="cursor-pointer mx-1 md:mx-0 md:p-1 text-gray-800"
            />
          </a>
        </div>
        <FooterSm className="h-32 md:h-0" />
        <FooterMd className="h-0 md:h-24 md:self-end" />
      </div>
    </footer>
  );
};

export default Footer;
