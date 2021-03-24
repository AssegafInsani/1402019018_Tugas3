document.getElementById('user').innerHTML = prompt("Masukkan Nama Anda: ");

var time = new Date().getHours();
if (time >= 0 && time < 12) {
	document.getElementById('time').innerHTML = " pagi";	 
}
else if (time >= 12  && time < 15) {
	document.getElementById('time').innerHTML = " siang";	 
}
else if (time >= 15  && time < 18) {
	document.getElementById('time').innerHTML = " sore";	 
}
else if (time >= 18  && time < 24) {
	document.getElementById('time').innerHTML = " malam";	 
}

function hitungSilinder() {
	var jariSilinder = (document.getElementById("inputJariSilin").value);
	var tinggiSilinder = (document.getElementById("inputTinggiSilin").value);
	var phi = 3.14;
	var regexExpresion = new RegExp('^\\d+$');
	
	if(tinggiSilinder == "" || jariSilinder == "") {
		alert("Harap lengkapi inputan Silinder !");
		return;
	}
	if(!regexExpresion.test(tinggiSilinder) || !regexExpresion.test(jariSilinder)) {
		alert("Hey! inputan Silider haruslah angka bukan lain");
		document.getElementById("inputJariSilin").value = "";
		document.getElementById("inputTinggiSilin").value = "";
		return;	
	}
	jariSilinder = parseInt(jariSilinder);
	tinggiSilinder = parseInt(tinggiSilinder);
	document.getElementById("luasSilin").innerHTML = Math.round(2 * phi * jariSilinder * (jariSilinder + tinggiSilinder));
	document.getElementById("volSilin").innerHTML = Math.round(phi * jariSilinder * jariSilinder * tinggiSilinder);
}

function hitungKerucut() {
	var jariKerucut = (document.getElementById("inputJariKerut").value);
	var garisPelukisKerucut = (document.getElementById("inputgarisKerut").value);
	var tinggiKerucut = (document.getElementById("inputTinggiKerut").value);
	var phi = 3.14;
	var regexExpresion = new RegExp('^\\d+$');

	if(tinggiKerucut== "" || jariKerucut == "" || garisPelukisKerucut == "") {
		alert("Harap lengkapi inputan kerucut !");
		return;
	}

	if(!regexExpresion.test(tinggiKerucut) || !regexExpresion.test(jariKerucut) || !regexExpresion.test(garisPelukisKerucut)) {
		alert("Hey! inputan Kerucut haruslah angka bukan lain");
		document.getElementById("inputJariKerut").value = "";
		document.getElementById("inputgarisKerut").value = "";
		document.getElementById("inputTinggiKerut").value = "";
		return;	
	}
	jariKerucut = parseInt(jariKerucut);
	garisPelukisKerucut = parseInt(garisPelukisKerucut);
	tinggiKerucut = parseInt(tinggiKerucut);
	document.getElementById("luasKerut").innerHTML = Math.round((jariKerucut + garisPelukisKerucut) * (phi * jariKerucut));
	document.getElementById("volKerut").innerHTML = Math.round((phi * jariKerucut * jariKerucut * tinggiKerucut)/3);
}

function hitungBola() {
	var jariBola = (document.getElementById("inputJariBola").value);
	var phi = 3.14;

	if(jariBola == "") {
		alert("Harap lengkapi inputan Bola !");
		return;
	}
	var regexExpresion = new RegExp('^\\d+$');
	if(!regexExpresion.test(jariBola)) {
		alert("Hey! inputan Bola haruslah angka bukan lain");
		document.getElementById("inputJariBola").value = "";
		return;	
	}
	jariBola = parseInt(jariBola);
	document.getElementById("luasBola").innerHTML = Math.round(4 * phi * jariBola * jariBola);
	document.getElementById("volBola").innerHTML = Math.round((4 * phi * jariBola * jariBola * jariBola)/3);
}