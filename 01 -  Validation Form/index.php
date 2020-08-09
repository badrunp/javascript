<!DOCTYPE html>
<html lan="en">
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	
	<!-- Font Google -->
	<link href="https://fonts.googleapis.com/css2?family=Open+Sans&display=swap" rel="stylesheet">
	
	<!-- Style.css -->
	<link rel="stylesheet" href="css/style.css">
	
	<!-- Title -->
	<title>Projek Form</title>
</head>
<body>
	
	<!-- Form Pendaftaran -->
	
	<div class="container">
		<div class="box">
			<input type="checkbox" id="check">
		</div>
		
		<h1>Data Sekolah</h1>
		
		<form method="post">
			<div>
				<label for="tipe">Tipe Sekolah</label>
				<select id="tipe" name="tipe">
					<option>-- Pilih Tipe --</option>
					<option name="negri" value="negri">Negri</option>
					<option name="swasta" value="swasta">Swasta</option>
				</select>
				<p id="vtipe"></p>
			</div>
			
			<div>
				<label for="nama">Nama Sekolah</label>
				<input type="text" name="nama" id="nama" placeholder="Contoh: SMK PUI Cikijing (Untuk Swasta) " autocomplete="off">
				<p id="vnama"></p>
				
				<img id="cnama" src="img/cancel2.png">
			</div>
			
			<div>
				<label for="alamat">Alamat</label>
				<input type="text" name="alamat" id="alamat">
				<p id="valamat"></p>
				
				<img id="calamat" src="img/cancel2.png">
			</div>
			
			<div>
				<label for="kode">Kode Post</label>
				<input type="number" name="kode" id="kode">
				<p id="vkode"></p>
				
				
				<img id="ckode" src="img/cancel2.png">
			</div>
			
			<div>
				<label for="provinsi">Provinsi</label>
				<select id="provinsi" name="provinsi">
					<option>-- Pilih Provinsi --</option>
					<option  value="bali">Bali</option>
					<option value="banten">Banten</option>
					<option  value="bengkulu">Bengkulu</option>
					<option value="yogyakarta">Yogyakarta</option>
					<option  value="jakarta">Jakarta</option>
					<option value="gorontalo">Gorontalo</option>
					<option  value="jambi">Jambi</option>
					<option value="jawabarat">Jawa Barat</option>
				</select>
				<p id="vprovinsi"></p>
			</div>
			
			<div>
				<label for="kabupaten">Kota/Kabupaten</label>
				<select id="kabupaten" name="kabupaten">
					<option>-- Pilih Kota/Kabupaten --</option>
				</select>
				<p id="vkabupaten"></p>
			</div>
			
			<div>
				<label for="notlp">No Telepon Sekolah</label>
				<input type="number" name="notlp" id="notlp">
				<p id="vnotlp"></p>
				
				<img id="cnotlp" src="img/cancel2.png">
			</div>
			
			<div>
				<label for="email">Email Sekolah</label>
				<input type="text" name="email" id="email" autocomplete="off">
				<p id="vemail"></p>
				
				<img id="cemail" src="img/cancel2.png">
			</div>
			
			<div>
				<label for="facebook">Facebook</label>
				<input type="text" name="facebook" id="facebook">
				<p id="vfacebook"></p>
				
				<img id="cfacebook" src="img/cancel2.png">
			</div>
			
			<div>
				<label for="jumlahsw">Jumlah Siswa</label>
				<input type="number" min="1" max="100" name="jumlahsw" id="jmlsiswa">
				<p id="vjmlsiswa"></p>
				
				<img id="cjumlahsw" src="img/cancel2.png">
			</div>
			
			<div>
				<button name="tombol" id="tombol">Kirim</button>
			</div>
			
		</form>
	</div>
	
	
	<div id="fullayer"></div>
	<div id="modal">
		<p>Mohon maaf tidak boleh kosong</p>
		<img id="cmodal" src="img/cancel2.png">
	</div>
	
	
	
	
	<!-- Script.js -->
	<script type="text/javascript" src="js/script.js"></script>
	<?php
		
		
		//koneksi ke database
		$conn = mysqli_connect("localhost", "root", 
							"", "db_sekolah" );
		
		//ketika tombol di klik
		if( isset($_POST["tombol"])) {
			
			//ambil semua data dan tampung dalam variabel
			$tipe = $_POST["tipe"];
			$nama = $_POST["nama"];
			$alamat = $_POST["alamat"];
			$kode = $_POST["kode"];
			$provinsi = $_POST["provinsi"];
			$kabupaten = strtolower($_POST["kabupaten"]);
			$notlp = $_POST["notlp"];
			$email = $_POST["email"];
			$facebook = $_POST["facebook"];
			$jumlahsw = $_POST["jumlahsw"];
			
			//query #push kedatabase
			$query = "INSERT INTO pendaftaran VALUES 
				('', '$tipe', '$nama', 
				'$alamat', '$kode', '$provinsi', 
				'$kabupaten', '$notlp', '$email', 
				'$facebook', '$jumlahsw') ";
				
			mysqli_query($conn, $query);
			
			
			
		} 
	
	?> 
</body>
</html>