import React, { useState } from 'react';

const Formulario = () => {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });

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
  }

  return ( 
    <form
      onSubmit={handleSubmit}
    >
      {error && <p className="red darken-4 error" >Todos los campos son obligatorios</p>}
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
 
export default Formulario;