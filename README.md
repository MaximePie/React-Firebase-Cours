# Task-Manager-with-React-and-Firebase
A step by step lesson teaching how to create a Task Manager in React without any backend Database 



## Utilisation 

Créer le projet React et l'installer : `npx create-react-app app && cd app && yarn start`

[Installer Firebase ](https://react-firebase-js.com/docs/react-firebase-auth/getting-started)

`yarn add firebase && yarn add @react-firebase/auth`

Depuis le site de firebase, créer un projet, et aller dans les paramètres

![image](https://user-images.githubusercontent.com/16031936/114735011-14129b00-9d45-11eb-91a3-fe756fc2e8b0.png)


Créer une nouvelle application Web. On ne prend pas Firebase Hosting car on utilise Netlify


Créer une nouvelle base de données sur Firebase avec le monde verrouillé
![image](https://user-images.githubusercontent.com/16031936/114749850-a7eb6380-9d53-11eb-83ea-4102716b69d3.png)

Récupérer l'adresse de la base de données pour la config

Dans le code de `App.js`, créer une `const` qui accueille la configuration : 

```js
// App.js
// Firebase Config
export const firebaseConfig = {
  apiKey: "AIzaSyAvYYJrFjKq44eRRkhJoXk4pr_AqlorxXo",
  authDomain: "taskmanager-11c02.firebaseapp.com",
  projectId: "taskmanager-11c02",
  databaseURL: "https://taskmanager-11c02-default-rtdb.europe-west1.firebasedatabase.app/", // Adresse de la base de données
  storageBucket: "taskmanager-11c02.appspot.com",
  messagingSenderId: "38528304356",
  appId: "1:38528304356:web:2e11df1f4884dd371858f1",
};
```

![image](https://user-images.githubusercontent.com/16031936/114735949-f42fa700-9d45-11eb-83a1-8592c8aadaaf.png)

## Authentication 
https://firebase.google.com/docs/auth/web/anonymous-auth
Activer l'authentication anonyme;
![image](https://user-images.githubusercontent.com/16031936/114753749-1cc09c80-9d58-11eb-8b18-d1e880f95b4d.png)

## Code 

Envelopper notre application dans un `FirebaseAuthProvider`

```js
// App.js

import firebase from "firebase/app";
import "firebase/auth";
import firebase from "firebase";
import {FirebaseAuthProvider} from "@react-firebase/auth";
import {firebaseConfig} from "./firebaseConfig.js";

function App() {
  return (
    <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
      <div className="App">
        Bonjour
      </div>
    </FirebaseAuthProvider>
  );
}

export default App;
```

Pour s'identifier de manière anonyme, à placer n'importe où 
`firebase.auth().signInAnonymously()`;


Se déconnecter 
`firebase.auth().signOut();`

## Ajouter des données dans la base de données 

Consultez le guide ici : https://react-firebase-js.com/docs/react-firebase-realtime-database/getting-started

Installez `react-firebase`

`yarn add @react-firebase/database # or npm i @react-firebase/database`

Enveloppez votre application dans un composant `FirebaseDatabaseProvider`. 

Voici à quoi devrait ressembler notre `App.js`

```js
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
    <FirebaseDatabaseProvider {...firebaseConfig} firebase={firebase}>
      <FirebaseAuthProvider {...firebaseConfig} firebase={firebase}>
        {/* Ce composant n'est généré que si on n'est pas authentifié. */}
        <IfFirebaseUnAuthed>
          <Login/>
        </IfFirebaseUnAuthed>
        {/* Ce composant n'est généré que si l'utilisateur est connecté. */}
        <IfFirebaseAuthed>
          <TaskManager/>
        </IfFirebaseAuthed>
        <div className="App">
          Bonjour
        </div>
      </FirebaseAuthProvider>
    </FirebaseDatabaseProvider>
  );
}

export default App;

```

## Créer un espace personnel pour les utilisateurs connectés 

Modifier les règles de base de données depuis FireStorm 

```
{
  "rules": {
    "users": {
      "$uid": {
        ".write": "$uid === auth.uid"
      }
    }
  }
}
```

![image](https://user-images.githubusercontent.com/16031936/115036089-7bf3ed80-9ecd-11eb-9ff2-663f3427ec91.png)

## Erreurs possibles 

#### Configuration invalide 

Essayer d'ajouter la databaseUrl 

```js
export const firebaseConfig = {
  apiKey: "AIzaSyAvYYJrFjKq44eRRkhJoXk4pr_AqlorxXo",
  authDomain: "taskmanager-11c02.firebaseapp.com",
  projectId: "taskmanager-11c02",
  databaseURL: "https://taskmanager-11c02-default-rtdb.europe-west1.firebasedatabase.app/",
  storageBucket: "taskmanager-11c02.appspot.com",
  messagingSenderId: "38528304356",
  appId: "1:38528304356:web:2e11df1f4884dd371858f1",
};
```

#### Opération réservée aux admins seulement 

Ajouter les rules 
```json
    {
      "rules": {
        ".read": "auth.uid != null",
        ".write": "auth.uid != null"
      }
    }
```


