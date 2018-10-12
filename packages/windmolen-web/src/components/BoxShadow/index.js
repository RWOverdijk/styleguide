// @flow
import React, { type Node } from 'react';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export type Props = {
  children?: Node,
  small?: Boolean
};

const StyledBoxShadow = styled.div`
  display: inline-block;
  background-color: #fff;

  ${props => !props.small && `
    box-shadow: -20px 14px 20px 0 rgba(0, 0, 0, 0.18);
  `}

  ${props => !props.small && media.desktop`
    box-shadow: -40px 28px 40px 0 rgba(0, 0, 0, 0.18);
  `}

  ${props => props.small && `
    box-shadow: 0 0 5px 0 rgba(51, 61, 71, 0.12);
  `}

  img,
  iframe {
    vertical-align: middle;
  }
`;

const BoxShadow = ({ children, small }: Props) => (
  <StyledBoxShadow small={small}>{children}</StyledBoxShadow>
);

export default BoxShadow;
