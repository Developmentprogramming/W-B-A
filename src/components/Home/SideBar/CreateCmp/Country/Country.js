import React from 'react';

const Country = ({ countryName, timeZone }) => {
  return (
    <option value={countryName}>
      {`${countryName} ${timeZone}`}
    </option>
  );
}

export default Country;