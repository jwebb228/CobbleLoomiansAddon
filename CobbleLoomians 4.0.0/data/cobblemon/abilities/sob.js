{
   onStart(pokemon) {
      let activated = false;
      if (!activated) {
         this.add("-ability", pokemon, "Sob", "boost");
         activated = true;
      }
      this.add("-clearallboost");
      for (const pokemon of this.getAllActive()) {
        pokemon.clearBoosts();
      }
    },
    flags: {},
    name: "Sob",
    rating: 0,
    num: 261
}