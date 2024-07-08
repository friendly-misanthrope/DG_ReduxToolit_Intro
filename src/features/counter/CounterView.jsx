import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const CounterView = () => {

  const [incAmount, setIncAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });

  const addVal = parseInt(incAmount) || 0;

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </section>
  );
}

export default CounterView;