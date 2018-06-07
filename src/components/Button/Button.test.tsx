import * as React from 'react';
import { mount } from '../../../utils/render';
import Button from './';

test('Button should call onClick once', () => {
  const onClick = jest.fn();

  mount(<Button onClick={onClick}>Button</Button>)
    .find('button')
    .simulate('click');

  expect(onClick).toHaveBeenCalledTimes(1);
});

test('Button should render its text in uppercase', () => {
  const onClick = jest.fn();
  const inText = 'Button';

  const outText = mount(<Button onClick={onClick}>{inText}</Button>)
    .find('button')
    .text();

  expect(inText.toUpperCase()).toEqual(outText);
});
