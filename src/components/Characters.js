export default function Characters(props) {
    // Se hace la extraccion de los datos mediante el destructuring
    const { characters, setCharacters } = props;

    //Esta funcion es para volver a resetear la aplicacion y que me dirija al inicio
    const resetApp = () => {
        setCharacters(null);
    }
    return (
        <div className="characters">

            <h1 className="titulo">Personajes</h1>
            <h2 className="back-home" onClick={resetApp}>Volver al home</h2>

            <div className="container-characters">
                {/* En este punto se mapea el objeto y se extrae la informacion  */}

                {characters.map((character, index) => (
                    <div className="card" key={index}>
                        <img src={character.image} alt={character.name} />
                        <div className="nombre-personaje">
                            <h3 >{character.name}</h3>
                            <div className="tipo-personaje">
                                {character.status === "Alive" ? (
                                    <p className="alive">Alive</p>
                                ) : (
                                    <p className="dead">Dead</p>
                                )}
                            </div>
                            <div className="info-card">
                                <p className="text-grey">Episodios: {character.episode.length}</p>
                                <p className="text-grey">Especie: {character.species}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <h2 className="home-end" onClick={resetApp}>Volver al home</h2>
        </div>
    )
}