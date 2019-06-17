import React from 'react';
import { styled } from 'linaria/react';

const Wrapper = styled.div`
  font-size: 2rem;
`;

const Counter = props => {
  return (
    <Wrapper>
      {props.number}
      <button onClick={() => props.increment(1)}>+</button>
      <button onClick={() => props.decrement(1)}>-</button>
      <button onClick={() => props.incrementAsync({delay: 1000, number: 1})}>1초 뒤 +</button>
    </Wrapper>
  );
};

export default Counter;
