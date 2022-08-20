import React, { Component } from 'react';
import * as S from './ColorPicker.styled';

class ColorPicker extends Component {
  state = {
    activePicker: '',
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
    const selectedColor = options[activePicker]?.color;

    return (
      <S.ColorPicker className="ColorPicker">
        <S.ColorPickerTitle>Color Picker</S.ColorPickerTitle>
        <div>
          <p>Selected color: {selectedColor}</p>
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
