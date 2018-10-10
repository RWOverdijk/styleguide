// @flow
import React, { type Node } from 'react';
import { media } from 'styled-bootstrap-grid';
import styled from 'styled-components';

export type Props = {
  children?: Node,
  wrapper: Node,
  small?: Boolean
};

const StyledBoxShadow = ({ wrapper, ...props }: Props) => {
  const Element = styled(wrapper).attrs(props)`
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
  `;

  return <Element />;
};

const BoxShadow = ({ children, small }: Props) => {
  return React.Children.map(children, (child) => (
    <StyledBoxShadow {...child.props} small={small} wrapper={child.type} />
  ));
};

export default BoxShadow;
