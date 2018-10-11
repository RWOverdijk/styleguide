// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';
import { colors } from '../../../globals';
import Icon  from '../../Icon';

type Props = {
  children: HTMLOptionsCollection
};

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
  right: 0;
`;

const StyledSelect = styled.select`
  background: transparent;
  border: none;
  font-size: 16px;
  height: 50px;
  padding: 9px 50px 9px 20px;
  width: 100%;
  -webkit-appearance: none;
`;

const Select = ({ children }: Props) => (
  <StyledSelectWrapper>
    <StyledSelect>
      {children}
    </StyledSelect>
    <StyledIcon name="arrow-right" fontSize="40px" />
  </StyledSelectWrapper>
);

export default Select;
