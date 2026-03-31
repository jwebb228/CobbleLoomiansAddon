{
    onTryHitPriority: 1,
    onTryHit(target, source, move) {
      if (["Dark", "Fairy"].includes(move.type)) {
 if (["Special","Physical"].includes(move.category)) {
        this.boost({ spe: 1 });
          this.add("-immune", target, "[from] ability: Total Eclipse");
        return null;
      }
     }
    },
    flags: {},
    name: "Total Eclipse",
    rating: 1,
    num: 155
}