import React from 'react';

const LoremText = ({ text }) => {
  return (
    <article className='lorem-text'>
      {text.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </article>
  );
};

export default LoremText;
