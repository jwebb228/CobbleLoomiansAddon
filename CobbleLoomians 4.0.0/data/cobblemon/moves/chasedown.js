{
    accuracy: 100,
    basePower: 50,
    basePowerCallback(pokemon, target, move) {
      if (target.beingCalledBack || target.switchFlag) {
        this.debug("Chase Down damage boost");
        return move.basePower * 2;
      }
      return move.basePower;
    },
    category: "Physical",
    isNonstandard: "Past",
    name: "Chase Down",
    pp: 20,
    priority: 0,
    flags: { contact: 1, protect: 1, mirror: 1, metronome: 1 },
    beforeTurnCallback(pokemon) {
      for (const side of this.sides) {
        if (side.hasAlly(pokemon))
          continue;
        side.addSideCondition("chasedown", pokemon);
        const data = side.getSideConditionData("chasedown");
        if (!data.sources) {
          data.sources = [];
        }
        data.sources.push(pokemon);
      }
    },
    onModifyMove(move, source, target) {
      if (target?.beingCalledBack || target?.switchFlag)
        move.accuracy = true;
    },
    onTryHit(target, pokemon) {
      target.side.removeSideCondition("chasedown");
    },
    condition: {
      duration: 1,
      onBeforeSwitchOut(pokemon) {
        this.debug("Chase Down start");
        let alreadyAdded = false;
        pokemon.removeVolatile("destinybond");
        for (const source of this.effectState.sources) {
          if (!source.isAdjacent(pokemon) || !this.queue.cancelMove(source) || !source.hp)
            continue;
          if (!alreadyAdded) {
            this.add("-activate", pokemon, "move: Chase Down");
            alreadyAdded = true;
          }
          if (source.canMegaEvo || source.canUltraBurst) {
            for (const [actionIndex, action] of this.queue.entries()) {
              if (action.pokemon === source && action.choice === "megaEvo") {
                this.actions.runMegaEvo(source);
                this.queue.list.splice(actionIndex, 1);
                break;
              }
            }
          }
          this.actions.runMove("chasedown", source, source.getLocOf(pokemon));
        }
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    contestType: "Clever"
}