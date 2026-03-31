{
  onSourceModifyDamage(damage, source, target, move) {
      if (target.hp >= target.maxhp) {
        this.debug("Multiscale weaken");
        return this.chainModify(0.5);
      }
    },
    flags: { breakable: 1 },
    name: "Tank",
    rating: 3.5,
    num: 136
}