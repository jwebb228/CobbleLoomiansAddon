{
    accuracy: 100,
    basePower: 80,
    category: "Special",
    name: "Dissonant Chord",
    pp: 10,
    priority: 0,
    flags: { protect: 1, mirror: 1, sound: 1, bypasssub: 1, metronome: 1, nosleeptalk: 1, },
    onTryHit(target) {
      const activeTeam = target.side.activeTeam();
      const foeActiveTeam = target.side.foe.activeTeam();
      for (const [i, allyActive] of activeTeam.entries()) {
        if (allyActive && allyActive.status === "slp")
          allyActive.cureStatus();
        const foeActive = foeActiveTeam[i];
        if (foeActive && foeActive.status === "slp")
          foeActive.cureStatus();
      }
    },
    secondary: null,
    target: "normal",
    type: "Normal",
    contestType: "Cute"
}