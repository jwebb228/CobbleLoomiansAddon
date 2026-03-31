{
    accuracy: 100,
    basePower: 70,
    basePowerCallback(pokemon, target, move) {
      if (target.hurtThisTurn) {
        this.debug("BP doubled on damaged target");
        return move.basePower * 2;
      }
      return move.basePower;
    },
    category: "Special",
    name: "Reflection Burst",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    secondary: null,
    target: "normal",
    type: "Steel",
    contestType: "Clever"
}