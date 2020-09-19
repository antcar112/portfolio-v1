import React from 'react'
import styled, { css } from 'styled-components'

import { WorkCard, WorkImage } from '@src/modules/work'
import { media } from '@src/utils'

export const WorkItem = ({ project, index }) => {
  const { title, subtitle, description, link, background, image } = project

  return (
    <StyledWorkItem background={background} index={index}>
      <WorkImage background={background} image={image} title={title} />
      <WorkCard title={title} subtitle={subtitle} description={description} link={link} />
    </StyledWorkItem>
  )
}

const evenStyles = css`
  grid-template-columns: 2fr 1fr;
  grid-template-areas: 'image card';
  background: linear-gradient(
    to right,
    ${props => props.background} 0%,
    ${props => props.background} 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0) 100%
  );

  ${media.down.xl} {
    background: linear-gradient(
      to right,
      ${props => props.background} 0%,
      ${props => props.background} 85%,
      rgba(0, 0, 0, 0) 85%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`
const oddStyles = css`
  grid-template-columns: 1fr 2fr;
  grid-template-areas: 'card image';
  background: linear-gradient(
    to left,
    ${props => props.background} 0%,
    ${props => props.background} 75%,
    rgba(0, 0, 0, 0) 75%,
    rgba(0, 0, 0, 0) 100%
  );

  ${media.down.xl} {
    background: linear-gradient(
      to left,
      ${props => props.background} 0%,
      ${props => props.background} 85%,
      rgba(0, 0, 0, 0) 85%,
      rgba(0, 0, 0, 0) 100%
    );
  }
`

const StyledWorkItem = styled.article`
  margin-bottom: 90px;
  width: 100%;
  display: grid;
  ${props => (props.index % 2 === 0 ? evenStyles : oddStyles)};

  align-items: center;

  ${media.down.lg} {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr auto;
    grid-template-areas: 'image' 'card';
    background: ${props => props.background};
    margin-top: 0px;
    margin-bottom: 150px;
  }
`
