import { motion } from 'framer-motion';
import React, { useEffect, useRef, useState } from 'react';
import { AiOutlineLeftCircle } from 'react-icons/ai';
import { AiOutlineRightCircle } from 'react-icons/ai';
import { images } from '../utils/constants';

interface CardsContainerProps {}

const CardsContainer: React.FunctionComponent<CardsContainerProps> = ({}) => {
  const [position, setPostion] = useState(0);
  const [innerWidth, setInnerWidth] = useState(0);
  const [outerWidth, setOuterWidth] = useState(0);
  const [numberOfVisibleCards, setNumberOfVisibleCards] = useState(0);
  const outer = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    adjustSize();
    window.addEventListener('resize', adjustSize);
    return () => window.removeEventListener('resize', adjustSize);
  }, [position, innerWidth, outerWidth, numberOfVisibleCards, outer, inner]);

  const adjustSize = () => {
    setInnerWidth(inner.current!.clientWidth);
    setOuterWidth(outer.current!.clientWidth);
    setNumberOfVisibleCards(Math.floor(outerWidth / (innerWidth + 16)));
  };

  const rightScrollHandler = () => {
    if (position < images.length - numberOfVisibleCards) {
      setPostion(position + 1);
    }
  };
  const leftScrollHandler = () => {
    if (position > 0) {
      setPostion(position - 1);
    }
  };
  return (
    <div className="overflow-hidden ">
      <motion.div
        className=" flex flex-row overflow-visible disable-scrollbars "
        initial={{ x: 0 }}
        animate={{ x: -position * (innerWidth + 16) }}
        transition={{ ease: 'easeInOut' }}
        ref={outer}>
        {images.map((image) => {
          return (
            <div
              className="p-1 bg-white rounded-lg shadow-md flex-shrink-0 w-48 mx-2 mb-2 md:w-40 lg:w-48"
              key={image.id}
              ref={inner}>
              <div className="relative" style={{ paddingBottom: '75%' }}>
                <a href={image.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={image.src}
                    alt="project1"
                    className="rounded h-full object-fit absolute"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </motion.div>
      <div className="flex py-2 text-mygray px-2 justify-center md:justify-start">
        <span className="px-1" onClick={leftScrollHandler}>
          <AiOutlineLeftCircle
            size={24}
            className="cursor-pointer hover:scale-125 transform duration-300"
          />
        </span>
        <span className="px-1 cursor-pointer" onClick={rightScrollHandler}>
          <AiOutlineRightCircle
            size={24}
            className="cursor-pointer hover:scale-125 transform duration-300"
          />
        </span>
      </div>
    </div>
  );
};

export default CardsContainer;
