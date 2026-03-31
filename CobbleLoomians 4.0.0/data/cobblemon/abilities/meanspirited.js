{
   onBasePowerPriority: 19,
    onBasePower(basePower, target, defender, move) {
      if (target.status) {
        return this.chainModify(1.2);
      }
    },
    flags: {},
    name: "Mean Spirited",
    rating: 2,
    num: 138
}