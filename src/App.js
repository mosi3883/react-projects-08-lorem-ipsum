import React, { useState } from 'react';
import shuffle from 'underscore/modules/shuffle';
import data from './data';
import LoremText from './LoremText';
function App() {
  const [count, setCount] = useState(1);
  const [text, setText] = useState([]);
  const maxCount = data.length;
  const handleSubmit = (e) => {
    e.preventDefault();
    let amount = parseInt(count);
    if (amount < 0) {
      amount = 0;
    }
    if (amount > maxCount) {
      amount = maxCount;
    }
    setText(shuffle(data).slice(0, amount));
  };
  return (
    <section className='section-center'>
      <h3>tired of boring lorem ipsum?</h3>
      <form className='lorem-form' onSubmit={handleSubmit}>
        <label htmlFor='amount'>paragraphs:</label>
        <input
          type='number'
          min='0'
          max={maxCount}
          id='amount'
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type='submit' className='btn'>
          generate
        </button>
      </form>
      <LoremText text={text} />
    </section>
  );
}

export default App;
