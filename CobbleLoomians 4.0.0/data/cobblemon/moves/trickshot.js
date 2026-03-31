{
  num: 389,
    accuracy: 100,
    basePower: 70,
    category: "Special",
    name: "Trick Shot",
    pp: 5,
    priority: 1,
    flags: { protect: 1, mirror: 1, metronome: 1 },
    onTry(source, target) {
      const action = this.queue.willMove(target);
      const move = action?.choice === "move" ? action.move : null;
      if (!move || move.category === "Status" && move.id !== "mefirst" || target.volatiles["mustrecharge"]) {
        return false;
      }
    },
    secondary: null,
    target: "normal",
    type: "Ghost",
    contestType: "Clever"
}