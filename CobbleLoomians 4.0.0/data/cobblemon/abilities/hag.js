{
  onModifyAtkPriority: 5,
    onModifyAtk(atk, attacker, defender, move) {
      if (move.type === "Psychic") {
        this.debug("Hag boost");
        return this.chainModify([5325, 4260]);
      }
    },
    onModifySpAPriority: 5,
    onModifySpA(atk, attacker, defender, move) {
      if (move.type === "Psychic") {
        this.debug("Hag boost");
        return this.chainModify([5325, 4260]);
      }
    },
    flags: {},
    name: "Hag",
    rating: 3.5,
    num: 262
}