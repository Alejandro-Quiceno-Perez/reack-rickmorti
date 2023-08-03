import imgRickMorty from './img/rick-morty.png';
import { useState } from 'react';
import './App.css';
import Characters from './components/Characters';

function App() {
  // Se crea un useState ya que es el encargado de renderizar todos los datos
  // OJO: Se debe de importar 
  const [characters, setCharacters] = useState(null);




  //Esta funcion la debemos de hacer asincrona para ponder llamar la Api
  const reqApi = async () => {

    // debemos usar el metodo await fetch para hacer dicha petición, luego 
    // se copia la URL de la API  

    const api = await fetch("https://rickandmortyapi.com/api/character/");

    // se crea otra constante para llamar toda la informacion que necesitamos
    // sobre la api y poder manipular los datos de dicha API
    const characterApi = await api.json();

    //Se le pasa al setCharacters los resultados para poderlos manipular 
    setCharacters(characterApi.results);

  }
  return (
    <div className="app">
      <header className="app-header">
        <h1 className='title'>Rick & Morty</h1>
        {/* Se crea el condicional para mostrar elementos en pantalla, cuando el
        elemento esta vacio no mne muestra informacion, pero cuando esta lleno 
        arrojame toda la información */}
        {characters ? (
          /* Se le pasa la informacion mediante los props*/
          < Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <div  className='img-titulo'>
            <img src={imgRickMorty} alt="Rick & Morty img" className='img-home' />
            <button onClick={reqApi} className='btn-search'>Buscar más personajes</button>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;

// Despues seguimos generando los componentes, se crea la carpeta de components
// y  se crea el archivo .js 