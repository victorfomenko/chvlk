import * as React from 'react';
import styled from 'react-emotion';
import { PropsWithTheme } from '../../../utils/styledHelpers';
import InfoIcon from './img/info.svg';
import TriangleIcon from './img/triangle.svg';

import {
  getItem as localStorageGet,
  setItem as localStorageSet,
} from '../../../utils/localStorage';

export interface INoteProps {
  readonly children: JSX.Element | string;
  readonly hideActionName: string;
  readonly showActionName: string;
  readonly storageKey?: string;
  readonly isDefaultOpen?: boolean;
  readonly isOpen?: boolean;
  readonly onToggle?: (
    isOpen: boolean,
    e: React.MouseEvent<HTMLElement>
  ) => void;
}

interface INoteState {
  readonly isOpen: boolean;
}
interface ITriangleProps {
  readonly isOpen: boolean;
  readonly [k: string]: any;
}

export class Note extends React.PureComponent<INoteProps, INoteState> {
  public static displayName: string = 'Note';

  public static getDerivedStateFromProps(
    props: INoteProps,
    state: INoteState
  ): { isOpen?: boolean } | null {
    if (typeof props.isOpen !== 'undefined' && props.isOpen !== state.isOpen) {
      const { storageKey } = props;
      if (storageKey) {
        localStorageSet(storageKey, props.isOpen);
      }
      return { isOpen: props.isOpen };
    }
    return null;
  }

  constructor(props: INoteProps) {
    super(props);
    const { storageKey, isDefaultOpen = true } = props;
    if (storageKey) {
      let isOpen = localStorageGet(storageKey);
      if (typeof isOpen !== 'boolean') {
        isOpen = isDefaultOpen;
      }
      this.state = { isOpen };
    } else {
      this.state = { isOpen: isDefaultOpen };
    }
  }

  public render(): JSX.Element {
    const { hideActionName, showActionName, storageKey, ...other } = this.props;
    const { isOpen } = this.state;
    return (
      <div {...other}>
        <Top>
          <ActiveArea onClick={this.handleClick}>
            <StyledInfoIcon />
            <ActionName>
              {isOpen ? hideActionName : showActionName}
            </ActionName>
            <StyledTriangleIcon isOpen={isOpen} />
          </ActiveArea>
        </Top>
        <Collapsible isOpen={isOpen}>
          {this.props.children}
        </Collapsible>
      </div>
    );
  }

  private handleClick = (e: React.MouseEvent<HTMLElement>) => {
    const { storageKey } = this.props;
    const newIsOpen = !this.state.isOpen;
    if (this.props.onToggle) {
      e.persist();
    }

    this.setState({ isOpen: newIsOpen }, () => {
      if (storageKey) {
        localStorageSet(storageKey, newIsOpen);
      }
      if (this.props.onToggle) {
        this.props.onToggle(!this.state.isOpen, e);
      }
    });
  };
}

const Collapsible = styled<{ isOpen: boolean }, 'div'>('div')`
  padding: 11px 0;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
  border-bottom: 1px solid ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.borderControlDefault};
  color: ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.textPrimaryColor};
`;

const Top = styled('div')`
  display: flex;
  align-items: center;
  &:after {
    content: " ";
    height: 1px;
    background-color: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.borderControlDefault};
    flex-grow: 1;
  }
`;

const ActiveArea = styled('div')`
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 16px;
  font-size: 13px;
  user-select: none;
  color: ${({ theme }: PropsWithTheme<{}>): string =>
    theme.colors.textSecondaryColor};
  & svg {
    transition: fill 0.12s ease;
    fill: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.textSecondaryColor};
  }
  &:hover {
    color: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.textSecondaryColorHover};
    svg {
      fill: ${({ theme }: PropsWithTheme<{}>): string =>
        theme.colors.textSecondaryColorHover};
    }
  }
  &:active {
    color: ${({ theme }: PropsWithTheme<{}>): string =>
      theme.colors.textSecondaryColorHover};
    svg {
      fill: ${({ theme }: PropsWithTheme<{}>): string =>
        theme.colors.textSecondaryColorHover};
    }
  }
`;

const ActionName = styled('span')`
  margin: 0 6px 0 8px;
  border-bottom: 1px dashed #AEB9C3;
`;

const StyledInfoIcon = styled(InfoIcon)`
  width: 16px;
  height: 16px;
`;

const StyledTriangleIcon = styled(({ isOpen: _, ...other }: ITriangleProps) =>
  <TriangleIcon {...other} />
)`
  display: inline-block;
  width: 10px;
  height: 4px;
  transition: transform 0.2s ease-in-out;
  transform: ${({ isOpen }: ITriangleProps) =>
    isOpen ? 'rotate(0deg)' : 'rotate(180deg)'};
`;

export default Note;
