import { useSelector, useDispatch } from '@reduxjs/toolkit';
import { increment, decrement } from './counterSlice';

const CounterView = () => {
  const count = useSelector((state) => {
    return state.counter.count;
  });

  const dispatch = useDispatch();

  return (
    <section>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
      </div>
    </section>
  );
}

export default CounterView;