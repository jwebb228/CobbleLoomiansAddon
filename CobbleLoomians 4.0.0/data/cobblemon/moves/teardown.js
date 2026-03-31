{
   num: 432,
    accuracy: true,
    basePower: 0,
    category: "Status",
    name: "Tear Down",
    pp: 5,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, metronome: 1 },
    onHit(target, source, move) {
      let success = false;
      if (!target.volatiles["substitute"] || move.infiltrates)
        success = !!this.boost({ def: -1 });
      const removeTarget = [
        "reflect",
        "lightscreen",
        "auroraveil",
        "safeguard",
        "mist",
        "spikes",
        "toxicspikes",
        "stealthrock",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      const removeAll = [
        "spikes",
        "toxicspikes",
        "stealthrock",
        "stickyweb",
        "gmaxsteelsurge"
      ];
      for (const targetCondition of removeTarget) {
        if (target.side.removeSideCondition(targetCondition)) {
          if (!removeAll.includes(targetCondition))
            continue;
          this.add("-sideend", target.side, this.dex.conditions.get(targetCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      for (const sideCondition of removeAll) {
        if (source.side.removeSideCondition(sideCondition)) {
          this.add("-sideend", source.side, this.dex.conditions.get(sideCondition).name, "[from] move: Defog", "[of] " + source);
          success = true;
        }
      }
      this.field.clearTerrain();
      return success;
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    zMove: { boost: { accuracy: 1 } },
    contestType: "Cool"
}