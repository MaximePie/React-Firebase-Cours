import React from "react";

/**
 * Ce composant n'est là que pour servir d'exemple, vous
 * pouvez vous inspirer du code pour voir comment ça se passe.
 * @returns {*}
 * @constructor
 */
export default function CatsList() {
  const [cats, setCats] = React.useState([]);

  function createCats() {

  }

  function fetchCats() {

  }

  return (
    <div className="CatsList" style={{marginBottom: "1rem"}}>
      <h2>Liste des chats</h2>
      <div>
        {cats.map(cat => <p>{cat}</p>)}
      </div>
      <div>
        <button onClick={createCats}>Create Cats</button>
        <button onClick={fetchCats}>Récupérer les cats</button>
      </div>
    </div>
  )
}
