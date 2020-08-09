const tombol = document.querySelector("input[type='checkbox']");
const body = document.querySelector("body");

function modeOnOf() {
	body.classList.toggle("active");
} 

tombol.addEventListener("click", modeOnOf);

let count = 40;
let o = 0;
while( o < count) {
	const i = document.createElement("i");
	let left = Math.floor(Math.random() * window.innerWidth );
	let duration = Math.random() + 0.9;
	let h = Math.random() * 100;
	
	i.style.left = left + "px";
	i.style.width = "1px";
	i.style.height = h + "px";
	i.style.animationDuration = duration + "s";
	
	
	body.appendChild(i);
	o++;
	
} 



const cnama = document.getElementById("cnama");
cnama.style.display = "none";

const calamat = document.getElementById("calamat");
calamat.style.display = "none";

const ckode = document.getElementById("ckode");
ckode.style.display = "none";

const cnotlp = document.getElementById("cnotlp");
cnotlp.style.display = "none";

const cemail = document.getElementById("cemail");
cemail.style.display = "none";

const cfacebook = document.getElementById("cfacebook");
cfacebook.style.display = "none";

const cjumlahsw = document.getElementById("cjumlahsw");
cjumlahsw.style.display = "none";


const tipe = document.querySelector("#tipe");

function valtipe() {
	const value = tipe.value;
	const vtipe = document.querySelector("#vtipe");
	var hasil = false;
	
	if( value == "-- Pilih Tipe --") {
		vtipe.innerHTML = "Pilih bagian ini";
		hasil = false;
		vtipe.style.marginTop = "-25px";
	}else {
		vtipe.innerHTML = "";
		hasil = true;
	} 
	
	return hasil;
	
} 

tipe.addEventListener('change', valtipe);


const kode = document.querySelector("#kode");

ckode.addEventListener("click", function() {
	kode.value = "";
	this.style.display = "none";
});

function valkode() {
	const vkode = document.querySelector("#vkode");
	const value = kode.value;
	var hasil = false;
	
	if( value.length > 0 && value.length <= 4) {
		vkode.innerHTML = "Masukan maksimal 5 angka";
		ckode.style.display = "block";
		hasil = false;
	}else if( value.length >= 6  ) {
		vkode.innerHTML = "Terlalu banyak angka";
		ckode.style.display = "block";
		hasil = false;
	}else if ( value.length === 5 ) {
		vkode.innerHTML = "";
		hasil = true;
		ckode.style.display = "block";
	}else if( value == "") {
		vkode.innerHTML = "Masukan maksimal 5 angka";
		hasil = false;
		ckode.style.display = "none";
	} 
	
	return hasil;
} 

kode.addEventListener("keyup", valkode);


const jmlsiswa = document.querySelector("#jmlsiswa");
cjumlahsw.addEventListener("click", function() {
	jmlsiswa.value = "";
	this.style.display = "none";
});

function valjmlsiswa() {
	const vjmlsiswa = document.querySelector("#vjmlsiswa");
	const jmlsiswa = document.querySelector("#jmlsiswa");
	const value = jmlsiswa.value;
	var hasil = false;
	
	if (value.length == 0 ) {
		vjmlsiswa.innerHTML = "Tidak boleh kosong";
		hasil = false;
		cjumlahsw.style.display = "none";
	}else if ( value > 100) {
		vjmlsiswa.innerHTML = "Terlalu banyak siswa";
		hasil = false;
		cjumlahsw.style.display = "block";
	}else{
		vjmlsiswa.innerHTML = "";
		hasil = true;
		cjumlahsw.style.display = "block";
	} 
	return hasil;
} 

jmlsiswa.addEventListener("keyup", valjmlsiswa);


const provinsi = document.querySelector("#provinsi");
const kabupaten = document.querySelector("#kabupaten");

const bali = ["BANDUNG", "BANGLI", "BULELENG", "DENPASAR", "GIANYAR", "JEMBRANA", "KARANGASEM", "KLUNGKUNG", "SINGARAJA", "TABANAN"];
const banten = ["CILEGON", "LEBAK", "PANDEGLANG", "SERANG", "TANGGERANG", "TANGGERANG SELATAN"];
const bengkulu = ["BENGKULU", "BENGKULU SELATAN", "BENGKULU TENGAH","BENGKULU UTARA", "BENTENG", "KAUR", "KEPAHIANG", "LEBONG", "MUKO MUKO", "REJANG LEBONG", "SELUMA"];
const yogyakarta = ["BANTUL", "GUNUNG KIDUL", "KULON PROGO", "SLEMAN", "YOGYAKARTA"];
const jakarta = ["JAKARTA BARAT", "JAKARTA PUSAT", "JAKARTA SELATAN", "JAKARTA TIMUR", "JAKARTA UTARA", "KEPULAUAN SERIBU"];
const gorontalo = ["BOALEMO", "BONE BOLANGO", "GORONTALO", "GORONTALO UTARA", "POHUWATO"];
const jambi = ["BATANG HARI", "BUNGO", "JAMBI", "KERINCI", "MERANGIN", "MUARO JAMBI", "SAROLANGUN", "SUNGAIPENUH", "TANJUNG JABUNG BARAT", "TANJUNG JABUNG TIMUR", "TEBO"];
const jawabarat = ["BANDUNG", "BANDUNG BARAT", "BANJAR", "BEKASI", "Bogor", "CIAMIS", "Cianjur", "CIKAMPEK", "CIMAHI", "CIREBON", "DEPOK", "GARUT", "INDRAMAYU", "KARAWANG", "KUNINGAN", "Majalengka", "PANGANDARAN", "PURWAKARTA", "SUBANG", "SUKABUMI", "SUMEDANG", "TASIKMALAYA"];


function valprovinsi(e) {
	var value = provinsi.value;
	
	const opti = document.querySelectorAll(".opt");
	opti.forEach(function(dat){
		if(dat.classList.contains("opt") ) {
			dat.style.display = "none";
		} 
	});
	if( value == "bali" ) {
		//var isi = "";
		//let i = 0;
		
		for( var p = 0; p < bali.length; p++) {
		//	isi += "<option value='"+ bali[p] + "'>"+ bali[p] +"</option>";
		
			const option = document.createElement("option");
			const text = document.createTextNode(bali[p]);
			option.classList.add("opt");
			option.classList.add("bali");
			option.appendChild(text);
			
			kabupaten.appendChild(option);
		} 
		
		
		
		//kabupaten.innerHTML = isi;
	
	}else if(value == "banten" ) {
		
		for( var p = 0; p < banten.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(banten[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("banten");
		
			kabupaten.appendChild(option);
			
			
		} 
		
	}else if(value == "yogyakarta" ) {
	
		for( var p = 0; p < yogyakarta.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(yogyakarta[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("yogyakarta");
	
			kabupaten.appendChild(option);
	
	
		} 
	
	}else if(value == "bengkulu" ) {
	
		for( var p = 0; p < bengkulu.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(bengkulu[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("bengkulu");
	
			kabupaten.appendChild(option);
	
	
		} 
	
	}else if(value == "jakarta" ) {
	
		for( var p = 0; p < jakarta.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(jakarta[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("jakarta");
	
			kabupaten.appendChild(option);
	
	
		} 
	
	}else if(value == "gorontalo" ) {
	
		for( var p = 0; p < gorontalo.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(gorontalo[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("gorontalo");
	
			kabupaten.appendChild(option);
	
	
		} 
	
	}else if(value == "jambi" ) {
	
		for( var p = 0; p < jambi.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(jambi[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("jambi");
	
			kabupaten.appendChild(option);
	
	
		} 
	
	}else if(value == "jawabarat" ) {
	
		for( var p = 0; p < jawabarat.length; p++) {
			const option = document.createElement("option");
			const text = document.createTextNode(jawabarat[p]);
			option.appendChild(text);
			option.classList.add("opt");
			option.classList.add("jawabarat");
	
			kabupaten.appendChild(option);
	
	
		} 
	
	} 
 	
 
 	
	var hasil = false;
	const vprovinsi = document.getElementById("vprovinsi");
	if( value == "-- Pilih Provinsi --" || value == undefined || value == "") {
		vprovinsi.innerHTML = "Pilih bagian ini";
		hasil = false;
		vprovinsi.style.marginTop = "-25px";
	}else{
		vprovinsi.innerHTML = "";
		hasil = true;
	} 
	return hasil;
}
provinsi.addEventListener("change", valprovinsi);

function valkabupaten() {
	const value = kabupaten.value;
	const vkabupaten = document.querySelector("#vkabupaten");
	var hasil = false;
	//alert(value);
	if( value == "-- Pilih Kota/Kabupaten --" || value == undefined || value == "") {
		vkabupaten.innerHTML = "Pilih bagian ini";
		vkabupaten.style.marginTop = "-25px";
		hasil = false;
	}else {
		vkabupaten.innerHTML = "";
		hasil = true;
	} 
	return hasil;
} 

kabupaten.addEventListener("change", valkabupaten);

const email = document.getElementById("email");

cemail.addEventListener("click", function() {
	email.value = "";
	this.style.display = "none";
});

function valemail() {
	const vemail = document.querySelector("#vemail");
	const evalue = document.getElementById("email").value;
	var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
	var has = false;
	
	if(evalue.match(pattern)) {
		vemail.innerHTML = "";
		has = true;
		cemail.style.display = "block";
	}else if ( evalue == "" ) {
		vemail.innerHTML = "Masukan email";
		cemail.style.display = "none";
		has = false;
	}else{
		vemail.innerHTML = "Email tidak valid";
		has = false;
		cemail.style.display = "block";
	}
	

	
	
	return has;
} 

email.addEventListener("keyup", valemail);


const enama = document.querySelector("#nama");
cnama.addEventListener("click", function() {
	enama.value = "";
	this.style.display = "none";
});

function valnama() {
	const vnama = document.querySelector("#vnama");
	const isi = document.getElementById("nama").value;
	var hasil = false;
	if( isi == "") {
		vnama.innerHTML = "Tidak boleh kosong";
		hasil = false;
		cnama.style.display = "none";
	}else {
		hasil = true;
		vnama.innerHTML = "";
		cnama.style.display = "inline-block";
	} 
	
	return hasil;
} 

nama.addEventListener("keyup", valnama);


const aalamat = document.querySelector("#alamat");
calamat.addEventListener("click", function() {
	aalamat.value = "";
	this.style.display = "none";
});
function alamatt() {
	const alamat = document.querySelector("#alamat").value;
	const valamat = document.querySelector("#valamat");
	var hasil = false;
	if(alamat == "") {
		valamat.innerHTML = "Tidak boleh kosong";
		hasil = false;
		calamat.style.display = "none";
	}else{
		hasil = true;
		valamat.innerHTML = "";
		calamat.style.display = "block";
	} 
	
	return hasil;
} 

aalamat.addEventListener("keyup", alamatt);



const notlpp = document.querySelector("#notlp");
cnotlp.addEventListener("click", function() {
	notlpp.value = "";
	this.style.display = "none";
});
const anotlp = document.querySelector("#notlp");
function notelponn() {
	const notlp = document.querySelector("#notlp").value;
	const vnotlp = document.querySelector("#vnotlp");
	var hasil = false;
	if(notlp == "" ) {
		vnotlp.innerHTML = "Tidak boleh kosong";
		hasil = false;
		cnotlp.style.display = "none";
	}else{
		hasil = true;
		vnotlp.innerHTML = "";
		cnotlp.style.display = "block";
	} 
	
	return hasil;
} 

anotlp.addEventListener("keyup", notelponn);


const afacebook = document.querySelector("#facebook");
cfacebook.addEventListener("click", function() {
	afacebook .value = "";
	this.style.display = "none";
});
function facebookk() {
	const facebook = document.querySelector("#facebook").value;
	const vfacebook = document.querySelector("#vfacebook");
	var hasil = false;
	if( facebook == "") {
		vfacebook.innerHTML = "Tidak boleh kosong";
		hasil = false;
		cfacebook.style.display = "none";
	}else{
		hasil = true;
		vfacebook.innerHTML = "";
		cfacebook.style.display = "block";
	} 
	
	return hasil;
} 

afacebook.addEventListener("keyup", facebookk);


const cmodal = document.querySelector("#cmodal");
const fullayer = document.querySelector("#fullayer");
cmodal.addEventListener("click", function() {
	modal.classList.remove("active");
	fullayer.classList.remove("active");
});

const button = document.querySelector("#tombol");
button.addEventListener("click", function(e) {
	if(!valtipe() || !valkabupaten() || !valprovinsi() || !valnama() || !alamatt() || !notelponn() || !facebookk() || !valemail() || !valkode() || !valjmlsiswa()) {
		e.preventDefault();
		valtipe();
		valprovinsi();
		valnama();
		alamatt();
		notelponn();
		facebookk();
		valemail();
		valkode();
		valjmlsiswa();
		valkabupaten();
		modal.classList.add("active");
		fullayer.classList.add("active");
		//alert("Mohon maaf harus di isi semua");
		return;
	}
	
	alert("Berhasil Ditambahkan");
});

