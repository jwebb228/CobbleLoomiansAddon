{

    num: 73,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Slumber",
    pp: 10,
    priority: 0,
    flags: { snatch: 1, heal: 1, metronome: 1 },
    volatileStatus: "slumber",

    onTry(source) {
      if (source.status === "slp" || source.hasAbility("comatose"))
        return false;
      if (source.hp === source.maxhp) {
        this.add("-fail", source, "heal");
        return null;
      }
      if (source.hasAbility(["insomnia", "vitalspirit"])) {
        this.add("-fail", source, "[from] ability: " + source.getAbility().name, "[of] " + source);
        return null;
       }
    },
    onHit(target, source, move) {
      target.setStatus("slp", source, move);
      target.statusState.time = 3;
      target.statusState.startTime = 3;
    },


  condition: {
    onResidualOrder: -1,
    onResidual(pokemon) {
      if (pokemon.status === "slp") {
        this.heal(pokemon.baseMaxhp / 3);
       }
    }
},
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { effect: "clearnegativeboost" },
    contestType: "Cute"
}