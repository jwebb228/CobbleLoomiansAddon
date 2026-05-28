{
  onDamagingHitOrder: 1,
    onDamagingHit(damage, target, source, move) {
      if (target.fainted){
          return null;
        }
      if (this.checkMoveMakesContact(move, source, target, true)) {
      const moves = [];
      for (const pokemon of target.side.pokemon) {
        if (pokemon === target)
          continue;
        for (const moveSlot of pokemon.moveSlots) {
          const moveid = moveSlot.id;
          const move = this.dex.moves.get(moveid);
          if (move.flags["noassist"] || move.isZ || move.isMax) {
            continue;
          }
          moves.push(moveid);
        }
      }
      if (target.hp < 1 || target.fainted){
          return null;
        }
      let randomMove = "";
      if (moves.length)
        randomMove = this.sample(moves);
      if (!randomMove) {
        return false;
      }
      this.actions.useMove(randomMove, target);
      }
    },
    flags: {},
    name: "Mystic Tone",
    rating: 2.5,
    num: 160
}