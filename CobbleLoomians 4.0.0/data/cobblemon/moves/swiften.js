{
    num: 366,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Swiften",
    pp: 15,
    priority: 0,
    flags: { snatch: 1, metronome: 1},
    sideCondition: "tailwind",
    condition: {
      duration: 4,
      durationCallback(target, source, effect) {
        if (source?.hasAbility("persistent")) {
          this.add("-activate", source, "ability: Persistent", "[move] Swiften");
          return 5;
        }
        return 4;
      },
      onSideStart(side, source) {
        if (source?.hasAbility("persistent")) {
          this.add("-sidestart", side, "move: Swiften", "[persistent]");
        } else {
          this.add("-sidestart", side, "move: Swiften");
        }
      },
      onModifySpe(spe, pokemon) {
        return this.chainModify(2);
      },
      onSideResidualOrder: 26,
      onSideResidualSubOrder: 5,
      onSideEnd(side) {
        this.add("-sideend", side, "move: Swiften");
      }
    },
    secondary: null,
    target: "allySide",
    type: "Fairy",
    zMove: { effect: "crit2" },
    contestType: "Cool"
}