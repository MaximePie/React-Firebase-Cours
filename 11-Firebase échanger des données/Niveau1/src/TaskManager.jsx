import React from "react";
import firebase from "firebase";
import Consignes from "./Consignes.jsx";
import CatsList from "./CatsList.jsx";
import TasksList from "./TasksList.jsx";

/**
 * C'est le composant qui affiche le gestionnaire des tâches
 * Votre première mission sera de générer des tâches et de les afficher.
 * Ouvrez le composant TasksList et laissez-vous guider !
 */
export default function TaskManager() {
  return (
    <div className="TaskManager">
      <Consignes/>
      <CatsList/>
      <TasksList/>
      <button
        onClick={logout}
      >
        Sign Out
      </button>
    </div>
  );

  /**
   * Disconnect from the current instance
   */
  function logout() {
    firebase.auth().signOut();
  }
}
