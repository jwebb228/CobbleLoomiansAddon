{
    accuracy: 70,
    basePower: 110,
    category: "Special",
    name: "Hydro Blast",
    pp: 5,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onModifyMove(move, pokemon, target) {
      switch (target?.effectiveWeather()) {
        case "raindance":
        case "primordialsea":
          move.accuracy = 100;
          break;
      }
    },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Cool"
}