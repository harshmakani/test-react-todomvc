import React from 'react';
const CountInfo = ({ count }) => {
  return (
    <p className='lead'>
      <strong>{count.active}</strong> Active{' '}
      {count.active === 1 ? `Item` : `Items`} | <strong>{count.total}</strong>{' '}
      Total {count.total === 1 ? `Item` : `Items`}
    </p>
  );
};
export default CountInfo;
