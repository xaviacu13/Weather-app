import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import Weather from './components/Weather';
import Error from './components/Error';

function App() {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });

  const [query, saveQuery] = useState(false);
  const [result, saveResult] = useState({});
  const [error, saveError] = useState(false);

  const { city, country } = search;

  useEffect(()=>{
    const queryAPI = async () => {
      if (query){
        const appId = '278d3cfddde11429d85d73467f6e76df'
        const url =  `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appId}`;

        const answer = await fetch(url);
        const results = await answer.json();

        saveResult(results);
        saveQuery(false);

        if(results.cod === "404"){
          saveError(true)
        }else{
          saveError(false)
        }
      }
    }
    queryAPI();
     // eslint-disable-next-line
  },[query]);

  let component
  if(error){
    component = <Error message="No hay resultados"/>
  }else{
    component =<Weather result={result} />
  }

  return (
    <>
      <Header 
        title='Weather React App'
      />
      <div className="contenedor-form">
        <div className="container">
          <div className="row">
            <div className="col m6 s12">
              <Formulario
                search={search}
                saveSearch={saveSearch}
                saveQuery={saveQuery}
              />
            </div>
            <div className="col m6 s12">
              {component}
            </div>
          </div>
        </div>
      </div>
    </>
 );
}

export default App;
