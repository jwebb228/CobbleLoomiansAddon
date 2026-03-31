{
    onBasePowerPriority: 19,
    onBasePower(basePower, attacker, defender, move) {
      if (["explosion", "mindblown", "mistyexplosion", "selfdestruct", "toxiblast"]) {
        this.debug("High Explosive boost");
        return this.chainModify(1.5);
      }
    },
    onModifyMove(move, pokemon) {
      if (move.secondaries) {
        delete move.secondaries;
        delete move.self;
        if (move.id === "clangoroussoulblaze")
          delete move.selfBoost;
      }
    },
    flags: {},
    name: "High Explosive",
    rating: 3.5,
    num: 292
}