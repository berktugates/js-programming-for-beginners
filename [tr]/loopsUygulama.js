/*
    1- Sayılar listesindeki her bir elemanın karesini yazdırınız.
    2- Sayılar listesindeki hangi sayılar 5'in katıdır?
    3- Sayılar listesindeki çift sayıların toplamını bulunuz.
*/

// Soru 1
let sayilar = [1,5,7,15,3,25]

for(let i in sayilar){
    console.log(Math.pow(sayilar[i],2));
}

// Soru 2
for(let i in sayilar){
    if(sayilar[i]%5==0){
        console.log(sayilar[i]);
    }
}

//Soru3
let toplam = 0;

for(let i in sayilar){
    if(sayilar[i]%2==0){
        toplam+=sayilar[i]
    }
}
console.log(toplam)

/*
    4- Ürünler listesindeki tüm ürünleri büyük harf ile yazdırınız.
    5- Ürünler listesinde içinde samsung geçen kaç ürün vardır?
*/

// Soru 4
let urunler = ["iphone 12","samsung s22","iphone 13","samsung s23"]
toplam = 0;

for(let i in urunler){
    console.log(urunler[i].toUpperCase())
}


//  Soru 5
for(let i in urunler){
    if(urunler[i].includes("samsung")){
        toplam++;
    }
}

/*
    6- Öğrenciler listesindeki her bir öğrencinin not ortalaması ve başarı durumlarını yazdırınız.
    7- Tüm öğrencilerin not ortalaması kaçtır?
*/

// Soru 6
let ogrenciler = [
    {"ad":"yiğit","soyad":"bilgi","notlar":[60,70,60]},
    {"ad":"ada","soyad":"bilgi","notlar":[80,70,80]},
    {"ad":"çınar","soyad":"turan","notlar":[70,70,60]}
];

let ogrenci1_ort = (ogrenciler[0].notlar[0]+ogrenciler[0].notlar[1]+ogrenciler[0].notlar[2])/3;
let ogrenci2_ort = (ogrenciler[1].notlar[0]+ogrenciler[1].notlar[1]+ogrenciler[1].notlar[2])/3;
let ogrenci3_ort = (ogrenciler[2].notlar[0]+ogrenciler[2].notlar[1]+ogrenciler[2].notlar[2])/3;

let basaridurum = [ogrenci1_ort,ogrenci2_ort,ogrenci3_ort];

for(let i in basaridurum){
    if(basaridurum[i]>=50){
        console.log(`Tebrikler ${Number(i)+1} numaralı öğrenci dersten geçmiştir.`)
    }
    else{
        console.log(`Maalesef ${Number(i)+1} numaralı öğrenci dersten kalmıştır.`)
    }
}

// Soru 7
let toplamort = (ogrenci1_ort+ogrenci2_ort+ogrenci3_ort)/3;