import React from "react";

/**
 * Remplissez ce composant de manière à créer des tâches et à les afficher.
 *
 */
export default function TasksList() {
  const [tasksList, setTasksList] = React.useState([]);

  return (
    <div className="TasksList" style={{marginBottom: "1rem"}}>
      <h2>Liste des tâches</h2>
      <div>
       {tasksList.map(task => <p>{task};</p>)}
      </div>
      <div>
        <button onClick={createTasks}>
          Créer les tâches
        </button>
        <button onClick={fetchTasks}>
          Récupérer les tâches
        </button>
      </div>
    </div>
  )

  function fetchTasks() {

  }

  function createTasks() {

  }
}
