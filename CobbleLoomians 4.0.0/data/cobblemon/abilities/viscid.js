{
  onDragOutPriority: 1,
    onDragOut(pokemon) {
      this.add("-activate", pokemon, "ability: Viscid");
      return null;
    },
    flags: { breakable: 1 },
    name: "Viscid",
    rating: 1,
    num: 21
}