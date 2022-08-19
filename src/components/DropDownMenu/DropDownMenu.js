import * as S from './DropDownMenu.styled';
import { Component } from 'react';

export class DropDownMenu extends Component {
  state = {
    isMenuOpen: false,
  };

  toggleDropDownMenu = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    const { toggleDropDownMenu } = this;
    const { isMenuOpen } = this.state;
    return (
      <S.Dropdown>
        <button type="button" onClick={toggleDropDownMenu}>
          {isMenuOpen ? 'Hide menu' : 'Show menu'}
        </button>
        {isMenuOpen && (
          <S.DropDownMenu>
            <p>Peekaboo!</p>
          </S.DropDownMenu>
        )}
      </S.Dropdown>
    );
  }
}
