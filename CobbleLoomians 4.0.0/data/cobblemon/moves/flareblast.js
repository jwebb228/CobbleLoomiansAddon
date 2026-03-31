{
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Flare Blast",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "sunnyday":
        case "desolateland":
          move.accuracy = 100;
          break;
      }
    },
    secondary: {
      chance: 20,
      status: "brn"
    },
    target: "normal",
    type: "Fire",
    contestType: "Cool"
}