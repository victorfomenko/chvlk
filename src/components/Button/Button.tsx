import * as React from 'react';
import styled from '../../../utils/styled';
import { IStyledTheme } from '../../themes';

export interface IButtonProps {
  onClick: (event: React.SyntheticEvent<HTMLButtonElement>) => void;
  children: JSX.Element | string;
}

const ButtonElement = styled.button`
  font-size: 13px;
  line-height: 18px;
  color: ${({ theme }: { theme: IStyledTheme }): string => theme.colors.main};
  padding: 12px 16px;
  background: ${({ theme }: { theme: IStyledTheme }): string =>
    theme.colors.background};
  border: 1px solid ${({ theme }: { theme: IStyledTheme }): string =>
    theme.colors.main};
  cursor: pointer;

  :hover {
    background: ${({ theme }: { theme: IStyledTheme }): string =>
      theme.colors.main};
    color: ${({ theme }: { theme: IStyledTheme }): string =>
      theme.colors.background};
  }
`;

export class Button extends React.PureComponent<IButtonProps, {}> {
  public static displayName: string = 'Button';

  public render(): JSX.Element {
    const {} = this.props;
    return (
      <ButtonElement onClick={this.props.onClick}>
        {typeof this.props.children === 'string'
          ? this.props.children.toUpperCase()
          : this.props.children}
      </ButtonElement>
    );
  }
}

export default Button;
