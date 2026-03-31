{
    accuracy: 100,
    basePower: 60,
    basePowerCallback(pokemon, target, move) {
      if (target.status || target.hasAbility("comatose"))
        return move.basePower * 2;
      return move.basePower;
    },
    category: "Special",
    name: "Oppress",
    pp: 15,
    priority: 0,
    flags: { protect: 1, mirror: 1 },
    secondary: {
      chance: 50,
      status: "par"
    },
    target: "normal",
    type: "Ghost"
}