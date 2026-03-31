{
    accuracy: 100,
    basePower: 20,
    category: "Physical",
    name: "Preemptive Strike",
    pp: 10,
    priority: 3,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onTry(source) {
      if (source.activeMoveActions > 1) {
        this.hint("Preemptive Strike only works on your first turn out.");
        return false;
      }
    },
    secondary: {
      chance: 100,
      volatileStatus: "flinch"
    },
    target: "normal",
    type: "Fighting",
    contestType: "Cute"
}