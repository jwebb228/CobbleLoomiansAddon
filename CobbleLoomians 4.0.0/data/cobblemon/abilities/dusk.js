{
   onModifyAtkPriority: 5,
    onModifyAtk(atk, pokemon) {
      for (const allyActive of pokemon.allies()) {
        if (allyActive.hasAbility(["dusk", "dawn"])) {
          return this.chainModify(1.5);
        }
      }
    },
    flags: {},
    name: "Dusk",
    rating: 0,
    num: 58
}