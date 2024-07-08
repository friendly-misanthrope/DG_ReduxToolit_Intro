import { useDispatch, useSelector } from 'react-redux';
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
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
    </section>
  );
}

export default CounterView;