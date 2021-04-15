import React, {useState} from "react";
import { FirebaseDatabaseNode } from "@react-firebase/database";

/**
 * Ce composant n'est là que pour servir d'exemple, vous
 * pouvez vous inspirer du code pour voir comment ça se passe.
 */
export default function CatsList() {

  const [areCatsDisplayed, setCatsDisplayState] = useState(false);

  return (
    <div className="CatsList" style={{marginBottom: "1rem", maxHeight: "400px", overflow: "auto"}}>
      <h2>Liste des chats</h2>
      <button onClick={toggleCatsDisplay}>
        {areCatsDisplayed ? "Afficher les chats" : "Cacher les chats"}
      </button>
      {areCatsDisplayed && (
        <FirebaseDatabaseNode
          path="cats/"
        >
          {data => {
            /* Nous sommes dans une fonction à part entière ici. On peut faire ce qu'on veut dedans*/
            console.log(data); // Commenter cette ligne si elle vous gêne. Elle donne des informations qui peuvent être intéressantes
            let catsList = null;
            if (data.value) {
              // On convertit l'objet value en un tableau, puis on récupère seulement la valeur de ce tableau
              catsList = Object.entries(data.value).map(cat => <p>{cat[1]}</p>);
            }
            return (
              <pre style={{ height: 300, overflow: "auto" }}>
                {catsList}
              </pre>
            );
          }}
        </FirebaseDatabaseNode>
      )}
    </div>
  )

  /**
   * Cette fonction va afficher ou cacher le composant FirebaseDatabaseNode, et ce composant
   * va lui-même charger les informations en fonction des props que vous lui passez.
   */
  function toggleCatsDisplay() {

    if (areCatsDisplayed === true) {
      setCatsDisplayState(false);
    }
    else {
      setCatsDisplayState(true);
    }
  }
}
