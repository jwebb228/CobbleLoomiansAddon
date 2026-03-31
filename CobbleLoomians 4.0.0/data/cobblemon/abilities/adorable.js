{
   onStart(pokemon) {
     let activated = false;
     for (const target of pokemon.adjacentFoes()) {
       if (!activated) {
         this.add("-ability", pokemon, "Adorable", "boost");
         activated = true;
       }
       if (target.volatiles["substitute"]) {
         this.add("-immune", target);
       } else {
         this.boost({ def: -1 }, target, pokemon, null, true);
       }
     }
   },
   flags: {},
   name: "Adorable",
   rating: 3.5,
   num: 998
}