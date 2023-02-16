/*
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv 18%)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    a)  sipariş id : 101
        sipariş tarihi : 31.12.2022
        ödeme şekli : kredi kartı
        kargo adresi : yahya kaptan mah. kocaeli izmit
        satın alınan ürünler :
            ürün id : 5
            ürün başlığı : iphone 13 pro
            ürün url : https://abc.com/iphone-13-pro
            ürün fiyatı : 22000

            ürün id : 6
            ürün başlığı : iphone 13 pro max
            ürün url : https://abc.com/iphone-13-pro-max
            ürün fiyatı : 25000
        müşteri :
            müşteri id: 11
            
        satıcı :
            firma id : 34
            firma adı : Apple Türkiye   



    b)  sipariş id : 101
        sipariş tarihi : 30.12.2022
        ödeme şekli : kredi kartı
        kargo adresi : yahya kaptan mah. kocaeli izmit
        satın alınan ürünler :
            ürün id : 6
            ürün başlığı : iphone 13 pro max
            ürün url : https://abc.com/iphone-13-pro-max
            ürün fiyatı : 25000    
        müşteri :
            müşteri id: 12
            
        satıcı :
            firma id : 34
            firma adı : Apple Türkiye            
    
*/


// Soru 1
let siparis1 = {
    "siparisid" : "101",
    "siparistarihi" : "31.12.2022",
    "ödemesekli" : "kredi kartı",
    "kargoadresi" : "yahya kaptan mah. Kocaeli İzmit",
    "satinalinanurunler" : [
        {
            "ürünid" : "5",
            "ürünbasligi" : "iphone 13 pro ",
            "ürünurl" : "https://abc.com/iphone-13-pro",
            "ürünfiyat" : 22000
        },
        {
            "ürünid" : "6",
            "ürünbasligi" : "iphone 13 pro max ",
            "ürünurl" : "https://abc.com/iphone-13-pro-max",
            "ürünfiyat" : 25000            
        }
    ],
    "müsteri" :{
        "müsteriid" : "11"
    },
    "satici" : {
        "firmaid" : "34",
        "firmaadi" : "Apple Türkiye"
    }
    
}

let siparis2 = {
    "siparisid" : "102",
    "siparistarihi" : "30.12.2022",
    "ödemesekli" : "kredi kartı",
    "kargoadresi" : "yahya kaptan mah. Kocaeli İzmit",
    "satinalinanurunler" :[
        {
        "ürünid" : "5",
        "ürünbasligi" : "iphone 13 pro",
        "ürünurl" : "https://abc.com/iphone-13-pro",
        "ürünfiyati" : 22000
        }
    ],
    "müsteri" : {
        "musteriid" : "12"
    },
    "satici" : {
        "firmaid" : "34",
        "firmaadi" : "Apple Türkiye"
    }
}

// Soru 2
let siparis1toplam = ((siparis1.satinalinanurunler[0].ürünfiyat + siparis1.satinalinanurunler[1].ürünfiyat) *18 /100) + (siparis1.satinalinanurunler[0].ürünfiyat + siparis1.satinalinanurunler[1].ürünfiyat)
let siparis2toplam = (siparis2.satinalinanurunler[0].ürünfiyati *18/100) + (siparis2.satinalinanurunler[0].ürünfiyati) 

// Soru 3
let toplamucret = siparis1toplam + siparis2toplam;
