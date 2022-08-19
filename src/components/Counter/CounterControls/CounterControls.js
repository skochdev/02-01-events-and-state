import * as S from './CounterControls.styled';

export const CounterControls = ({ onIncrement, onDecrement }) => {
  return (
    <>
      <S.Button onClick={onDecrement} type="button">
        -
      </S.Button>

      <S.Button onClick={onIncrement} type="button">
        +
      </S.Button>
    </>
  );
};
