{
    onModifySpe(spe, source, pokemon) {
      if (source.activeMoveActions < 1) {
        this.add("-start", pokemon, "ability: Rush Hour");
        return this.chainModify(1.5);
      }
    },
    flags: {},
    name: "Rush Hour",
    rating: 3,
    num: 34,
  }