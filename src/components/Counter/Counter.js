import * as S from './Counter.styled';
import { Component } from 'react';
import { Box } from '../Box/Box';
import { CounterControls } from './CounterControls/CounterControls';

export class Counter extends Component {
  static defaultProps = {
    initialValue: 0,
  };

  state = {
    value: this.props.initialValue,
  };

  handleIncrement = () => {
    this.setState(prevState => ({ value: prevState.value + 1 }));
  };

  handleDecrement = () => {
    this.setState(prevState => ({ value: prevState.value - 1 }));
  };

  render() {
    const { handleIncrement, handleDecrement } = this;

    return (
      <Box
        as="section"
        display="flex"
        flexDirection="column"
        alignItems="center"
        flexBasis="1">
        <S.Counter>{this.state.value}</S.Counter>
        <Box>
          <CounterControls
            onIncrement={handleIncrement}
            onDecrement={handleDecrement}
          />
        </Box>
      </Box>
    );
  }
}
