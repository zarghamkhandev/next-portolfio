import React from 'react';
import Layout from '../components/Layout';
import { motion } from 'framer-motion';
import CardsContainer from '../components/CardsContainer';

const Index: React.FunctionComponent = ({}) => {
  return (
    <Layout>
      <div className="md:flex md:pl-8">
        <div className="md:w-2/5 ">
          <img
            src="/images/profile.jpg"
            alt="profile"
            className="rounded-lg shadow-sm w-32  "
          />
        </div>
        <div className="hidden md:block md:w-3/5 relative">
          <CardsContainer />
        </div>
      </div>
      <div className="md:w-3/5 md:pl-8">
        <motion.h1
          className="text-3xl font-bold text-gray-800 md:text-2xl lg:text-3xl"
          initial={{ marginLeft: '-20px', opacity: 0 }}
          animate={{ marginLeft: '0px', opacity: 1 }}
          transition={{ delay: 1 + 0.5, duration: 0.5 }}>
          Hi, my name is <span className="text-darkPurple">Zargham</span>
        </motion.h1>
        <motion.h1
          className="text-3xl font-bold text-gray-800 md:text-2xl lg:text-3xl"
          initial={{ marginLeft: '-20px', opacity: 0 }}
          animate={{ marginLeft: '0px', opacity: 1 }}
          transition={{ delay: 1 + 0.75, duration: 0.5 }}>
          I build things for the <span className="text-darkPurple">Web</span>
        </motion.h1>
        <motion.p
          className="text-sm font-medium text-justify text-gray-700 md:text-base lg:text-xl mb-4 "
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ delay: 1 + 1, duration: 0.75, ease: 'easeIn' }}>
          Passion for writing computer programs lead me from Engineering to Web
          Development. I'm specialized in HTML/CSS and JavaScript on the
          frontend, but I'm pretty comfortable with ReactJS, NodeJS, ExpressJS,
          MongoDB, Firebase.
        </motion.p>
      </div>
      <div className="-ml-2 md:hidden">
        <CardsContainer />
      </div>
    </Layout>
  );
};

export default Index;
