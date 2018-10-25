// @flow
import React, { type Node, Fragment } from 'react';
import styled from 'styled-components';
import { colors } from '../../../globals';
import Base from '../../Base';
import Icon  from '../../Icon';

type Props = {
  children: HTMLOptionsCollection
};

const StyledLabel = styled(Base.withComponent('label'))`
  color: ${colors.charcoalGray};
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const Wrapper = styled.div`
  display: inline-flex;
  flex-direction: column;
`;

const StyledSelectWrapper = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow: hidden;
  height: 50px;
  box-shadow: 0 0 5px 0 rgba(51, 61, 71, 0.2);
  background-color: ${colors.white};
`;

const StyledIcon = styled(Icon)`
  pointer-events: none;
  position: absolute;
  right: 5px;
  transform: rotate(90deg);
`;

const StyledSelect = styled.select`
  background: transparent;
  border: none;
  font-size: 16px;
  height: 50px;
  padding: 9px 50px 9px 20px;
  width: 100%;
  -webkit-appearance: none;
  -moz-appearance: none;
`;

const Select = ({ children, label, id, ...props }: Props) => (
  <Wrapper>
    {label && (
      <StyledLabel for={id}>{label}</StyledLabel>
    )}
    <StyledSelectWrapper>
      <StyledSelect id={id} {...props}>
        {children}
      </StyledSelect>
      <StyledIcon name="arrow-right" fontSize="30px" />
    </StyledSelectWrapper>
  </Wrapper>
);

export default Select;
