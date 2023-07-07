import React from "react";
import tizi from "./foto-mia-actual.jpg"
import styles from "./about.module.css"

export default function About() {
    return (
      <div className={styles.container}>
        <h2 className={styles.heading}>About Me</h2>
        <br />
        <img className={styles.image} src={tizi} alt="Tiziano" height="500px" />
        
        <p className={styles.description} >¡Hola! Soy Tiziano Rios, el creador de esta aplicación.
          Tengo 19 años, y estoy muy emocionado por recibirme como 
          programador y poder trabajar de lo que más me gusta. <br />
          En esta aplicación, puedes ver un poco de todo lo que estoy aprendiendo en Henry. <br/> ¡Espero que disfrutes de mi aplicación!
        </p>
        <hr />
      </div>
    );
}