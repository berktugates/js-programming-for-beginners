/*
    1- url kaç karakterlidir?
    2- KursAdi kaç kelimeden oluşmaktadır.
    3- url https ile mi başlıyor?
    4- kursAdi içerisinde Eğitimi kelimesi var mı?
    5- url ve kursAdi değişkenlerini kullanarak aşağıdaki string bilgiyi oluşturunuz.
        https://www.sadikturan.com/komple-web-gelistirme-kursu
*/

let url = "https://www.sadikturan.com";
let kursAdi = "Komple Web Geliştirme Kursu";

// 1.Soru
console.log(url.length)

// 2.Soru
console.log(kursAdi.trim().split(" ").length)

// 3.Soru
if(url.indexOf("https")==0){
    console.log("url değişkeni https ile başlıyor.")
}
else{
    console.log("url değişkeni https ile başlamıyor.")
}

// 4.Soru
console.log(kursAdi.search("Eğitimi"))

// 5. Soru
kursAdi = kursAdi.toLowerCase()
kursAdi = kursAdi.replaceAll(" ","-")
cevap = `${url}/${kursAdi}`
console.log(cevap)