// функция создания месяца и года
function clock() {
  var d = new Date();
  var month_num = d.getMonth()
  month=new Array("январь", "Февраль", "Март", "Апрель", "май", "июнь",
  "июля", "августа", "сентября", "октября", "ноября", "декабря");
  date_time = month[month_num] + " " + d.getFullYear() +
  ",<br>";
  if (document.layers) {
   document.layers.doc_time.document.write(date_time);
   document.layers.doc_time.document.close();
  }
  else document.getElementById("doc_time").innerHTML = date_time;
   setTimeout("clock()", 100000000000000);
  }
  // функция создания дня
  function clock1() {
    var d = new Date();
    var day = d.getDate();
    if (day <= 9) day = "0" + day;
    date_time = " <span >" +  day + "</span>" ;
    if (document.layers) {
     document.layers.doc_time.document.write(date_time);
     document.layers.doc_time.document.close();
    }
    else document.getElementById("calendar-day").innerHTML = date_time;
     setTimeout("clock()", 100000000000000);
    }





  // вызов функции
  clock();
  clock1();
  // отображение дня недели
  var day=new Date();
  var weekday=new Array(7);
  weekday[0]="Воскресенье";
  weekday[1]="Понедельник";
  weekday[2]="Вторник";
  weekday[3]="Среда";
  weekday[4]="Четверг";
  weekday[5]="Пятница";
  weekday[6]="Суббота";
  document.getElementById("das").innerHTML=(""+ weekday[day.getDay()]);
  