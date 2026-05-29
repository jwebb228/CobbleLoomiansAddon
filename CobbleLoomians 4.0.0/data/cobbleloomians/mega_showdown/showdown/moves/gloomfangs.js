{


    num: 46758,
    accuracy: 100,
    basePower: 75,
    category: "Physical",
    name: "Gloom Fangs",
    pp: 15,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, bite: 1 },

 condition: {
      duration: 2,
      onStart(target) {
        this.add("-start", target, "Gloom Fangs", "[silent]");
      },
      onDisableMove(pokemon) {
        for (const moveSlot of pokemon.moveSlots) {
          if (this.dex.moves.get(moveSlot.id).type === "Fairy") {
            pokemon.disableMove(moveSlot.id);
          }
        }
      },
      onBeforeMovePriority: 6,
      onBeforeMove(pokemon, target, move) {
        if (!move.isZ && !move.isMax && move.type === "Fairy") {
          this.add("cant", pokemon, "move: Gloom Fangs");
          return false;
        }
      },
      onModifyMove(move, pokemon, target) {
        if (!move.isZ && !move.isMax && move.type === "Fairy") {
          this.add("cant", pokemon, "move: Gloom Fangs");
          return false;
        }
      },
      onResidualOrder: 22,
      onEnd(target) {
        this.add("-end", target, "Gloom Fangs", "[silent]");
      }
    },
    secondary: {
      chance: 100,
      onHit(target) {
        target.addVolatile("gloomfangs");
      }
    },
    target: "normal",
    type: "Dark",
    contestType: "Tough"
}