{
    num: 596,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tone Barrier",
    pp: 10,
    priority: 4,
    flags: { noassist: 1, failcopycat: 1 },
    stallingMove: true,
    volatileStatus: "tonebarrier",
    onPrepareHit(pokemon) {
      return !!this.queue.willAct() && this.runEvent("StallMove", pokemon);
    },
    onHit(pokemon) {
      pokemon.addVolatile("stall");
    },
    condition: {
      duration: 1,
      onStart(target) {
        this.add("-singleturn", target, "move: Protect");
      },
      onTryHitPriority: 3,
      onTryHit(target, source, move) {
        if (!move.flags["protect"]) {
          if (["gmaxoneblow", "gmaxrapidflow"].includes(move.id))
            return;
          if (move.isZ || move.isMax)
            target.getMoveHitData(move).zBrokeProtect = true;
          return;
        }
        if (move.smartTarget) {
          move.smartTarget = false;
        } else {
          this.add("-activate", target, "move: Protect");
        }
        const lockedmove = source.getVolatile("lockedmove");
        if (lockedmove) {
          if (source.volatiles["lockedmove"].duration === 2) {
            delete source.volatiles["lockedmove"];
          }
        }
        if (this.getCategory(move, source, target) === "Special") {
          this.damage(source.baseMaxhp / 8, source, target);
        }
        return this.NOT_FAIL;
      },
      onHit(target, source, move) {
        if (this.getCategory(move, source, target) === "Special") {
          this.damage(source.baseMaxhp / 8, source, target);
        }
      }
    },
    secondary: null,
    target: "self",
    type: "Normal",
    zMove: { boost: { def: 1 } },
    contestType: "Tough"
  }