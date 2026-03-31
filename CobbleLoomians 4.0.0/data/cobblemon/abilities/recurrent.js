{
      onStart(pokemon) {
        this.effectState.lastMove = "";
        this.effectState.numConsecutive = 0;
      },
      onTryMovePriority: -2,
      onTryMove(pokemon, target, move) {
if (pokemon.hasAbility("recurrent")) {

       if (move.type === "Electric") {
if (this.effectState.numConsecutive === 0) {
          this.effectState.numConsecutive = 1;
} else if (this.effectState.numConsecutive === 1) {
          this.effectState.numConsecutive = 2;
}  else if (this.effectState.numConsecutive === 2) {
          this.effectState.numConsecutive = 3;
} else if (this.effectState.numConsecutive === 3) {
          this.effectState.numConsecutive = 4;
} else if (this.effectState.numConsecutive === 4) {

          this.effectState.numConsecutive = 5;
        }
}
         else {
          this.effectState.numConsecutive = 0;
      }
}
      },
    onModifyDamage(damage, source, target, move) {
if (this.effectState.numConsecutive === 1) {
        return this.chainModify(4915, 4096);
       }
 else if (this.effectState.numConsecutive === 2) {
        return this.chainModify(5734, 4096);
} else if (this.effectState.numConsecutive === 3) {
        return this.chainModify(6553, 4096);
} else if (this.effectState.numConsecutive === 4) {
        return this.chainModify(7372, 4096);
} else if (this.effectState.numConsecutive <= 5) {
        return this.chainModify(8192, 4096);
}
    },
    name: "Recurrent",
    rating: 4
  }