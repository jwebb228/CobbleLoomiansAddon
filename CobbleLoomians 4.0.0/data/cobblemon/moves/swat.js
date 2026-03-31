{
    accuracy: 100,
    basePower: 45,
    category: "Physical",
    name: "Swat",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1, nonsky: 1 },
    onEffectiveness(typeMod, target, type) {
      if (type === "Flying")
        return 0.5;
    },
    volatileStatus: "smackdown",
    condition: {
      noCopy: true,
      onStart(pokemon) {
        let applies = false;
        if (pokemon.hasType("Flying") || pokemon.hasAbility("levitate"))
          applies = true;
        if (pokemon.hasItem("ironball") || pokemon.volatiles["ingrain"] || this.field.getPseudoWeather("gravity"))
          applies = false;
        if (pokemon.removeVolatile("fly") || pokemon.removeVolatile("bounce")) {
          applies = true;
          this.queue.cancelMove(pokemon);
          pokemon.removeVolatile("twoturnmove");
        }
        if (pokemon.volatiles["magnetrise"]) {
          applies = true;
          delete pokemon.volatiles["magnetrise"];
        }
        if (pokemon.volatiles["telekinesis"]) {
          applies = true;
          delete pokemon.volatiles["telekinesis"];
        }
        if (!applies)
          return false;
        this.add("-start", pokemon, "Smack Down");
      },
      onRestart(pokemon) {
        if (pokemon.removeVolatile("fly") || pokemon.removeVolatile("bounce")) {
          this.queue.cancelMove(pokemon);
          pokemon.removeVolatile("twoturnmove");
          this.add("-start", pokemon, "Smack Down");
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Fighting",
    contestType: "Cool"
}