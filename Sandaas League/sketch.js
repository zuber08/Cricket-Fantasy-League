//IND
var KOHLI = 12;
var ROHIT = 120;
var PUJARA = 7;
var GILL = 0;
var JADEJA = 210;
var ASHWIN = 183;
var AXAR = 104;
var SIRAJ = 21;
var UMESH = 0;

//AUS
var WARNER = 11;
var KHWAJA = 6;
var LABU = 66;
var SMITH = 62;
var LYON = 28;
var CUMMINS = 47;

var scores = {
    "Zuber": 0,
    "Wegi": 0,
    "Sid": 0,
    "Yog": 0,
    "Wanju": 0,
    "Sahil": 0,
    "Dhiraj": 0,
    "Ashu": 0,
    "Swapnajit": 0,
    "Aftab": 0,
    "Chiggy": 0,
    "Dubey": 0,
    "Mhaisu": 0,
    "Chole": 0,
    "Jay": 0,
    "Chavan": 0,
    "Kuchewar": 0,
}

var Leaderboard = {};

function swap(arr, first_Index, second_Index) {
    var temp = arr[first_Index];
    arr[first_Index] = arr[second_Index];
    arr[second_Index] = temp;
}

function bubble_Sort(arr, arr2) {

    var len = arr.length,
        i, j, stop;

    for (i = 0; i < len; i++) {
        for (j = 0, stop = len - i; j < stop; j++) {
            if (arr[j] >= arr[j + 1]) {
                swap(arr, j, j + 1);
                swap(arr2, j, j + 1);
            }
        }
    }

    return arr;
}

function Leaders() {

    Chiggy();
    Zuber();
    Sid();
    Wegi();
    Swapnajit();
    Dhiraj();
    Dubey();
    Ashu();
    Yog();
    Wanju();
    Aftab();
    Sahil();
    Mhaisu();
    Chavan();
    Chole();
    Jay();
    Kuchewar();

    var players = Object.keys(scores);
    var fantasypoints = Object.values(scores);

    fantasypoints = bubble_Sort(fantasypoints, players);
    fantasypoints.reverse();
    players.reverse();


    document.getElementById('p0').innerHTML = players[0];
    document.getElementById('p1').innerHTML = players[1];
    document.getElementById('p2').innerHTML = players[2];
    document.getElementById('p3').innerHTML = players[3];
    document.getElementById('p4').innerHTML = players[4];
    document.getElementById('p5').innerHTML = players[5];
    document.getElementById('p6').innerHTML = players[6];
    document.getElementById('p7').innerHTML = players[7];
    document.getElementById('p8').innerHTML = players[8];
    document.getElementById('p9').innerHTML = players[9];
    document.getElementById('p10').innerHTML = players[10];
    document.getElementById('p11').innerHTML = players[11];
    document.getElementById('p12').innerHTML = players[12];
    document.getElementById('p13').innerHTML = players[13];
    document.getElementById('p14').innerHTML = players[14];
    document.getElementById('p15').innerHTML = players[15];
    document.getElementById('p16').innerHTML = players[16];

    document.getElementById('f0').innerHTML = fantasypoints[0];
    document.getElementById('f1').innerHTML = fantasypoints[1];
    document.getElementById('f2').innerHTML = fantasypoints[2];
    document.getElementById('f3').innerHTML = fantasypoints[3];
    document.getElementById('f4').innerHTML = fantasypoints[4];
    document.getElementById('f5').innerHTML = fantasypoints[5];
    document.getElementById('f6').innerHTML = fantasypoints[6];
    document.getElementById('f7').innerHTML = fantasypoints[7];
    document.getElementById('f8').innerHTML = fantasypoints[8];
    document.getElementById('f9').innerHTML = fantasypoints[9];
    document.getElementById('f10').innerHTML = fantasypoints[10];
    document.getElementById('f11').innerHTML = fantasypoints[11];
    document.getElementById('f12').innerHTML = fantasypoints[12];
    document.getElementById('f13').innerHTML = fantasypoints[13];
    document.getElementById('f14').innerHTML = fantasypoints[14];
    document.getElementById('f15').innerHTML = fantasypoints[15];
    document.getElementById('f16').innerHTML = fantasypoints[16];

    for(var i=0;i<17;i++)
    {
        var play='p'+i;
        var image='img'+i;

    if (document.getElementById(play).innerHTML == "Wanju") 
        document.getElementById(image).src = "images/wanju.jpg";

    if (document.getElementById(play).innerHTML == "Sid") 
        document.getElementById(image).src = "images/sid.jpg";
    
    if (document.getElementById(play).innerHTML == "Swapnajit") 
        document.getElementById(image).src = "images/swapnajit.jpg";

    if (document.getElementById(play).innerHTML == "Wegi") 
        document.getElementById(image).src = "images/wegi.jpg";

    if (document.getElementById(play).innerHTML == "Chiggy") 
        document.getElementById(image).src = "images/chiggy.jpg"; 
        
    if (document.getElementById(play).innerHTML == "Zuber") 
        document.getElementById(image).src = "images/zuber.jpg";   
   
    if (document.getElementById(play).innerHTML == "Ashu") 
        document.getElementById(image).src = "images/ashu.jpg";

    if (document.getElementById(play).innerHTML == "Dhiraj") 
        document.getElementById(image).src = "images/thakre.jpg";

    if (document.getElementById(play).innerHTML == "Aftab") 
        document.getElementById(image).src = "images/aftab.jpg";

    if (document.getElementById(play).innerHTML == "Yog") 
        document.getElementById(image).src = "images/yog.jpg";

    if (document.getElementById(play).innerHTML == "Sahil") 
        document.getElementById(image).src = "images/sahil.jpg";
    
    if (document.getElementById(play).innerHTML == "Dubey") 
        document.getElementById(image).src = "images/dubey.jpg";

    if (document.getElementById(play).innerHTML == "Mhaisu") 
        document.getElementById(image).src = "images/mhaisu.jpg";
        
    if (document.getElementById(play).innerHTML == "Jay") 
        document.getElementById(image).src = "images/jay.jpg";

    if (document.getElementById(play).innerHTML == "Chole") 
        document.getElementById(image).src = "images/chole.jpg";

    if (document.getElementById(play).innerHTML == "Chavan") 
        document.getElementById(image).src = "images/chavan.jpg";

    if (document.getElementById(play).innerHTML == "Kuchewar") 
        document.getElementById(image).src = "images/kuchewar.jpg";

    }

}

function Chiggy() {
    scores["Chiggy"] += ASHWIN*2 + JADEJA*1.5 + LYON*1.25 + KOHLI + SMITH + LABU + CUMMINS;
}

function Zuber() {
    scores["Zuber"] +=  JADEJA*2 + LYON*1.5 + ASHWIN*1.25 + SMITH + LABU + CUMMINS + ROHIT;
}

function Swapnajit() {
    scores["Swapnajit"] += KOHLI*2 + JADEJA*1.5 + LABU*1.25 + PUJARA + GILL + SIRAJ + CUMMINS;
}

function Wegi() {
    scores["Wegi"] += ASHWIN*2 + PUJARA*1.5 + LABU*1.25 + SMITH + JADEJA + LYON + SIRAJ;
}

function Sid() {
    scores["Sid"] += ASHWIN*2 + KOHLI*1.5 + LABU*1.25 + LYON + CUMMINS + PUJARA + JADEJA;
}

function Wanju() {
    scores["Wanju"] += KOHLI*2 + LYON*1.5 + PUJARA*1.25 + LABU + JADEJA + SIRAJ + ASHWIN;
}

function Dhiraj() {
    scores["Dhiraj"] += ASHWIN*2 + SMITH*1.5 + LABU*1.25 + KOHLI + SIRAJ + GILL + LYON;
}

function Dubey() {
    scores["Dubey"] += KOHLI*2 + GILL*1.5 + LABU*1.25 + SMITH + CUMMINS + SIRAJ + AXAR;
}

function Yog() {
    scores["Yog"] += SMITH*2 + ASHWIN*1.5 + ROHIT*1.25 + GILL + PUJARA + LYON + CUMMINS;
}

function Sahil() {
    scores["Sahil"] += ASHWIN*2 + KOHLI*1.5 + LABU*1.25 + SMITH + LYON + CUMMINS + ROHIT;
}

function Ashu() {
    scores["Ashu"] += JADEJA*2 + KOHLI*1.5 + LABU*1.25 + GILL + ASHWIN + LYON + SIRAJ;
}

function Aftab() {
    scores["Aftab"] += KHWAJA*2 + LABU*1.5 + GILL*1.25 + SIRAJ + KOHLI + SMITH + LYON;
}

function Mhaisu() {
    scores["Mhaisu"] += JADEJA*2 + SMITH*1.5 + ASHWIN*1.25 + LYON + KOHLI + LABU + CUMMINS;
}

function Jay() {
    scores["Jay"] += WARNER*2 + KOHLI*1.5 + LABU*1.25 + UMESH + LYON + PUJARA + JADEJA;
}

function Kuchewar() {
    scores["Kuchewar"] += ASHWIN*2 + LYON*1.5 + KOHLI*1.25 + KHWAJA + PUJARA + SIRAJ + SMITH;
}

function Chole() {
    scores["Chole"] += CUMMINS*2 + LYON*1.5 + KOHLI*1.25 + SMITH + LABU + PUJARA + JADEJA;
}

function Chavan() {
    scores["Chavan"] += GILL*2 + WARNER*1.5 + ASHWIN*1.25 + KOHLI + SMITH + SIRAJ + CUMMINS;
}