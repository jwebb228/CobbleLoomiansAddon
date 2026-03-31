{
  num: 280,
    accuracy: 100,
    basePower: 80,
    category: "Physical",
    name: "Soul Storm",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onTryHit(pokemon) {
      pokemon.side.removeSideCondition("reflect");
      pokemon.side.removeSideCondition("lightscreen");
      pokemon.side.removeSideCondition("auroraveil");
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Cool"
}