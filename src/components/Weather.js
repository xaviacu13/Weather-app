import React from 'react';

const Weather = (result) => {

  const { name, main } = result

  if (!name) return null;

   const kelvin = 273.15;

  return ( 
    <div className="card-panel white col s12">
      <di className="black-text">
        <h2>El Clima de {name} es: </h2>
        <p className="temperatura">
          {parseFloat( main.temp - kelvin, 10).toFixed(2)} <span> &#x2103</span>
        </p>
      </di>
    </div>
   );
}
 
export default Weather;