{
   num: 263,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Splitting Headache",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onBasePower(basePower, pokemon) {
      if (pokemon.status && pokemon.status !== "slp") {
        return this.chainModify(2);
      }
    },
    secondary: null,
    target: "normal",
    type: "Psychic",
    contestType: "Cute"
}