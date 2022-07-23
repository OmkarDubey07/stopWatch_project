let hours = document.getElementById("hr");
let minutes = document.getElementById("min");
let seconde = document.getElementById("sec");
let counts = document.getElementById("count");


let hr = 0; 
let min = 0; 
let sec = 0; 
let count = 0; 

let timer = false ;

function start(){
    timer = true ;
    stopwatch();
}

function stop(){
    timer = false;
}

function reset(){
    timer = false;

     hr = 0; 
     min = 0; 
     sec = 0; 
     count = 0;

    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconde.innerHTML = "00";
    counts.innerHTML = "00";
}

function stopwatch(){

    if(timer ==  true){
        count = count+1;

        if(count == 100){
            sec = sec +1 ;
            count = 0;
        }

        if( sec == 60){
            min = min +1;
            sec = 0 ;
        }

        if(min == 60){
            hr = hr +1;
            min = 0;
            sec = 0 ;
        }

        let hrString = hr;
        let minString = min;
        let secString = sec;
        let countString = count;

        if(hr < 10){
            hrString = "0" + hrString;
        }
        if(min < 10){
            minString = "0" + minString;
        }
        if(sec < 10){
            secString = "0" + secString;
        }
        if(count < 10){
            countString = "0" + countString;
        }
        

        hours.innerHTML = hrString;
        minutes.innerHTML = minString;
        seconde.innerHTML = secString;
        counts.innerHTML = countString;

        setTimeout( "stopwatch()", 10); 

    }
}