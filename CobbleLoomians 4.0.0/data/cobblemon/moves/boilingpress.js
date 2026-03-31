{
  accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Boiling Press",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1,  contact: 1, },
    onEffectiveness(typeMod, target, type) {
      if (type === "Water")
        return 1;
    },
    secondary: null,
    target: "normal",
    type: "Fire",
    contestType: "Tough"
}