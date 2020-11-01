import React from 'react';
import BackgroundSm from '../../public/svgs/background-sm.svg';
import BackgroundMd from '../../public/svgs/background-md.svg';

interface BackgroundProps {}

const Background: React.FunctionComponent<BackgroundProps> = ({}) => {
  return (
    <header
      className="header-limit absolute top-0 md:right-0 w-full"
      style={{ zIndex: -1 }}>
      <BackgroundSm className="h-32 md:h-0" />
      <BackgroundMd className="h-0 md:ml-auto md:h-full" />
    </header>
  );
};

export default Background;
