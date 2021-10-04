import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';

function App() {

  const [search, saveSearch] = useState({
    city: '',
    country: ''
  });

  const [query, saveQuery] = useState(false)

  const { city, country } = search;

  useEffect(()=>{
    const queryAPI = async () => {
      if (query){
        const appId = '278d3cfddde11429d85d73467f6e76df'
        const url =  `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${appId}`;
        const answer = await fetch(url);
        const result = await answer.json();
        console.log(result);
      }
    }
    queryAPI();
  },[query]);

  return (
    <>
      <Header 
        title='Weanther React App'
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
              2
            </div>
          </div>
        </div>
      </div>
    </>
 );
}

export default App;
