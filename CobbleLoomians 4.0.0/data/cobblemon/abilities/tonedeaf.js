{
   onBasePowerPriority: 7,
    onBasePower(basePower, attacker, defender, move) {
      if (move.flags["sound"]) {
        this.debug("Tone Deaf boost");
        return this.chainModify([5325, 4437]);
      }
    },
    flags: { breakable: 1 },
    name: "Tone Deaf",
    rating: 3.5,
    num: 244
}