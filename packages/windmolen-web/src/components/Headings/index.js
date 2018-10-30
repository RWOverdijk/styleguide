// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import Base from '../Base';
import { colors } from '../../globals';
import { media } from 'styled-bootstrap-grid';

type HeadingProps = {
  as: Node,
  size: 'h1' | 'h2' | 'h3' | 'h4' | 'h5',
};

const getFontWeight = (size) => {
  switch (size) {
    case 'h5':
      return 700;
    case 'h1':
    case 'h2':
    case 'h3':
    case 'h4':
    default:
      return 800;
  }
};

const getMargin = (size) => {
  switch (size) {
    case 'h1':
      return '0 0 50px';
    case 'h2':
    case 'h3':
    case 'h5':
      return '0 0 20px';
    case 'h4':
    default:
      return '0 0 10px';
  }
};

const getElement = ({ as, size, ...props }: HeadingProps) => Base.withComponent(as).extend.attrs({
  fontSize: size,
  ...props,
})`
  color: ${colors.charcoalGray};
  font-weight: ${props => getFontWeight(size)};
  margin: 0 0 10px;

  ${media.desktop`
    margin: ${props => getMargin(size)};
  `}
`;

class Heading extends React.PureComponent<HeadingProps> {
  constructor(props) {
    super(props);

    const renderComponentAs = props.as || props.size;
    const StyledElement = getElement({ ...props, as: renderComponentAs });

    this.state = { StyledElement };
  }

  render() {
    const { StyledElement } = this.state;
    const { size, as, ...props } = this.props; // eslint-disable-line no-unused-vars

    return <StyledElement {...props} />;
  }
}

const H1 = props => <Heading size="h1" {...props} />;
const H2 = props => <Heading size="h2" {...props} />;
const H3 = props => <Heading size="h3" {...props} />;
const H4 = props => <Heading size="h4" {...props} />;
const H5 = props => <Heading size="h5" {...props} />;

export { H1, H2, H3, H4, H5 };
