{
   onModifySpAPriority: 5,
    onModifySpA(spa, pokemon) {
      for (const allyActive of pokemon.allies()) {
        if (allyActive.hasAbility(["dusk", "dawn"])) {
          return this.chainModify(1.5);
        }
      }
    },
    flags: {},
    name: "Dawn",
    rating: 0,
    num: 57
}