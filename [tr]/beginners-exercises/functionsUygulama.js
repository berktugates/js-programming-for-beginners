/*
    1- Kendisine gönderilen kelimeyi belirtilen kez ekranda yazan fonksiyonu yazın.
    2- Dikdörtgenin alan ve çevresini hesaplayan fonksiyonu yazın.
    3- Yazı tura uygulamasını fonksiyon kullanarak yapın.
    4- Kendisine gönderilen bir sayının tam bölenlerini dizi şeklinde döndüren fonksiyonu yazınız.
    5- Değişken sayıda parametre alan toplam isminde bir fonksiyon tanımlayınız.
*/

// Soru 1 
function kackez(sayac,kelime){
    for(let i=1;i<=sayac;i++){
        console.log(kelime);
    }
}

// Soru 2
function alancevre(genislik,yukseklik){
    let alan = genislik*yukseklik;
    let cevre = 2*(genislik+yukseklik);
    console.log(`Dikdörtgenin alanı: ${alan}, cevresi ${cevre}`);
}

// Soru 3
function yazitura(){
   let rastgele = Math.random();
   if(rastgele>=0.5){
    console.log("Tura")
   }
   else{
    console.log("Yazı")
   }
}


// Soru 4
function tambolenleribul(sayi){
    let bolenler = [];
    for(let i=1;i<=sayi;i++){
        if(sayi%i==0){
            bolenler.push(i);
        }
    }
    console.log(bolenler);
}

// Soru 5
function toplam(){
    console.log(arguments); // arguments ile fonksiyona dışarıdan gönderilen değerleri key,value şeklinde saklar.
    let toplam = 0;
    for(let i=0; i<arguments.length;i++){
        toplam+=arguments[i];
    }
    console.log(toplam);
}

//  Soru 6 - Fonksiyon kullanarak yarıçapı girilen dairenin alanını hesapla
function daireAlan(r){
    let alan = 3.14 * r * r;
    console.log(`Alan:${alan}`);
    return alan;
}

// Soru 7 - Fonksiyon kullanarak genişliği ve yüksekliği girilen dikdörtgenin alanını hesapla
function dikdortgenAlan(genislik,yukseklik){
    let alan = genislik*yukseklik;
    console.log(`Dikdörtgenin alanı:${alan}`);
    return alan;
}