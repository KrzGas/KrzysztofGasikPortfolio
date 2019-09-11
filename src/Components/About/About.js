import React, { Component } from "react";
import photo from "../../../img/profil.jpg";

const About = () => {
  return (
    <section id="About">
      <h1>Coś o mnie</h1>
      <div className="wrapper__about">
      <img src={photo} />
      <p>
        Od czasu studiów interesowałem się tworzeniem stron internetowych (html
        i css). W mojej obecnej pracy wykorzystywałem umiejętności i wiedzę
        zdobytą na kursie w Coders Lab aby wspomagać działanie ankiet w
        badaniach internetowych. Praca jako web developer jest dla mnie kolejnym
        krokiem, gdyż wciągnęła i zafascynowała mnie, do tego stopnia aby podjąć
        decyzję o zmianie pracy na to, co mnie jednocześnie rozwija ale i
        sprawia ogromną przyjemność
      </p>
      </div>
    </section>
  );
};

export { About };
