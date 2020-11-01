import { RefObject } from 'react';
import { timelineData } from './constants';
import * as d3 from 'd3';
timelineData.reverse();

timelineData.forEach((item: any, i) => {
  if (i === 0) {
    item.id = i;
  } else {
    item.id = i;
    item.parentId = i - 1;
  }
});
export const createChart = (containerRef: RefObject<HTMLDivElement>): void => {
  const linkHeight = +getComputedStyle(
    document.documentElement
  ).getPropertyValue('--linkHeight');
  const treeWidth = containerRef?.current?.getBoundingClientRect()
    .width as number;
  const treeHeight = (timelineData.length - 1) * linkHeight;
  containerRef?.current?.setAttribute('style', `height:${treeHeight + 'px'}`);
  const cover = d3.select(containerRef.current);
  cover.select('div').remove();
  const container = cover.append('div').attr('class', 'tree-container');
  const stratify = d3
    .stratify()
    .id((d: any) => d.id)
    .parentId((d: any) => d.parentId);
  const rootNodeData = stratify(timelineData);
  const tree = d3.tree().size([treeWidth, treeHeight - 100]);
  const treeData = tree(rootNodeData);
  const nodes = container.selectAll('.node').data(treeData.descendants());
  const links = container.selectAll('.link').data(treeData.links());
  const toolTips = container.selectAll('.tooltip').data(treeData.descendants());
  const toolBox = container.selectAll('.toolbox').data(treeData.descendants());

  nodes
    .enter()
    .append('div')
    .attr('class', 'node')
    .attr(
      'style',
      (d) =>
        `position:absolute;
    left: ${d.x}px;
    top: ${d.y}px;
    z-index:1;
    display:inline-block;
    `
    );

  links
    .enter()
    .append('div')
    .attr('class', 'link')
    .attr(
      'style',
      (d) => `
      position:absolute;
      top: ${d.source.y}px;
      left: ${d.source.x}px;
      bottom: ${d.target.y}px;
      border-left: 0.5px solid rgba(74, 74, 74);
      height: ${d.target.y - d.source.y}px;
      z-index:0;
      display:inline-block;

      `
    );
  toolTips
    .enter()
    .append('div')
    .attr('class', 'tooltip')
    .attr(
      'style',
      (d, i) => `
      position: absolute;
      top: ${d.y - 6}px;
      left: ${i % 2 === 0 ? d.x + 12 : d.x - 20}px;
      width: 0px;
      height: 0px;
      border-top: 6px solid transparent;
      border-bottom: 6px solid transparent;
      ${
        i % 2 === 0
          ? 'border-right: 8px solid rgba(74, 74, 74);'
          : 'border-left: 8px solid rgba(74, 74, 74);'
      }
      
      `
    );
  const toolBoxContainer = toolBox
    .enter()
    .append('div')
    .attr('class', 'toolbox flex ')
    .attr(
      'style',
      (d, i) => `
        position: absolute;
        background-color:white;
        top: ${d.y - 16}px;
        left: ${
          i % 2 === 0
            ? d.x + 12 + 8 + 'px'
            : 'calc(' + d.x + 'px - var(--width) - 20px)'
        };
        padding: 5px;
        border: 1px solid rgba(74, 74, 74);
        border-radius: 7px;
        font-size: 13px;
        line-height: 1.26666667;
      `
    );

  toolBoxContainer
    .append('div')
    .attr('class', 'w-1/3 items-center svgDiv hidden md:flex')
    .append('img')
    .attr('class', 'cardImg')
    .attr('src', (d: any) => `/svgs/${d.data.svg}.svg`);

  const textContainer = toolBoxContainer
    .append('div')
    .attr('class', 'flex-1 textDiv flex flex-col justify-center');
  textContainer
    .append('p')
    .attr(
      'class',
      'text-darkPurple text-center text-xxs sm:text-sm md:text-base inline-block font-medium mx-auto'
    )
    .text((d: any) => d.data.title);
  textContainer
    .append('p')
    .attr(
      'class',
      'text-mygray text-xxs sm:text-sm font-medium inline-block mx-auto mt-1'
    )
    .text((d: any) => d.data.date);

  textContainer
    .append('a')
    .attr('href', (d: any) => (d.data.link ? d.data.link : ''))
    .attr('target', '_blank')
    .attr(
      'class',
      'text-mygray text-xxs sm:text-sm font-medium mx-auto inline-block underline mt-0 sm:mt-2 md:mt-4 lg:mt-6'
    )
    .text((d: any) => (d.data.linkText ? d.data.linkText : ''));

  // append svgs to boxes
};
