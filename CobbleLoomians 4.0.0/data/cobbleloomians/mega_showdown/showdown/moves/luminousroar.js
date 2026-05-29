{


    num: 48758,
    accuracy: 100,
    basePower: 75,
    category: "Special",
    name: "Luminous Roar",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1, metronome: 1, sound: 1, bypasssub: 1 },

 condition: {
      duration: 2,
      onStart(target) {
        this.add("-start", target, "Luminous Roar", "[silent]");
      },
      onDisableMove(pokemon) {
        for (const moveSlot of pokemon.moveSlots) {
          if (this.dex.moves.get(moveSlot.id).type === "Dark") {
            pokemon.disableMove(moveSlot.id);
          }
        }
      },
      onBeforeMovePriority: 6,
      onBeforeMove(pokemon, target, move) {
        if (!move.isZ && !move.isMax && move.type === "Dark") {
          this.add("cant", pokemon, "move: Luminous Roar");
          return false;
        }
      },
      onModifyMove(move, pokemon, target) {
        if (!move.isZ && !move.isMax && move.type === "Dark") {
          this.add("cant", pokemon, "move: Luminous Roar");
          return false;
        }
      },
      onResidualOrder: 22,
      onEnd(target) {
        this.add("-end", target, "Luminous Roar", "[silent]");
      }
    },
    secondary: {
      chance: 100,
      onHit(target) {
        target.addVolatile("luminousroar");
      }
    },
    target: "normal",
    type: "Fairy",
    contestType: "Tough"
}