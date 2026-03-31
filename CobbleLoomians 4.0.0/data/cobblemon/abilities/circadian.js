{
    onResidualOrder: 29,
		onResidual(pokemon) {

	        if (pokemon.activeTurns) {
                if (pokemon.species.id === "tiklipse") {
                pokemon.formeChange('Tiklipse-Day');}
                else if (pokemon.species.id === "tiklipseday"){
              pokemon.formeChange('Tiklipse-Night');}
           else if (pokemon.species.id === "tiklipsenight"){
              pokemon.formeChange('Tiklipse-Day');}
               }
               },
		flags: { failroleplay: 1, noreceiver: 1, noentrain: 1, notrace: 1, failskillswap: 1, notransform: 1 },
		name: "Circadian",
		rating: 1,
		num: 4500,
}