import React, { useEffect } from 'react';
import { useRef } from 'react';
import Layout from '../components/Layout';
import { createChart } from '../utils/createChart';

interface timelineProps {}

const timeline: React.FunctionComponent<timelineProps> = ({}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    createChart(containerRef);
    window.addEventListener('resize', () => {
      createChart(containerRef);
    });
    return () =>
      window.removeEventListener('resize', () => {
        createChart(containerRef);
      });
  });

  return (
    <Layout>
      <div
        className="mt-8 relative w-full md:w-3/4 md:mx-auto timeline-container"
        ref={containerRef}></div>
    </Layout>
  );
};

export default timeline;
