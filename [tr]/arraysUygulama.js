/*
    1- Elma, Armut, Muz, Çilek elemanlarına sahip bir dizi oluşturunuz.
    2- Dizi kaç elemanlıdır?
    3- Dizinin ilk ve son elemanı nedir?
    4- Elma dizinin bir elemanı mıdır?
    5- Kiraz meyvesini listenin sonuna ekleyiniz.
    6- Dizinin son 2 elemanını siliniz.
    7- Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını hesaplayınız.

        Öğrenci 1 : Yiğit Bilgi 2010 (70,60,80)
        Öğrenci 2: Ada Bilgi 2012 (80,80,90)
        Öğrenci 3: Ahmet Turan 2009 (60,60,70)
*/

// Soru 1
let meyveler = ["Elma","Armut","Muz","Çilek"]

// Soru 2
console.log(meyveler.length)

// Soru 3
console.log("Dizinin ilk elemanı " + meyveler[0] + ", dizinin son elemanı " + meyveler[3])

// Soru 4
console.log(meyveler.includes("Elma")) // boolean değer döndürür.

// Soru 5
meyveler.push("Kiraz")

// Soru 6
meyveler.splice(2,2)
console.log(meyveler)

// Soru 7

let gunumuz = new Date();
let ogrenci1 = ["Yiğit","Bilgi",2010,[70,60,80]]
let ogrenci2 = ["Ada","Bilgi",2012,[80,80,90]]
let ogrenci3 = ["Ahmet","Turan",2009,[60,60,70]]

let ogrenci1_yas = gunumuz.getFullYear() - ogrenci1[2]
let ogrenci2_yas = gunumuz.getFullYear() - ogrenci2[2]
let ogrenci3_yas = gunumuz.getFullYear() - ogrenci3[2]

console.log(ogrenci1[0] + "'in yaşı = " + ogrenci1_yas)
console.log(ogrenci2[0] + "'nın yaşı = " + ogrenci2_yas)
console.log(ogrenci3[0] + "'in yaşı = " + ogrenci3_yas)