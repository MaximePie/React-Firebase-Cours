import React from "react";
import firebase from "firebase";

export default function Login() {
  return (
    <div>
      <button
        onClick={() => {
          firebase.auth().signInAnonymously();
        }}
      >
        Sign In Anonymously
      </button>
    </div>
  );

  /**
   * Nous connecte à Firebase de manière anonyme
   */
  function login() {
    firebase.auth().signInAnonymously();
  }
}
