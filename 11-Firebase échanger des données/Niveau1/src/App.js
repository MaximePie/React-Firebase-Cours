import "./style.css";

import React from "react";
import "firebase/auth";
import firebase from "firebase";
import {FirebaseAuthProvider, IfFirebaseAuthed, IfFirebaseUnAuthed} from "@react-firebase/auth";
import { FirebaseDatabaseProvider } from "@react-firebase/database";
import {firebaseConfig} from "./firebaseConfig.js";

import TaskManager from "./TaskManager.jsx";
import Login from "./Login.jsx";

function App() {
  return (
    <FirebaseDatabaseProvider>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        {/* Ce composant n'est généré que si on n'est pas authentifié. */}
        <IfFirebaseUnAuthed>
          <Login/>
        </IfFirebaseUnAuthed>
        {/* Ce composant n'est généré que si l'utilisateur est connecté. */}
        <IfFirebaseAuthed>
          <TaskManager/>
        </IfFirebaseAuthed>
      </FirebaseAuthProvider>
    </FirebaseDatabaseProvider>
  );

}

export default App;
