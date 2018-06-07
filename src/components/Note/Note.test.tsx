import * as React from 'react';
import { mount } from '../../../utils/render';
import Note from './';

describe('Note', () => {
  it('should render children inside', () => {
    const props = {
      hideActionName: 'Hide name',
      showActionName: 'Show name',
    };
    const children = <div className="testDiv">test</div>;
    const wrapper = mount(<Note {...props}>{children}</Note>);

    expect(wrapper.contains(children)).toEqual(true);
  });

  it(
    'should have «hideActionName» text when open' +
      'and «showActionName» text when closed',
    () => {
      const props = {
        hideActionName: 'Hide name',
        showActionName: 'Show name',
      };
      const wrapper = mount(<Note {...props}>test</Note>);

      expect(wrapper.find('span').text()).toEqual(props.hideActionName);
      wrapper.find('span').at(0).simulate('click');
      expect(wrapper.find('span').text()).toEqual(props.showActionName);
    }
  );
});
