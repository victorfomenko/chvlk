import { shallow, ShallowWrapper } from 'enzyme';
import * as React from 'react';

export type IGetTarget = (
  tree: ShallowWrapper<any, any>
) => jest.Matchers<void>;

interface ISnapshotInstance<P> {
  props: P;
  getTarget?: IGetTarget;
}

const defaultGetTarget: IGetTarget = (tree: ShallowWrapper<any, any>): any =>
  tree;

export default function<P>(
  Component: React.ComponentClass<P>,
  snapshots: Array<ISnapshotInstance<P>>
): void {
  test(`${Component.displayName} snapshots`, () => {
    snapshots.forEach((snapshot: ISnapshotInstance<P>): void => {
      expect(
        (snapshot.getTarget || defaultGetTarget)(
          shallow(<Component {...snapshot.props} />)
        )
      ).toMatchSnapshot();
    });
  });
}
