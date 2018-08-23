// @flow
import type { Node } from 'react';
import React from 'react';
import classNames from 'classnames';
import Span from '../Span';
import SpritesheetSVG from '../../assets/icons/sprite-sheet.svg';
import SpritesheetPNG from '../../assets/icons/sprite-sheet.png';

type Props = {
  name: string,
  fontSize: string,
  variant?: number,
};

const spritesheet = {};

// Define the amount of rows (1-index based).
spritesheet.rows = 3;

// Define the icons from left to right in the sheet using a human-readable name.
spritesheet.names = [
  'facebook',
  'twitter',
  'youtube',
  'instagram',
  'arrow-left',
  'arrow-right',
  'search',
  'thumb-up',
  'app',
  'laadpas',
  'laadpaal',
  'slim-laden',
  'solar-panel',
  'windmill',
  'bio',
  'send',
  'sun',
];

const StyledSpan = Span.extend`
  background-image: url('${SpritesheetPNG}');
  background-image: url('${SpritesheetSVG}');
  background-position: -${props => spritesheet.names.indexOf(props.name)}em -${props => props.variant}em;
  background-repeat: no-repeat;
  background-color: rgba(255, 255, 255, 0);
  background-size: ${spritesheet.names.length}em ${spritesheet.rows}em;
  display: inline-block;
  font-size: ${props => props.fontSize};
  height: 1em;
  width: 1em;
  vertical-align: middle;
}`;

const Icon = (props: Props): Node => (
  <StyledSpan
    {...props}
    className={classNames('icon', `icon-${props.name}`, props.className)}
  />
);

Icon.defaultProps = {
  fontSize: '150%',
  variant: 0,
};

export default Icon;
