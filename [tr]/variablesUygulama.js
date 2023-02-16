/*
    1- İki öğrencinin aşağıdaki bilgilerini değişkenler içinde saklayınız.
        
        Öğrenci 1:
         Adı: Mehmet,
         Soyadı: Yılmaz,
         Yaşı: 12,
         Matematik Notları: 70,85,60

        Öğrenci 2: 
         Adı: Aslı,
         Soyadı: Yılmaz,
         Yaşı: 14,
         Matematik Notları: 80,75,90  
         
         
    2- Öğrencilerin yaş bilgilerini değişkende tutunuz.
    3- Öğrencilerin ders ortalama notunu değişkende tutunuz.
    4- Öğrencilerin 50 geçme notuna göre başarı durumlarını değişkende saklayınız.     
 */


let ogrenci1_ad = "Mehmet"
let ogrenci1_soyad = "Yılmaz"
let ogrenci1_yas = 12
let ogrenci1_mat1 = 20
let ogrenci1_mat2 = 55
let ogrenci1_mat3 = 60
let ogrenci1_ort = (ogrenci1_mat1 + ogrenci1_mat2 + ogrenci1_mat3) / 3 

let ogrenci2_ad = "Aslı"
let ogrenci2_soyad = "Yılmaz"
let ogrenci2_yas = 14
let ogrenci2_mat1 = 80
let ogrenci2_mat2 = 75
let ogrenci2_mat3 = 90
let ogrenci2_ort = (ogrenci2_mat1 + ogrenci2_mat2 + ogrenci2_mat3) / 3 


console.log(ogrenci1_ort>=50)
console.log(ogrenci2_ort>=50)