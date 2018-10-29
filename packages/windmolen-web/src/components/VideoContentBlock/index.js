// @flow
import React, { Fragment, type Node } from 'react';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';
import Animate from '../Animate';

import Base from '../Base';

export type Props = {
  /** An array of the images being shown. */
  video?: array,

  /** When specified, the content/image container will be flipped. */
  flipped?: boolean,

  /** Disable the shadow */
  noShadow?: boolean,

  /** The content itself. */
  children?: Node
};

const StyledContentBlock = styled(Base.withComponent('div'))`
  ${media.desktop`
    min-height: 510px;
    position: relative;
    display: flex;
    align-items: center;
  `}

  /* one image */
  .content-block--image-wrapper:first-child:nth-last-child(1) {
    ${media.desktop`
      height: 510px;
    `}

    .content-block--image {
      height: 100%;
      width: 100%;
      max-width: 100%;
      object-fit: cover;

      ${media.desktop`
        width: auto;
        float: ${props => props.flipped ? 'right' : 'left'};
      `}
    }
  }

  .content-block--images-container,
  .content-block--image-wrapper {
    &:before,
    &:after {
      content: '';
      display: table;
      width: 100%;
      clear: both;
    }
  }

  .content-block--video-wrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    height: 0;

    iframe {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border: 0;

      box-shadow: ${props => props.noShadow ? null : '-20px 14px 20px 0 rgba(0, 0, 0, 0.18)'};
      ${media.desktop`
        box-shadow: ${props => props.noShadow ? null : '-40px 28px 40px 0 rgba(0, 0, 0, 0.18)'};
      `}
    }
  }

  .content-block--images-container {
    margin-bottom: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    z-index: 1;

    ${media.desktop`
      margin-bottom: 0;
      position: absolute;
      ${props => props.flipped ? 'right: 50%' : 'left: 50%'};
      width: 50%;
    `}
  }
`;

const StyledContainer = styled(Container)`
  position: relative;
`;

const getEmbedMediaURL = (source) => {
  const patterns = {
    youtube: /^(?:https?:\/\/)?(?:www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/,
    vimeo: /^https?:\/\/(?:www\.|player\.)?vimeo.com\/(?:channels\/(?:\w+\/)?|groups\/(?:[^/]*)\/videos\/|album\/(?:\d+)\/video\/|video\/|)(\d+)(?:$|\/|\?)$/,
  };

  let match;
  let domain;
  for (const key in patterns) {
    match = patterns[key].exec(source);
    if (match) {
      domain = key;
      break;
    }
  }

  if (!match) return false;

  const vid = match[1];
  switch (domain.toLowerCase()) {
  case 'vimeo':
    return `https://player.vimeo.com/video/${vid}`;
  case 'youtube':
    return `https://www.youtube.com/embed/${vid}?rel=0&hd=1&controls=0&showinfo=0`;
  default:
    return false;
  }
};

const ContentBlock = ({ children, ...props }: Props) => {
  const colAttrs = props.flipped ? {
    lg: 5,
    lgOffset: 7,
  } : {
    lg: 5,
  };

  return (
    <Animate.Block>
      <StyledContentBlock {...props}>
        <div className="content-block--images-container">
          <div className="content-block--video-wrapper">
            <iframe width="560" height="349" src={getEmbedMediaURL(props.video.src)} frameBorder="0" allowFullscreen></iframe>
          </div>
          {this}
        </div>
        <StyledContainer>
          <Row>
            <Col className="content-block--content-wrapper" {...colAttrs}>
              {children}
            </Col>
          </Row>
        </StyledContainer>
      </StyledContentBlock>
    </Animate.Block>
  );
};

ContentBlock.defaultProps = {
  flipped: false,
  noShadow: false
};

export default ContentBlock;
