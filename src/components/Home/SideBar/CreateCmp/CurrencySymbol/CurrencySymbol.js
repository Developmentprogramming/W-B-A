import React from 'react';

const CurrencySymbol = ({ symbol, name}) => {
  return (
    <option>
      {`${symbol} ${name}`}
    </option>
  );
}

export default CurrencySymbol;