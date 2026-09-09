{
num: 19871,
  onTryHit(pokemon, target, move) {
if (move.selfSwitch === true) {
this.add('-immune', pokemon, '[from] ability: Seize');
return null;

    }
  },
flags: {},
name: "Seize",
rating: 2
}