const header = document.querySelector('header');
let monthNumber = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
let currentDate = new Date();
let currentDay = currentDate.getDate();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();
let dates = document.getElementById('dates');
let month = document.getElementById('month');
let year = document.getElementById('year');
let prevMonthDOM = document.getElementById('prev');
let nextMonthDOM = document.getElementById('next');

month.textContent = monthNumber[currentMonth];
year.textContent = currentYear.toString();

//prevMonthDOM.addEventListener('click',()=>lastMonth());
//nextMonthDOM.addEventListener('click',()=>nextMonth());

writeMonth(currentMonth);
getNoDay();

//Cambia el header de static a fixed (position)
window.addEventListener('scroll', function(){
    if(window.scrollY > 0){
    //Reemplaza la clase fijo por la scroll (permitiendo cambiar a fixed)
    header.classList.replace("fijo","scroll");
    }
    else{
    //Reemplaza la clase scroll por fijo (dejando el header como estático)
    header.classList.replace("scroll","fijo");
    }
});

function writeMonth (month){

    for (let i = startDay(); i > 0; i--) {
        dates.innerHTML += `<div class="diaPasado" id="dates">${getTotalDays(monthNumber-1) -(i-1)} </div> `
    }

    for (let i = 1; i <= getTotalDays(month); i++) {

        if (i === currentDay) {
            dates.innerHTML += `<div class="today" id="dates">${i} </div> `
        }else{
            dates.innerHTML += `<div class="diaFuturo" id="dates">${i} </div> `
        }
        
    }
}
function getNoDay() {
    for (let i = startDay(); i>=6; i--) {

        if (i === 0) {
            dates.innerHTML += `<div class="noHay" id="dates">${i} </div> `
        }else if (i === 1) {
            dates.innerHTML += `<div class="noHay" id="dates">${i} </div> `
        }
        else if (i === 4) {
        dates.innerHTML += `<div class="noHay" id="dates">${i} </div> `
        }else{
            dates.innerHTML += `<div class="diaFuturo" id="dates">${i} </div> `
        }
        
    }
}

function getTotalDays(month){
    if (month === -1) month=11;

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
        return 31;
    }
    else if (month == 3 || month == 5 || month == 8 || month == 10){
        return 30;
    }
    else{
        return isLeap() ? 29:28
    }
}
function isLeap() { //Calcula año bisiesto
    return ((currentYear % 100 !== 0) && (currentYear % 4 === 0) || (currentYear % 400 === 0));
}
function startDay() {
    let start = new Date(currentYear,currentMonth,1);
    return (start.getDay());
}
function lastMonth() {
    if (currentMonth !== 0) {
        currentMonth--;
    }
    else{
        currentMonth = 11;
        currentYear--;
    }

    setNewDate();
}
function nextMonth() {
    if (currentMonth !== 11) {
        currentMonth ++;
    }
    else{
        currentMonth = 0;
        currentYear++;
    }

    setNewDate();
}
function setNewDate() {
    currentDate.setFullYear(currentYear,currentMonth,currentDay);
    month.textContent = currentMonth[monthNumber];
    year.textContent = currentYear.toString;
    dates.textContent = '';
    writeMonth(currentMonth);
}