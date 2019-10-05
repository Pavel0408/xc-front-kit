import { lighten } from 'polished';

import * as colors from '@xcritical/theme';
import { ItemTheme } from './interfaces';


export const itemThemeNamespace = '@xcritical\\xc-item';

export const itemThemeStyle: ItemTheme = {
  padding: {
    bottom: 15,
    left: 15,
    right: 15,
    top: 15,
  },
  prefixSpacing: 15,
  postfixSpacing: 15,
  borderRadius: 0,
  font: { weight: 'normal' },
  divided: {
    color: '#F0F0F0',
  },
  focus: {
    outline: '#efefef',
  },
  background: colors.GRAY_LIGHT,
  color: colors.CHAROCOAL,
  hover: {
    background: '#efefef',
    color: colors.CHAROCOAL,
  },
  selected: {
    background: '#efefef',
    color: colors.CHAROCOAL,
  },
  active: {
    background: '#efefef',
    color: colors.CHAROCOAL,
  },
  disabled: {
    background: '#F0F0F0',
    color: lighten(0.6, colors.CHAROCOAL),
  },
};