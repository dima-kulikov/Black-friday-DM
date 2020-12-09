const day = document.getElementById('day');
const hour = document.getElementById('hour');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
let today,tsec,tmin,thour;
// НАЧАЛО КОДА
let now = new Date();
// IE и FF по разному отрабатывают getYear()
let timeend= new Date(now.getYear()>1900?(now.getYear()+1):(now.getYear()+1901),0,1);
// для задания обратного отсчета до определенной даты укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ);
// Для задания даты с точностью до времени укажите дату в формате:
// timeend= new Date(ГОД, МЕСЯЦ-1, ДЕНЬ, ЧАСЫ-1, МИНУТЫ);
function time() {
    today = new Date();
    today = Math.floor((timeend-today)/1000);
    tsec=today%60; today=Math.floor(today/60); if(tsec<10)tsec='0'+tsec;
    tmin=today%60; today=Math.floor(today/60); if(tmin<10)tmin='0'+tmin;
    thour=today%24; today=Math.floor(today/24);
  // Присваеваем код под нужный id
  document.getElementById('day').innerHTML=today + " дней ";
  document.getElementById('hour').innerHTML=thour+" часов";
  document.getElementById('minutes').innerHTML=tmin+" минут";
  document.getElementById('seconds').innerHTML=tsec+" секунд";
   window.setTimeout("time()",1000);
}

window.addEventListener('load', time);