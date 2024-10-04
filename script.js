let contentVue = document.querySelector('.ds');
let button = document.querySelector('.zn');

button.addEventListener("click", function (evt) {
    evt.preventDefault();
    contentVue.classList.toggle("ds-hidden");
})

let stp = document.querySelector('.sp');
let button3 = document.querySelector('.zn3');

button3.addEventListener("click", function (evt) {
    evt.preventDefault();
    stp.classList.toggle("sp-hidden");
})

let cal = document.querySelector('.cal');
let button4 = document.querySelector('.zn4');

button4.addEventListener("click", function (evt) {
    evt.preventDefault();
    cal.classList.toggle("cl-hidden");
})

let setn = document.querySelector('.st');
let button5 = document.querySelector('.zn5');

button5.addEventListener("click", function (evt) {
    evt.preventDefault();
    setn.classList.toggle("st-hidden");
})

let wlt = document.querySelector('.wl');
let button6 = document.querySelector('.zn6');

button6.addEventListener("click", function (evt) {
    evt.preventDefault();
    wlt.classList.toggle("wl-hidden");
})

let fls = document.querySelector('.fl');
let button7 = document.querySelector('.zn7');

button7.addEventListener("click", function (evt) {
    evt.preventDefault();
    fls.classList.toggle("fl-hidden");
})

let ofing = document.querySelector('.offf');
let button12 = document.querySelector('.of');

button12.addEventListener("click", function (evt) {
    evt.preventDefault();
    ofing.classList.toggle("offf-hidden2");
})

let snom = document.querySelector('.son');
let button2 = document.querySelector('.nt');

button2.addEventListener("click", function (evt) {
    evt.preventDefault();
    snom.classList.toggle("son-hidden");
})

let somn = document.querySelector('.son');

somn.addEventListener("click", function (evt) {
    evt.preventDefault();
    somn.classList.toggle("son-hidden2");
})

let rmk = document.querySelector('.ram');
let zn3n = document.querySelector('.zn3');

zn3n.addEventListener("click", function (evt) {
    evt.preventDefault();
    rmk.classList.toggle("rmk-hidden");
})

let rmk1 = document.querySelector('.ram');
let zn4n = document.querySelector('.zn4');

zn4n.addEventListener("click", function (evt) {
    evt.preventDefault();
    rmk1.classList.toggle("rmk-hidden");
})

let rmk2 = document.querySelector('.ram');
let zn5n = document.querySelector('.zn5');

zn5n.addEventListener("click", function (evt) {
    evt.preventDefault();
    rmk2.classList.toggle("rmk-hidden");
})

let rmk3 = document.querySelector('.ram');
let zn6n = document.querySelector('.zn6');

zn6n.addEventListener("click", function (evt) {
    evt.preventDefault();
    rmk3.classList.toggle("rmk-hidden");
})

let rmk4 = document.querySelector('.ram');
let zn7n = document.querySelector('.zn7');

zn7n.addEventListener("click", function (evt) {
    evt.preventDefault();
    rmk4.classList.toggle("rmk-hidden");
})

let wd1 = document.querySelector('.wid1');
let wdd = document.querySelector('.wdg1');

wdd.addEventListener("click", function (evt) {
    evt.preventDefault();
    wd1.classList.toggle("wid1-hidden");
    wdd.classList.toggle("wdg1-hidden");
})

let wd2 = document.querySelector('.wid2');
let wdd2 = document.querySelector('.wdg2');

wdd2.addEventListener("click", function (evt) {
    evt.preventDefault();
    wd2.classList.toggle("wid2-hidden");
    wdd2.classList.toggle("wdg2-hidden");
})

let w1 = document.querySelector('.w1');
let bd = document.querySelector('body');
let w1b = document.querySelector('.w1');

w1b.addEventListener("click", function (evt) {
    evt.preventDefault();
    w1.classList.toggle("w-param");
    bd.classList.toggle("b-param");
})

let w2 = document.querySelector('.w2');
let w2b = document.querySelector('.w2');
let bd2 = document.querySelector('body');

w2b.addEventListener("click", function (evt) {
    evt.preventDefault();
    w2.classList.toggle("w-param");
    bd2.classList.toggle("b-param2");
})

let w3 = document.querySelector('.w3');
let w3b = document.querySelector('.w3');
let bd3 = document.querySelector('body');

w3b.addEventListener("click", function (evt) {
    evt.preventDefault();
    w3.classList.toggle("w-param");
    bd3.classList.toggle("b-param3");
})

let w4 = document.querySelector('.w4');
let w4b = document.querySelector('.w4');
let bd4 = document.querySelector('body');

w4b.addEventListener("click", function (evt) {
    evt.preventDefault();
    w4.classList.toggle("w-param");
    bd4.classList.toggle("b-param4");
})

let w5 = document.querySelector('.w5');
let w5b = document.querySelector('.w5');
let bd5 = document.querySelector('body');

w5b.addEventListener("click", function (evt) {
    evt.preventDefault();
    w5.classList.toggle("w-param");
    bd5.classList.toggle("b-param5");
})

let w6 = document.querySelector('.w6');
let w6b = document.querySelector('.w6');
let bd6 = document.querySelector('body');

w6b.addEventListener("click", function (evt) {
    evt.preventDefault();
    w6.classList.toggle("w-param");
    bd6.classList.toggle("b-param6");
})

// let rm = document.querySelector('.ram');
// let sk = document.querySelector('#db1');
// // let tk = document.querySelector('body');

// sk.addEventListener("click", function (evt) {
//     evt.preventDefault();
//     rm.classList.toggle("rampl");
//     // bd6.classList.toggle("b-param6");
// })

document.body.style.backgroundImage