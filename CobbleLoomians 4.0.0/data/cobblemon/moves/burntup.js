{
  accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Burnt Up",
    pp: 5,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    onAfterHit(target, pokemon, move) {
      if (!move.hasSheerForce) {
        if (pokemon.hp && pokemon.removeVolatile("leechseed")) {
          this.add("-end", pokemon, "Leech Seed", "[from] move: Burn Up", "[of] " + pokemon);
        }
        const sideConditions = ["spikes", "toxicspikes", "stealthrock", "stickyweb", "gmaxsteelsurge"];
        for (const condition of sideConditions) {
          if (pokemon.hp && pokemon.side.removeSideCondition(condition)) {
            this.add("-sideend", pokemon.side, this.dex.conditions.get(condition).name, "[from] move: Burn Up", "[of] " + pokemon);
          }
        }
        if (pokemon.hp && pokemon.volatiles["partiallytrapped"]) {
          pokemon.removeVolatile("partiallytrapped");
        }
      }
    },
    secondary: {
      chance: 100,
      self: {
        boosts: {
          spa: 1
        }
      }
    },
    target: "self",
    type: "Fire",
    contestType: "Cool"
}