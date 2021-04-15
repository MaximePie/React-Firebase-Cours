import React from "react";

/**
 * TasksEditor va afficher un composant TaskCreator
 * Ce composant TaskCreator aura pour but de proposer un formulaire simple
 * permettant de saisir un texte, et un bouton "Envoyer".
 * Une fois qu'on clique sur le bouton "Envoyer", on appelle la méthode
 */
export default function TasksEditor() {
  return (
    <div className="TasksCreator">
      <p>Créez votre composant <code>TaskCreator</code> ici</p>
      <p>N'oubliez pas de bien l'envelopper dans un <code>FirebaseDatabaseMutation</code> !</p>
    </div>
  )
}
