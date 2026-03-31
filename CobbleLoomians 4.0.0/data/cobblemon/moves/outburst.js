{
    accuracy: 100,
    basePower: 125,
    basePowerCallback(pokemon, target, move) {
      const bp = move.basePower * pokemon.hp / pokemon.maxhp;
      this.debug("BP: " + bp);
      return bp;
    },
    category: "Physical",
    name: "Outburst",
    pp: 5,
    priority: 0,
    flags: {  contact: 1, protect: 1, mirror: 1, metronome: 1 },
    secondary: null,
    target: "normal",
    type: "Dragon"
}