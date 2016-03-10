window.addEventListener('load', function() {
	//stran nalozena
	
	var izvediPrijavo = function(){
		var uporabnik = document.getElementById("uporabnisko_ime").value;
		
		document.getElementById("uporabnik").innerHTML = uporabnik;
		document.getElementById("pokrivalo").style.visibility = "hidden";
		
		
	}
	
	var dodajOpomnik = function(){
		console.log("Evo me");
		var naziv_opomnika = document.getElementById("naziv_opomnika").value;
		var cas_opomnika = document.getElementById("cas_opomnika").value;
		
		document.getElementById("naziv_opomnika").value = "";
		document.getElementById("cas_opomnika").value = "";
		
		var opomnik = '<div class="opomnik"><div class="naziv_opomnika">'+ naziv_opomnika +'</div><div class="cas_opomnika">Opomnik čez <span>' + cas_opomnika + ' sekund.</span></div></div>';
	
		document.getElementById("opomniki").innerHTML += opomnik;
	}
	
	//izvedi prijavo
	document.getElementById("prijavniGumb").addEventListener("click", izvediPrijavo);
		
	//dodaj opomnik
	document.getElementById("dodajGumb").addEventListener("click", dodajOpomnik);
	
	
		
	//Posodobi opomnike
	var posodobiOpomnike = function() {
		var opomniki = document.querySelectorAll(".opomnik");
		
		for (i = 0; i < opomniki.length; i++) {
			var opomnik = opomniki[i];
			var casovnik = opomnik.querySelector("span");
			var cas = parseInt(casovnik.innerHTML);
	
			//TODO: 
			// - če je čas enak 0, izpiši opozorilo "Opomnik!\n\nZadolžitev NAZIV_OPOMNIK je potekla!"
			// - sicer zmanjšaj čas za 1 in nastavi novo vrednost v časovniku
		}
	}
	setInterval(posodobiOpomnike, 1000);
	
	
	
});