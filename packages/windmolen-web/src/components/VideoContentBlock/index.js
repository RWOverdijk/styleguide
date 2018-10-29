// @flow
import React, { type Node } from 'react';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Container from '../Bootstrap/Container';
import Row from '../Bootstrap/Row';
import Col from '../Bootstrap/Col';
import Animate from '../Animate';

import Base from '../Base';

export type Props = {
  /** An video object containing at least a 'src' property. */
  video?: object,

  /** When specified, the content/image container will be flipped. */
  flipped?: boolean,

  /** Disable the shadow */
  noShadow?: boolean,

  /** The content itself. */
  children?: Node
};

const StyledVideoContentBlock = styled(Base.withComponent('div'))`
  ${media.desktop`
    min-height: 510px;
    position: relative;
    display: flex;
    align-items: center;
  `}



  .video-content-block--video-container {
    &:before,
    &:after {
      content: '';
      display: table;
      width: 100%;
      clear: both;
    }
  }

  .video-content-block--video-wrapper {
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

  .video-content-block--video-container {
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
      max-width: 675px;
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

const VideoContentBlock = ({ children, ...props }: Props) => {
  const colAttrs = props.flipped ? {
    lg: 5,
    lgOffset: 7,
  } : {
    lg: 5,
  };

  return (
    <Animate.Block>
      <StyledVideoContentBlock {...props}>
        <div className="video-content-block--video-container">
          <div className="video-content-block--video-wrapper">
            <iframe width="560" height="349" src={getEmbedMediaURL(props.video.src)} frameBorder="0" allowFullscreen></iframe>
          </div>
          {this}
        </div>
        <StyledContainer>
          <Row>
            <Col className="video-content-block--content-wrapper" {...colAttrs}>
              {children}
            </Col>
          </Row>
        </StyledContainer>
      </StyledVideoContentBlock>
    </Animate.Block>
  );
};

VideoContentBlock.defaultProps = {
  flipped: false,
  noShadow: false
};

export default VideoContentBlock;
