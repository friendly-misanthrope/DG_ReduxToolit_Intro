import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './counterSlice';
import { useState } from 'react';

const CounterView = () => {

  const [incAmount, setIncAmount] = useState(0);
  const dispatch = useDispatch();
  const count = useSelector((state) => {
    return state.counter.count;
  });

  const addVal = Number(incAmount) || 0;

  const resetGlobal = () => {
    setIncAmount(0);
    dispatch(reset());
  }

  const changeHandler = (e) => {
    setIncAmount(() => e.target.value)
  }

  const incrementAmount = (e) => {
    e.preventDefault();
    dispatch(incrementByAmount(addVal));
    setIncAmount(0);
  }

  return (
    <section>
      <h2>Counter</h2>
      <p>{count}</p>
      <div>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(increment())}>+</button>
      </div>
      

      

        <form>
          <label htmlFor="incAmount">Increment Amount: </label>
          <input type="text" value={addVal} name="incAmount" onChange={changeHandler}/>
          <button onClick={incrementAmount}>Add Amount</button>
          <button onClick={resetGlobal}>Reset All</button>
        </form>
    
    </section>
  );
}

export default CounterView;