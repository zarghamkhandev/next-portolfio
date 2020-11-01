import React from 'react';

interface ContactContainerProps {}

const ContactContainer: React.FunctionComponent<ContactContainerProps> = ({}) => {
  return (
    <div className="px-5 mx-auto max-w-lg md:w-1/4 md:self-end md:mb-4">
      <h2 className="text-2xl font-medium text-gray-800 md:text-lg">
        Willing to hire?
      </h2>
      <button className="my-gradient w-full py-2 rounded-lg text-3xl text-white font-bold mt-2 md:text-lg md:py-1 ">
        contact me
      </button>
    </div>
  );
};

export default ContactContainer;
