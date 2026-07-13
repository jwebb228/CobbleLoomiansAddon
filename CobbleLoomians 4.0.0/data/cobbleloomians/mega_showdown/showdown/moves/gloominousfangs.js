{
    accuracy: 100,
    num: 18238,
    basePower: 85,
    category: "Physical",
    name: "Gloominous Fangs",
    pp: 20,
    priority: 0,
    flags: { protect: 1, mirror: 1, bite: 1, metronome: 1 },
	onModifyTypePriority: 2,
    onModifyType(move, pokemon) {
	   if (pokemon.species.name === 'Tiklipse-Day') {
	   move.type = 'Fairy';
} else if (pokemon.species.name === 'Tiklipse-Night') {
           move.type = 'Dark';
 }
},
   onEffectiveness(typeMod, target, type, move) {
      if (!target)
        return;
      const pokemon = target.side.foe.active[0];
      if (pokemon.hasAbility("totaleclipse")) {
      return typeMod + this.dex.getEffectiveness("Dark", type);
      }
      return typeMod;
    },

    target: "normal",
    type: "Fairy",
    contestType: "Tough"
}