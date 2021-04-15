import React from "react";
import { FirebaseDatabaseMutation } from "@react-firebase/database";
import CatCreator from "./CatCreator.jsx";

export default function CatsEditor() {
  const path ='cats/';
  return (
    <div style={{border: "solid 1px", padding: "1rem"}}>
      <h2>Editeur de chats</h2>
      {/* push indique qu'on veut créer un objet. Path indique l'endroit où on veut stocker notre information (cats/) */}
      <FirebaseDatabaseMutation type="push" path={path}>
        <CatCreator/>
      </FirebaseDatabaseMutation>
    </div>
  );
}
