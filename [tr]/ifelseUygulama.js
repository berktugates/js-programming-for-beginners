/*
    1- Bir sayının 10-50 arasında olup olmadığını kontrol ediniz.
    2- Bir sayının pozitif tek sayı olup olmadığını kontrol ediniz.
    3- x,y,z sayılarının büyüklük karşılaştırmasını yapınız.
    4- 2 vize 1 final notuna göre hesaplanan ortalama için;
        a- Eğer ortalama 50 üstünde ise geçti değilse kaldı yazsın.
        b- Geçmek için ortalama 50 bile olsa final notu en az 50 olmalıdır.
        c- Finalden 70 alındığında ortalama 50'nin altında olsa bile dersten geçilsin.
*/


// 1. Soru

let a = 50

if(10<a && a<50){
    console.log("Sayı 10 ile 50 arasındadır.")
}
else{
    console.log("Sayi 10 ile 50 arasında değildir.")
}

// 2.Soru

let b = 9

if(b>0 && b%2==1){
    console.log("Sayı pozitif ve tek bir sayıdır")
}
else{
    console.log("Sayı pozitif ve tek bir sayı değildir.")
}

// 3.Soru

let x=10;
let y=20;
let z=30;

if(x>y && x>z && y>z){
    console.log("x>y>z")
}
else if(x>y && x>z && z>y){
    console.log("x>z>y")
}
else if(y>x && y>z && x>z){
    console.log("y>x>z")
}
else if(y>x && y>z && z>x){
    console.log("y>z>x")
}
else if(z>x && z>y && x>y){
    console.log("z>x>y")
}
else if(z>x && z>y && y>x){
    console.log("z>y>x")
}
else{
    console.log("Bir hatayla karşılaşıldı.")
}



// 4. Soru
    //a
    let vize1=50
    let vize2=55
    let final=65
    let ortalama=(vize1+vize2+final)/3

    if(ortalama>=50){
        console.log("Geçtiniz.")
    }
    else{
        console.log("Kaldınız.")
    }

    //b
    if(ortalama>=50){
        if(final>=50){
            console.log("Geçtiniz.")
        }
        else{
            console.log("Ortalaman 50 üstü lakin final notunuz 50 altında olduğu için kaldınız.")
        }
    }
    else{
        console.log("Ortalamanız 50 den düşük olduğu için kaldınız.")
    }

    //c
    if(ortalama>=50){
        if(final>=50){
            console.log("Geçtiniz.")
        }
        else{
            console.log("Ortalaman 50 üstü lakin final notunuz 50 altında olduğu için kaldınız.")
        }
    }
    else if(final>=70){
        console.log("Ortalamanız 50 den düşük lakin final notunuz 70 veya üstü olduğu için geçtiniz.")
    }
    else{
        console.log("Ortalamanız 50 den düşük olduğu için kaldınız.")
    }

