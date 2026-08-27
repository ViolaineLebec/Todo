import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);
  const [fourniture, setFourniture] = useState("Colle");
  const [liste, setListe] = useState([fourniture]);


  function modifier(indexVisé, newText) {
    setListe((listeActive) => listeActive.map((item, index) => index === indexVisé ? newText : item));
  }


  return (
    <>
      <section>
        <div>
          <h1 className="text-3xl font-bold underline text-blue-600">Vio React Project</h1>
          <h2>Liste de fournitures à acheter</h2>

          <ul>
            {liste.map((fourn, index) => (
              <li key={index}>
                <input type="checkbox" className="m-3" />
                <input type="text" className='m-2 border' value={fourn} onChange={(e) => modifier(index, e.target.value)} />

                <button
                  type="button"
                  className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setListe((liste) => liste.filter((e) => e != fourn))}
                >
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
          <input
            type="text"
            className="m-2 border"
            value={fourniture}
            onChange={(e) => setFourniture(e.target.value)}
          />
          <button
            type=""
            className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => setListe((liste) => [...liste, fourniture])}
            onBlur={() => setFourniture("")}

          >
            Ajouter
          </button>
        </div>

      </section>

    </>
  );
}

export default App
