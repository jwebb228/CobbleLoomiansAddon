{
     onBasePower(basePower, pokemon) {
      if (pokemon.side.faintedLastTurn) {
        this.debug("Boosted for a faint last turn");
        return this.chainModify(2);
      }
  },
   flags: {},
   name: "Vengeance",
   rating: 3.5,
   num: 998
}