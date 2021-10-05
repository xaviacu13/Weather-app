import React, { useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Formulario = ({search, saveSearch, saveQuery}) => {

  const [error, saveError] = useState(false);

  const { city, country } = search;

  const handleChange = e => {
    saveSearch({
      ...search,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
    if (city.trim() === '' || country.trim() === ''){
      saveError(true)
      return
    }

    saveError(false);

    saveQuery(true);
  }

  return ( 
    <form
      onSubmit={handleSubmit}
    >
      {error && <Error message="Ambos campos son obligatorios" />}
      <div className="input-field col s12">
        <input 
          type="text"
          name="city"
          id="city"
          value={city}
          onChange={handleChange}

        />
        <label htmlFor="city">City</label>
        <div className="input-field col s12">
          <select
            name="country"
            id="country"
            value={country}
            onChange={handleChange}
          >
            <option value="">--Select Country--</option>
            <option value="BO">Bolivia</option>
            <option value="US">Estados Unidos</option>
            <option value="MX">México</option>
            <option value="AR">Argentina</option>
            <option value="CO">Colombia</option>
            <option value="CR">Costa Rica</option>
            <option value="ES">España</option>
            <option value="PE">Perú</option>
          </select>
          <label htmlFor="country">Country</label>
        </div>
        <div>
          <input 
            type="submit"
            value="Search Weamther"
            className="waves-effect waves-light btn-large btn-block yellow accent-4"
          />
        </div>

      </div>
    </form>
   );
}

Formulario.propTypes = {
  saveSearch: PropTypes.func.isRequired,
  saveQuery: PropTypes.func.isRequired,
  search: PropTypes.object.isRequired,
}
 
export default Formulario;