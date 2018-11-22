// @flow
import React from 'react';
import Base from '../Base';
import styled from 'styled-components';
import Lazyload from 'react-lazyload';

type Props = {
  /** Will make the image not overflow its parent. */
  responsive?: boolean,

  /** Specify a specific aspect ratio for the image */
  aspectRatio?: '16:9' | '4:3' | '1:1',

  /** Specify a @2x image for high dpi displays. */
  src2x?: string
};

const StyledImage = styled(Base.withComponent('img')).attrs({
  srcSet: props => props.srcSet
})`
  ${props => props.responsive && `
    max-width: 100%;
    height: auto;
  `}
`;

const StyledImageContainer = styled.div`
  width: 100%;
  height: 0;
  padding-bottom: ${props => props.paddingBottom}%;
  position: relative;

  ${StyledImage} {
    position: absolute;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Image = ({ aspectRatio, ...props }: Props) => {
  const srcSet = (props.src2x ? `${props.src} 1x, ${props.src2x} 2x` : null);

  if (aspectRatio) {
    const [width, height] = aspectRatio.split(':');
    const paddingBottom = (height / width) * 100;
    return (
      <StyledImageContainer paddingBottom={paddingBottom}>
        <Lazyload offset={[50, 50]} height={200} resize once>
          <StyledImage srcSet={srcSet} {...props} />
        </Lazyload>
      </StyledImageContainer>
    );
  }

  return (
    <StyledImage srcSet={srcSet} {...props} />
  );
};

Image.defaultProps = {
  responsive: true,
  aspectRatio: null,
  src2x: null
};

export default Image;
