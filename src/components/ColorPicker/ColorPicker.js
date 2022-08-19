import React, { Component } from 'react';
import * as S from './ColorPicker.styled';

class ColorPicker extends Component {
  state = {
    activePicker: null,
  };

  setActiveIndex = index => {
    this.setState({ activePicker: index });

    if (this.state.activePicker === index) {
      this.setState({ activePicker: null });
    }
  };

  render() {
    const { options } = this.props;
    const { activePicker } = this.state;

    return (
      <S.ColorPicker className="ColorPicker">
        <S.ColorPickerTitle>Color Picker</S.ColorPickerTitle>
        <div>
          {options.map(({ label, color }, index) => (
            <S.ColorPickerOption
              key={label}
              style={{ backgroundColor: `${color}` }}
              applyActiveStyle={activePicker === index}
              onClick={() => this.setActiveIndex(index)}></S.ColorPickerOption>
          ))}
        </div>
      </S.ColorPicker>
    );
  }
}

export default ColorPicker;
