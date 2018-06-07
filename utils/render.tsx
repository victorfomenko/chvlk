import { ThemeProvider } from 'emotion-theming';
import {
  configure,
  mount as _mount,
  MountRendererProps,
  ReactWrapper,
  shallow as _shallow,
  ShallowRendererProps,
  ShallowWrapper,
} from 'enzyme';
import * as ReactSixteenAdapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import theme from '../src/themes/default';

configure({ adapter: new ReactSixteenAdapter() });

export const mount = (
  tree: JSX.Element,
  options?: MountRendererProps
): ReactWrapper =>
  _mount(
    <ThemeProvider theme={theme}>
      {tree}
    </ThemeProvider>,
    options
  );

export const shallow = (
  tree: JSX.Element,
  options?: ShallowRendererProps
): ShallowWrapper =>
  _shallow(
    <ThemeProvider theme={theme}>
      {tree}
    </ThemeProvider>,
    options
  );

export default { mount, shallow };
