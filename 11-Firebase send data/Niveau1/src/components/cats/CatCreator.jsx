import React, {useState} from "react";

/**
 *
 * @param runMutation est une props qui nous vient de FirebaseDatabaseMutation
 * @returns {*}
 * @constructor
 */
export default function CatCreator({runMutation}) {

  const [catName, setCatName] = useState('');

  return (
    <div>
      <input type="text" value={catName} onChange={updateCatName}/>
      <button
        onClick={createCat}
      >
        Créer un chat
      </button>
    </div>
  )

  /**
   * Cette méthode met à jour le state de catName avec setCatName et la valeur reçue en paramètre.
   * @param event
   */
  function updateCatName(event) {
    setCatName(event.target.value);
  }

  /**
   * Cette fonction va créer un chat en appelant la méthode runMutation reçue en props
   * Elle va envoyer un objet {name: "Bibi"}
   * Et elle va appeler onCreate pour transmettre la clé de l'objet fraîchement créé
   */
  function createCat() {
    runMutation(catName).then(value => {
      setCatName('');
      // Value contient des informations importantes sur l'objet créé
      console.log(value);
    });
  }
}
