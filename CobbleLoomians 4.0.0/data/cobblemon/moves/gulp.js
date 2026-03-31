{
    accuracy: 100,
    basePower: 65,
    category: "Special",
    name: "Gulp",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onHit(target, source) {
      const item = target.getItem();
      if (source.hp && item.isBerry && target.takeItem(source)) {
        this.add("-enditem", target, item.name, "[from] stealeat", "[move] Gulp", "[of] " + source);
        if (this.singleEvent("Eat", item, null, source, null, null)) {
          this.runEvent("EatItem", source, null, null, item);
          if (item.id === "leppaberry")
            target.staleness = "external";
        }
        if (item.onEat)
          source.ateBerry = true;
      }
    },
    onAfterHit(target, source) {
      if (source.hp) {
        const item = target.takeItem();
        if (item) {
          this.add("-enditem", target, item.name, "[from] move: Gulp", "[of] " + source);
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Water",
    contestType: "Clever"
}