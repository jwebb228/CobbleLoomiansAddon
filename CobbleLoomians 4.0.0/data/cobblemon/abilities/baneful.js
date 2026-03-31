{
    onBasePowerPriority: 19,
    onBasePower(basePower, target, defender, move) {
      if (target.status === "psn" || target.status === "tox") {
        return this.chainModify(1.2);
      }
    },
    flags: {},
    name: "Baneful",
    rating: 2,
    num: 138
}