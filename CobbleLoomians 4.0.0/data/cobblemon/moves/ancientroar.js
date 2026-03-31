{
    accuracy: 100,
    basePower: 0,
    category: "Status",
    name: "Ancient Roar",
    pp: 20,
    priority: 0,
    flags: { protect: 1, reflectable: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1 },
    onHit(target, source, move) {
      const success = this.boost({ atk: -1, spa: -1 }, target, source);
      if (!success && !target.hasAbility("mirrorarmor")) {
        delete move.selfSwitch;
      }
    },
    selfSwitch: true,
    secondary: null,
    target: "normal",
    type: "Dragon",
    zMove: { effect: "healreplacement" },
    contestType: "Cool"
}