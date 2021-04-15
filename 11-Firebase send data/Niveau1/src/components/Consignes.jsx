import React from "react";

export default function Consignes() {
  return (
    <div>
      <div className="Exercice">
        <h2>Echanger des données basiques avec la base de données Firestorm</h2>
        <div className="Consignes">
          <p className="Note">
            Assurez-vous d'avoir bien lu le
            <a href="https://github.com/MaximePie/React-Firebase-Cours/tree/main/11-Firebase%20%C3%A9changer%20des%20donn%C3%A9es/Niveau1#niveau-1">
              Readme
            </a>
            avant de commencer !
          </p>
          <p>Consulter attentivement le composant <code>CatsManager</code> ainsi que ses enfants</p>
          <p>Remplir le composant <code>TasksCreator</code></p>
          <p>Remplir le composant <code>TasksList</code></p>
        </div>
        <p className="Note">
          Attention, commencez par implémenter <code>TasksCreator</code> pour créer un mécanisme qui permet
          d'ajouter des tâches dans votre base de données, sinon, vous n'aurez rien à afficher !
        </p>
        <p className="Note">
          Vous pouvez vous aider de <a
          href="https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started">
          ce lien</a> si vous en ressentez le besoin
        </p>
        <p className="Note">
          N'oubliez pas de consulter la console développeur (<code>F12</code> sur Chrome) pour consulter
          les appels vers Firebase.
        </p>
      </div>
    </div>
  )
}
