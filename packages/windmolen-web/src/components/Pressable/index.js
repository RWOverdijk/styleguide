// @flow
import React, { PureComponent, type Node } from 'react';
import styled, { type ReactComponentStyled } from 'styled-components';
import Base from '../Base';
import { media } from 'styled-bootstrap-grid';
import Icon from '../Icon';
import { colors } from '../../globals';

export type VariantType = 'text'
  | 'text-boring'
  | 'button-primary'
  | 'button-alternate'
  | 'button-outline';

type Variant = {
  [cssProperty: string]: string | number
}

type VariantList = {
  [VariantType]: Variant
};

export type PressableProps = {
  children?: Node,
  variant?: VariantType,

  /** Either an HTML element (e.g. "'a'") or a React component. */
  as?: string | Node,

  /** Used with button* variants. */
  small?: boolean,

  /** Wether to hide the icon or not. */
  hideIcon?: boolean,

  /** Name of the icon to use, same as <Icon />. */
  icon?: string,

  /** Render only the icon */
  iconOnly?: boolean,

  /** The placement of the icon. */
  iconPlacement?: 'start' | 'end',
};

// Pressable variant definitions
const pressableText: Variant = {
  color: colors.warmGray,
  backgroundColor: colors.transparent,
  hoverColor: colors.silver,
  hoverBackgroundColor: colors.transparent,
  shadow: 'none',
  border: `1px solid ${colors.transparent}`,
  iconVariant: 0,
  hoverIconVariant: 0,
  textDecoration: 'underline',
  cursor: 'pointer',
};

const pressableTextBoring: Variant = {
  color: colors.charcoalGray,
  backgroundColor: colors.transparent,
  hoverColor: colors.charcoalGray,
  hoverBackgroundColor: colors.transparent,
  shadow: 'none',
  border: `1px solid ${colors.transparent}`,
  iconVariant: 0,
  hoverIconVariant: 0,
  textDecoration: 'none',
  cursor: 'pointer',
};

const pressableButtonPrimary: Variant = {
  color: colors.white,
  backgroundColor: colors.charcoalGray,
  hoverColor: colors.white,
  hoverBackgroundColor: colors.shuttleGray,
  shadow: '0 0 8px 0 rgba(0, 0, 0, 0.12)',
  border: `1px solid ${colors.charcoalGray}`,
  hoverBorder: `1px solid ${colors.shuttleGray}`,
  iconVariant: 1,
  hoverIconVariant: 1,
  textDecoration: 'none',
  cursor: 'pointer',
};

const pressableButtonAlternate: Variant = {
  color: colors.charcoalGray,
  backgroundColor: colors.white,
  hoverColor: colors.bermudaGray,
  hoverBackgroundColor: colors.white,
  shadow: '0 0 8px 0 rgba(51, 61, 71, 0.12)',
  border: `1px solid ${colors.white}`,
  iconVariant: 0,
  hoverIconVariant: 2,
  textDecoration: 'none',
  cursor: 'pointer',
};

const pressableButtonOutline: Variant = {
  color: colors.white,
  backgroundColor: colors.transparent,
  hoverColor: colors.white,
  hoverBackgroundColor: colors.transparent,
  shadow: 'none',
  border: `solid 1px ${colors.white}`,
  iconVariant: 1,
  hoverIconVariant: 1,
  textDecoration: 'none',
  cursor: 'pointer',
};

const pressableVariants: VariantList = {
  'text': pressableText,
  'text-boring': pressableTextBoring,
  'button-primary': pressableButtonPrimary,
  'button-alternate': pressableButtonAlternate,
  'button-outline': pressableButtonOutline
};

// utils to access the property value for a given Pressable variant
const getVariantProperty = (variant: VariantType, property: string): string | number => pressableVariants[variant][property];
const variant = (property, fallbackProperty) => props =>
  getVariantProperty(props.variant, property) || getVariantProperty(props.variant, fallbackProperty);

const pressableFactory = (element): ReactComponentStyled<PressableProps> => Base.withComponent(element).extend`
  background-color: ${variant('backgroundColor')};
  border: ${variant('border')};
  box-shadow: ${variant('shadow')};
  color: ${variant('color')};
  cursor: ${variant('cursor')};
  text-align: ${props => props.iconOnly ? 'center' : 'left'};
  text-decoration: ${variant('textDecoration')};
  height: ${props => props.small ? '50px' : '60px'};
  padding: 0;
  vertical-align: middle;

  ${props => props.variant !== 'text' && props.variant !== 'text-boring' && !props.iconOnly ? `
    display: inline-flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    font-weight: 600;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
  ` : `
    display: inline-flex;
    align-items: center;
    width: auto;
  `}

  ${props => props.iconOnly && `justify-content: center;`}

  width: ${props => {
    if (props.iconOnly) return props.small ? '50px' : '60px';
    return 'auto';
  }}


  ${StyledRightIcon} {
    background-position-y: -${variant('iconVariant')}em;
    position: relative;
    ${props => {
      if (props.iconOnly) return '';
      return `left: ${props.small ? 7 : 10}px;`
    }}
  }

  ${StyledLeftIcon} {
    background-position-y: -${variant('iconVariant')}em;
    margin: 0 10px 0 -10px;
  }

  &:focus,
  &:active,
  &:hover {
    background-color: ${variant('hoverBackgroundColor')};
    color: ${variant('hoverColor')};
    border: ${variant('hoverBorder', 'border')};

    // for now, the following works because it's always the same
    // change it if that stops being the case
    text-decoration: ${variant('textDecoration')};

    ${StyledRightIcon},
    ${StyledLeftIcon} {
      background-position-y: -${variant('hoverIconVariant')}em;
    }
  }

  ${media.desktop`
    width: ${props => {
      if (props.iconOnly) return props.small ? '40px' : '50px';
      return 'auto';
    }};
    height: ${props => props.small ? '40px' : '50px'};

    ${props => !props.iconOnly && StyledRightIcon} {
      margin-left: 10px;
    }
  `}
`;

const StyledRightIcon = styled(Icon)`
  flex: 0 0 auto;

  &&& {
    font-size: 200%;
  }
`;

const StyledLeftIcon = styled(Icon)`
  &&& {
    font-size: 200%;
  }
`;

const StyledPressableText = styled('span')`
  flex: 1 1 auto;
  font-size: inherit;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: ${props => ['button-primary', 'button-alternate', 'button-outline'].includes(props.variant) ? 'nowrap' : 'normal'};
`;

class Pressable extends React.PureComponent<PressableProps, {}> {
  static defaultProps = {
    as: 'button',
    variant: 'button-primary',
    small: false,
    hideIcon: false,
    icon: 'arrow-right',
    iconPlacement: 'end',
    iconOnly: false,
  }

  constructor(props: PressableProps) {
    super(props);

    const { as, ...otherProps } = props;
    this.WrapperComponent = pressableFactory(as, otherProps);
  }

  render() {
    // eslint-disable-next-line no-unused-vars
    const { as, children, icon, ...componentProps } = this.props;
    const WrapperComponent = this.WrapperComponent;
    const showLeftIcon = this.props.variant !== 'text' && this.props.variant !== 'text-boring' && this.props.iconPlacement === 'start' && !this.props.hideIcon;
    const showRightIcon = this.props.variant !== 'text' && this.props.variant !== 'text-boring' && this.props.iconPlacement === 'end' && !this.props.hideIcon;

    // TODO wait for do expressions to land in ecmascript, because i will NOT do `let`
    const fontSize = (function(props) {
      if (props.small) {
        return 'button-small';
      }

      if (props.variant === 'text' || props.variant === 'text-boring') {
        return 'inherit';
      }

      return 'button';
    })(this.props);

    return (
      <WrapperComponent fontSize={fontSize} {...componentProps}>
        {showLeftIcon && <StyledLeftIcon name={icon} />}
        {!this.props.iconOnly && <StyledPressableText variant={this.props.variant}>{children}</StyledPressableText>}
        {showRightIcon && <StyledRightIcon name={icon} />}
      </WrapperComponent>
    );

  }
}

// last cast to make sure we don't accidentally mistype a prop
(Pressable.defaultProps: PressableProps);

export default Pressable;
