import React, { type Node } from 'react';
import styled from 'styled-components';
import Base from '../Base';
import { colors } from '../../globals';
import { media } from 'styled-bootstrap-grid';

type Props = {
  as: string,
};

const H1 = ({ as: tagName, ...props }: Props) => {
  const Element = styled(Base.withComponent(tagName)).attrs({
    fontSize: 'h1',
    ...props,
  })`
    color: ${colors.charcoalGray};
    font-weight: 800;
    margin: 0 0 10px;

    ${media.desktop`
      margin: 0 0 50px;
    `}
  `;
  return <Element />;
};

H1.defaultProps = {
  as: 'h1',
};


const H2 = ({ as: tagName, ...props }: Props) => {
  const Element = styled(Base.withComponent(tagName)).attrs({
    fontSize: 'h2',
    ...props,
  })`
    color: ${colors.charcoalGray};
    font-weight: 800;
    margin: 0 0 10px

    ${media.desktop`
      margin: 0 0 20px;
    `}
  `;
  return <Element />;
};

H2.defaultProps = {
  as: 'h2',
};


const H3 = ({ as: tagName, ...props }: Props) => {
  const Element = styled(Base.withComponent(tagName)).attrs({
    fontSize: 'h3',
    ...props,
  })`
    color: ${colors.charcoalGray};
    font-weight: 800;
    margin: 0 0 10px

    ${media.desktop`
      margin: 0 0 20px;
    `}
  `;
  return <Element />;
};

H3.defaultProps = {
  as: 'h3',
};


const H4 = ({ as: tagName, ...props }: Props) => {
  const Element = styled(Base.withComponent(tagName)).attrs({
    fontSize: 'h4',
    ...props,
  })`
    color: ${colors.charcoalGray};
    font-weight: 800;
    margin: 0 0 10px
  `;
  return <Element />;
};

H4.defaultProps = {
  as: 'h4',
};


const H5 = ({ as: tagName, ...props }: Props) => {
  const Element = styled(Base.withComponent(tagName)).attrs({
    fontSize: 'h5',
    ...props,
  })`
    color: ${colors.charcoalGray};
    font-weight: 700;
    margin: 0 0 10px

    ${media.desktop`
      margin: 0 0 20px;
    `}
  `;
  return <Element />;
};

H5.defaultProps = {
  as: 'h5',
};

export { H1, H2, H3, H4, H5 };
