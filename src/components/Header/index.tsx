import React, { useContext } from 'react';
import Switch from 'react-switch';
import { shade } from 'polished';
import { ThemeContext } from 'styled-components';

import * as S from './styles';

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <S.Header>
      <p>Theme Switcher</p>
      <Switch
        onChange={toggleTheme}
        checked={title === 'dark'}
        checkedIcon={false}
        uncheckedIcon={false}
        height={12}
        width={40}
        handleDiameter={20}
        offColor={shade(0.15, colors.primary)}
        onColor={shade(0.5, colors.primary)}
      />
    </S.Header>
  );
};

export default Header;
