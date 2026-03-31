{
  
    onModifySTAB(stab, source, target, move) {
      if (move.forceSTAB || source.hasType(move.type)) {
        if (stab === 1.75) {
          return 2;
        }
        return 1.75;
      }
    },
    flags: {},
    name: "Awakening",
    rating: 4,
    num: 91,
}