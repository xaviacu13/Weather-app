import React from 'react';
import PropTypes from 'prop-types';

const Weather = ({result}) => {

  const { name, main } = result;

  const kelvin = 273.15;

  if(!name) return null;

  return (
    <div className="card-panel white col s12">
      <di className="black-text">
        <h2>El Clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat( main.temp - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p> Temperatura Maxima:
          {parseFloat( main.temp_max - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
        <p> Temperatura Minima:
          {parseFloat( main.temp_min - kelvin, 10).toFixed(2)} <span> &#x2103;</span>
        </p>
      </di>
    </div>
   );
}

Weather.propTypes = {
  result: PropTypes.object.isRequired,
}
 
export default Weather;