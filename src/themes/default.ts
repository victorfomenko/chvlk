import { IStyledTheme } from './';

const colors = {
  background: '#FFF',
  bgErrorDefault: '#FDF2F2',
  bgErrorFocus: '#F9D4D4',
  bgErrorHover: '#FBE3E3',

  bgControlDefault: '#F5FAFE',
  bgControlDisabled: '#FAFDFF',
  bgControlFocus: '#DEEBF5',
  bgControlHover: '#EFF5FA',

  borderControlDefault: '#E1E4E7',
  borderControlDisabled: '#F0F2F3',
  borderControlError: '#E50000',
  borderControlFocus: '#A6ADB6',
  borderControlHover: '#A6ADB6',

  textControlDefault: '#4F5F6F',
  textControlDisabled: '#C8CFD5',
  textErrorColor: '#E50000',
  textPrimaryColor: '#4f5f6f',
  textSecondaryColor: '#8293A3',
  textSecondaryColorHover: '#5C6E7E',
};

const theme: IStyledTheme = {
  colors,
};
export default theme;
