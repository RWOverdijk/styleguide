// @flow
import React, { type Node } from 'react';
import styled from 'styled-components';

type Props = {
  children: Node,
  name?: string,
  value?: string,
  onChange: Function,
  variant?: string,
  iconVariant?: number,
  iconVariantChecked?: number,
  iconFontSize?: string,
  desktopIconFontSize?: string,
};

const StyledRadioGroup = styled.div``;

const RadioGroup = ({
  children,
  name,
  value,
  onChange,
  variant,
  iconVariant,
  iconVariantChecked,
  iconFontSize,
  desktopIconFontSize,
}: Props) => (
  <StyledRadioGroup>
    {React.Children.map(children, child => {
      if (!React.isValidElement(child)) {
        return null;
      }

      return React.cloneElement(child, {
        name,
        variant,
        iconVariant,
        iconVariantChecked,
        iconFontSize,
        desktopIconFontSize,
        checked: value === child.props.value,
        onChange: () => {
          onChange(child.props.value);
        },
      });
    })}
  </StyledRadioGroup>
);

RadioGroup.defaultProps = {
  onChange() {},
};

export default RadioGroup;
