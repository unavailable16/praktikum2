let nip= prompt("Nip : ");
let nama = prompt ("Nama Karyawan :");
let jalan= prompt ("Jalan: ");
let kelurahan= prompt ("Kelurahan: ");
let kecamatan= prompt ("Kecamatan: ");
let kota= prompt ("Kota: ");
let jam= prompt ("Jam Kerja: ");
let predikat= prompt ("Predikat: ");
gaji = 10000;
let totalgaji = jam * gaji;

if (predikat == "A"){
    naik = "Rp2.000.000";
}
else if (predikat == "B"){
    naik = "Rp1.500.000";
}
else if (predikat == "C"){
    naik = "Rp1.000.000";
}
else if (predikat == "D"){
    naik = "Rp500.000";
}
else if (predikat == "E"){
    naik = "Tidak Ada Kenaikan Gaji";
}
else{
    naik = "Minimal Kerja Banh";
}

document.write("<h1>===Data Karyawan "+nip+"===</h1><h2>Nip        : "+nip+"</h2><h2>Nama       : "+nama+"</h2><h2>jalan      : "+jalan+"</h2><h2>kelurahan  : "+kelurahan+"</h2><h2>kecamatan  : "+kecamatan+"</h2><h2>kota       : "+kota+"</h2><h2>Total Gaji Karyawan :  Rp"+totalgaji+"</h2><h2>Kenaikan Gaji : "+naik+"</h2>")