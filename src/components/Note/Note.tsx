import * as React from 'react';
import styled from 'react-emotion';
import { IStyledTheme } from '../../themes';
import InfoIcon from './img/info.svg';
import TriangleIcon from './img/triangle.svg';

export interface INoteProps {
  children: JSX.Element | string;
  hideActionName: string;
  showActionName: string;
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

  public readonly state: INoteState = {
    isOpen: true,
  };

  public render(): JSX.Element {
    const { hideActionName, showActionName, ...other } = this.props;
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

  private handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  };
}

const Collapsible = styled<{ isOpen: boolean }, 'div'>('div')`
  padding-top: 11px;
  display: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 'block' : 'none')};
  border-bottom: 1px solid ${({ theme }: { theme: IStyledTheme }): string =>
    theme.colors.border};
  color: ${({ theme }: { theme: IStyledTheme }): string =>
    theme.colors.text.primary};
`;

const Top = styled('div')`
  display: flex;
  align-items: center;
  &:after {
    content: " ";
    height: 1px;
    background-color: ${({ theme }: { theme: IStyledTheme }): string =>
      theme.colors.border};
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
  color: ${({ theme }: { theme: IStyledTheme }): string =>
    theme.colors.text.secondary};
  & svg {
    transition: fill 0.12s ease;
    fill: ${({ theme }: { theme: IStyledTheme }): string =>
      theme.colors.palette.secondary};
  }
  &:hover {
    color: ${({ theme }: { theme: IStyledTheme }): string =>
      theme.colors.palette.action.hover.secondary};
    svg {
      fill: ${({ theme }: { theme: IStyledTheme }): string =>
        theme.colors.palette.action.hover.secondary};
    }
  }
  &:active {
    color: ${({ theme }: { theme: IStyledTheme }): string =>
      theme.colors.palette.action.active.secondary};;
    svg {
      fill: ${({ theme }: { theme: IStyledTheme }): string =>
        theme.colors.palette.action.active.secondary};
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
