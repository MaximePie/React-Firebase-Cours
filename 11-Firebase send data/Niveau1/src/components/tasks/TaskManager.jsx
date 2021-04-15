import React from "react";
import firebase from "firebase";
import TasksEditor from "./TasksEditor.jsx";
import TasksList from "./TasksList.jsx";

/**
 * C'est le composant qui affiche le gestionnaire des tâches
 * Votre première mission sera de générer des tâches et de les afficher.
 * Pour créer des tâches, ouvrez le composant TasksEditor et laissez-vous guider !
 * Pour afficher les tâches, ouvrez le composant TasksList et laissez-vous guider !
 */
export default function TaskManager() {
  return (
    <div className="TaskManager">
      <TasksEditor/>
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
