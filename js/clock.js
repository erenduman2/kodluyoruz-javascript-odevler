let userName = prompt("İsminizi Giriniz:")
let myName = document.querySelector("#myName")
myName.innerHTML = userName
// console.log(myName.innerHMTL)

setInterval(showTime, 1000)

function showTime(){
    let time = new Date();
    let d = time.getDay();
    let day_str;
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if(h < 10){
        h = "0" + h;
    }
    if(m < 10){
        m = "0" + m;
    }
    if(s < 10){
        s= "0" + s;
    }

    day_str = day(d);
    let clock = document.querySelector("#myClock");
    clock.innerHTML = `${h}:${m}:${s} ${day_str}`;

}

function day(d){
    if(d == 0){
        return "PAZAR";
    }
    if(d == 1){
        return "PAZARTESİ";
    }
    if(d == 2){
        return "SALI";
    }
    if(d == 3){
        return "ÇARŞAMBA";
    }
    if(d == 4){
        return "PERŞEMBE";
    }
    if(d == 5){
        return "CUMA";
    }
    if(d == 6){
        return "CUMARTESİ";
    }
}