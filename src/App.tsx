import { useState } from 'react'
import './App.css'

function App() {
  const [fourniture, setFourniture] = useState("Colle");
  const [liste, setListe] = useState([{ id: 1, text: "Colle", done: false }]);

  function ajouterTache(){
    setListe([...liste, {id: Date.now(), text:fourniture, done: false}]);
  }

  function changerDone(selectedId){
    setListe(liste.map(item => 
    item.id === selectedId ? { ...item, done: !item.done } : item
  ));
  }

  function modifierText(indexVisé, newText) {
    setListe(liste.map(item => item.id === indexVisé ? {...item, text: newText} : item));
  }

  function supprimerTache(index) {
    setListe(liste.filter(item => item.id != index));
  }

  return (
    <>
      <section>
        <div>
          <h1 className="text-3xl font-bold underline text-blue-600">Vio React Project</h1>
          <h2>Liste de fournitures à acheter</h2>

          <ul>
            {liste.map((objet) => (
              <li key={objet.id}>
                <input type="checkbox" className='m-3' checked={objet.done} onChange={() => changerDone(objet.id)} />
                <input type="text" className={`m-3 border ${objet.done ? "line-through" : ""}`} defaultValue={objet.text} onChange={(e) => modifierText(objet.id, objet.text)} />

                <button
                  type="button"
                  className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => supprimerTache(objet.id)}
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
            type="button"
            className="m-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => ajouterTache(fourniture)}
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
