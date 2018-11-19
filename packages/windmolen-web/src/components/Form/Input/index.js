// @flow
import React, { type Node, Component } from 'react';
import styled from 'styled-components';
import Autocomplete from 'react-autocomplete';
import { media } from 'styled-bootstrap-grid';
import Base from '../../Base';
import Icon from '../../Icon';
import { colors } from '../../../globals';

type InputProps = {
  error?: Node,
  touched?: boolean,
  isValid?: boolean,
  placeholderRight?: boolean,
  label?: Node,
  onIconClick?: Function,
  type?: string,
  suggestions?: Array<Object>,
  onChange?: Function,
  autoCompleteProps?: Object,
  placeholder?: string,

  /** Keep placeholderRight visible even if input has text */
  placeholderAlwaysVisible?: boolean,
  /** Padding on the right-hand side, to account for an always visible right
   * placeholder */
  placeholderRightPadding?: number,

  /** The name of the icon */
  icon?: string,
  iconVariant?: string,

  /** CSS class for the container around `<input />` */
  className?: string
};

const getInputState = (props: InputProps): string => {
  if (!props.touched) {
    return colors.charcoalGray;
  }

  if (props.isValid) {
    return colors.green;
  }

  if (props.error || props.isValid === false) {
    return colors.red;
  }

  return colors.charcoalGray;
};

const StyledInputWrapper = styled.div`
  position: relative;

  &::after {
    content: "${props => props.placeholderAlwaysVisible && props.placeholderRight && props.placeholder}";
    color: ${props => props.disabled ? colors.silver : colors.warmGray};
    position: absolute;
    top: calc(1em + 1px);
    right: 20px;
    z-index: 3;
    font-size: 14px;
  }
`;

const StyledInputLine = styled.div`
  transition-timing-function: ease-out;
  transition-duration: 0.2s;
  transition-property: background, width;
  bottom: 0;
  left: 50%;
  pointer-events: none;
  height: 1px;
  z-index: 2;
  position: absolute;
  transform: translateX(-50%);
  width: 0;
  background-color: ${colors.charcoalGray};

  ${props => {
    if (props.disabled || !props.touched) {
      return;
    }

    return `
      background-color: ${getInputState(props)};
      width: 100%;
    `;
  }
}`;

const rightPaddingWithIconAndPlaceholder = (props) => {
  const iconPadding = props.icon ? 70 : 20;
  const placeholderPadding = props.placeholderRight && props.placeholderAlwaysVisible
    ? props.placeholderRightPadding
    : 0;

  return `${iconPadding + placeholderPadding}px`;
};

const StyledInputElement = styled.input`
  background-color: ${colors.alabaster};
  border: 0;
  box-shadow: inset 0 0 5px 0 rgba(0, 0, 0, 0.12);
  color: ${props => props.disabled ? colors.silver : colors.warmGray};
  ${props => props.disabled && `
    cursor: not-allowed;
  `}
  display: block;
  outline: 0;
  padding: 9px 20px;
  padding-right: ${rightPaddingWithIconAndPlaceholder};
  width: 100%;
  height: 50px;
  position: relative;
  z-index: 2;
  font-size: 16px;

  &:active,
  &:focus {
    outline: 0;

    & + ${StyledInputLine} {
      ${props => (!props.suggestions && !props.disabled) && `
        background-color: ${getInputState(props)};
        width: 100%;
      `}
    }
  }

  &::placeholder {
    color: ${props => props.disabled ? colors.silver : colors.warmGray};
    text-align: ${props => props.placeholderRight ? 'right' : 'left'};
  }
`;

const StyledInput = ({ ...props }) => {
  // only show the native placeholder if we're not using ::after to fake it
  // const inputPlaceholder = placeholderAlwaysVisible && placeholderRight && placeholder ? '' : placeholder;
  const placeholder = props.placeholderAlwaysVisible && props.placeholderRight && props.placeholder
      ? ''
      : props.placeholder;

  return (
    <StyledInputWrapper {...props}>
      <StyledInputElement {...props} placeholder={placeholder} />
      <StyledInputLine
        value={props.value}
        disabled={props.disabled}
        touched={props.touched}
        isValid={props.isValid}
        error={props.error}
      />
    </StyledInputWrapper>
  );
};

const Container = styled.div`
  position: relative;
`;

const StyledLabel = styled(Base.withComponent('label'))`
  color: ${colors.charcoalGray};
  margin-bottom: 5px;
  font-weight: bold;
  font-size: 18px;
`;

const StyledErrorMessage = styled(Base)`
  font-size: 14px;
  color: ${colors.red};
  line-height: 2;
`;

const StyledIcon = styled(Icon)`
  position: absolute;
  right: 5px;
  top: 5px;
`;

const StyledIconContainer = styled.div`
  position: absolute;
  right: 0;
  bottom: 0;
  width: 50px;
  height: 50px;
  background-color: ${props => props.iconVariant === 'primary' ? colors.charcoalGray : colors.white};
  z-index: 3;

  ${props => props.iconVariant === 'alternate' &&
    `box-shadow: rgba(51, 61, 71, 0.12) 0px 0px 8px 0px;`
  }

  &:focus,
  &:active,
  &:hover {
    background-color: ${props => props.iconVariant === 'primary' ? colors.shuttleGray : colors.alabaster};
  }

  &:hover {
    cursor: pointer;
  }
`;

const StyledAutoSuggestionContainer = styled(Base)`
  box-shadow: 0 11px 15px 0 rgba(0, 0, 0, 0.1);
  left: 0;
  padding-top: 50px;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;

  &&& {
    background-color: ${colors.white};
  }
`;

const StyledAutoSuggestion = styled(Base)`
  display: block;
  width: 100%;
  height: 100%;
  max-height: 250px;
  overflow-x: hidden;
  overflow-y: auto;

  .suggestion {
    padding-left: 20px;
    padding-right: 20px;
    margin-top: 5px;
    margin-bottom: 5px;
    font-size: 16px;
    line-height: 32px;

    &:focus,
    &:active,
    &:hover {
      color: ${colors.silver};
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

const Input = ({ className, autoCompleteProps, iconVariant, ...props }: InputProps) => {
  return (
    <Container className={className}>
      {props.label && (
        <StyledLabel htmlFor={props.id}>{props.label}</StyledLabel>
      )}

      {props.suggestions ? (
        <Autocomplete
          items={props.suggestions}
          wrapperStyle={{  }}
          renderInput={({ ref, value, ...inputProps }) => ( // eslint-disable-line no-unused-vars
            <StyledInput
              {...inputProps}
              {...props}
            />
          )}
          renderMenu={(children) => (
            <StyledAutoSuggestionContainer>
              <StyledAutoSuggestion>
                {children}
              </StyledAutoSuggestion>
            </StyledAutoSuggestionContainer>
          )}
          {...autoCompleteProps}
        />
      ) : (
        <StyledInput {...props} />
      )}

      {props.error && (
        <StyledErrorMessage>{props.error}</StyledErrorMessage>
      )}

      {props.icon && (
        <StyledIconContainer iconVariant={iconVariant} onClick={props.onIconClick}>
          <StyledIcon variant={iconVariant === 'primary' ? 1 : 0} name={props.icon} fontSize="40px" />
        </StyledIconContainer>
      )}
    </Container>
  );
};

Input.defaultProps = {
  type: 'text',
  placeholderRightPadding: 35,
  iconVariant: 'primary'
};

export default Input;
