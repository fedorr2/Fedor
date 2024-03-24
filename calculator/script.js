'use strict'

let a  = Number(20), 
    b = Number(15),
    res

let snak = "pl"
let cc = 1,
first_num,
second_num,
last_operatoin;

let stroka = document.getElementById("str")
let strokaval = stroka.textContent

let c1 = document.getElementById("1"),
c2 = document.getElementById("2"),
c3 = document.getElementById("3"),
c4 = document.getElementById("4"),
c5 = document.getElementById("5"),
c6 = document.getElementById("6"),
c7 = document.getElementById("7"),
c8 = document.getElementById("8"),
c9 = document.getElementById("9"),
c0 = document.getElementById("0"),
cp = document.getElementById("plus"),
cm = document.getElementById("minus"),
cd = document.getElementById("d"),
cu = document.getElementById("u"),
ct = document.getElementById("t"),
cr = document.getElementById("r"),
ctr = document.getElementById("ctr")

c1.onclick = click1
c2.onclick = click2
c3.onclick = click3
c4.onclick = click4
c5.onclick = click5
c6.onclick = click6
c7.onclick = click7
c8.onclick = click8
c9.onclick = click9
c0.onclick = click10
ct.onclick = click11
cm.onclick = click12
cp.onclick = click13
cu.onclick = click14
cd.onclick = click15
cr.onclick = click16
ctr.onclick = click17

function click1 (event) {
    console.log("1 нажата")
    stroka.textContent += 1        
    

}

function click2 () {
    console.log("2 нажата")
   stroka.textContent += 2  
}

function click3 () {
    console.log("3 нажата")
   stroka.textContent += 3  
}

function click4 () {
    console.log("4 нажата")
   stroka.textContent += 4 
}

function click5 () {
    console.log("5 нажата")
   stroka.textContent += 5
}

function click6 () {
    console.log("6 нажата")
   stroka.textContent += 6 
}

function click7 () {
    console.log("7 нажата")
   stroka.textContent += 7
}

function click8 () {
    console.log("8 нажата")
           stroka.textContent += 8

}

function click9 () {
    console.log("9  нажата")
    stroka.textContent += 9
}

function click10 () {
    console.log("0 нажата")
    stroka.textContent += 0
}

function click11 () {
    console.log("точка")
}

function click12 () {
    console.log("минус")
    a = stroka.textContent
    stroka.textContent = '' 
    cc = 2
    snak = "min"
    console.log(snak)
}

function click13 () {
    console.log("плюс")
    a = stroka.textContent
    stroka.textContent = ''
    cc = 2
    snak = "pl"
    console.log(snak)
}

function click14 () {
    console.log("умножить")
    a = stroka.textContent
    stroka.textContent = ''
    cc = 2
    snak = "umn"
    console.log(snak)
}

function click15 () {
    console.log("разделить")
    a = stroka.textContent
    stroka.textContent = ''
    cc = 2
    snak = "ras"
    console.log(snak)
}

function click16 () {
    console.log("равно")
    b = stroka.textContent
    if (snak == "min") {
        console.log("отнимаю")
        res = a - b
    } else if (snak == "pl") {
        console.log("складываю")
        res = a + b
    } else if (snak == "umn") {
        console.log("умножаю")
        res = a * b
    } else if (snak =="ras") {
        console.log("делю")
        res = a / b
    }
    console.log(res)
    stroka.textContent = res
}

function click17 () {
    a = 0
    b = 0
    stroka.textContent = '' 
}
