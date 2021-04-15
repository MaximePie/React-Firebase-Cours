# Niveau 1 

Firebase peut paraître impressionnat au premier abord, mais tenez bon. Le jeu en vaut la chandelle !
Vous aurez autant d'épreuves à traverser pour un autre système en back.  

à travers cet exercices vous allez découvrir l'utilisation la plus basique de Firebase : Envoyer et recevoir des données. 

## Comment pratiquer ? 

Créez un nouveau compte et un nouveau projet sur (Firebase)[https://firebase.google.com/];


Clonez le projet principal : `git clone https://github.com/MaximePie/Task-Manager-with-React-and-Firebase.git`

Suivez les instructions d'installation présentes dans [ce readme](https://github.com/MaximePie/React-Firebase-Cours#utilisation) de manière à obtenir une configuration
qui ressemble à ceci, et ajoutez ce code en haut de votre fichier App.js 

```js
const firebaseConfig = {
  apiKey: "APIKEY",
  authDomain: "XXX",
  projectId: "XXX",
  databaseURL: "XXX",
  storageBucket: "XXX",
  messagingSenderId: "XXX",
  appId: "XXX",
};

```

Ensuite, assurez-vous d'avoir bien réglé les droits d'accès de votre base de données comme présenté dans le Readme. 

Depuis le dossier Niveau 1,installer le projet : 
`yarn && yarn start`

Quand vous avez réussi à afficher les chats, vous êtes prêts à coder. 

Bon courage !
