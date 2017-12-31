
var arr = ['日', '一', '二', '三', '四', '五', '六'];
// 時間物件

function mytimmer() {

  mydate = new Date();

  y = mydate.getFullYear();
  z = mydate.getMonth() + 1;
  w = mydate.getDay();
  d = mydate.getDate();
  h = mydate.getHours();
  m = mydate.getMinutes();
  s = mydate.getSeconds();
  ms = mydate.getMilliseconds();
 
  


  if (h < 10) {
    h = '0' + h;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
 
   if (h>12) {
    h="PM"+(h%12);
  }
  else if(h<12){
    h="AM"+h;
  }
 // h1 = h<10 ? '0'+h : h 
  
  
  r1 = h + ":" + m + ":" + s;
  r2 = y + "." + z + "." + d;
  r3 = arr[w];
  

  document.getElementById('time').innerHTML = r1;
  document.getElementById('date').innerHTML = r2;
  document.getElementById('day').innerHTML = '星期' + r3;

  t = setTimeout(mytimmer, 1000);

};
mytimmer();


function start(){
  mytimmer();
}

function stop(){
  
  clearTimeout(t);
  document.getElementById('time').innerHTML= '-- --:--:--';
}



p = 0 ;

function move(){

  p = p + .2;
  document.getElementById('c-c').style.backgroundPosition= p+ '%' ;
  setTimeout("move()", 1);
  console.log(p);
}
move();


//奧運倒數
var countdown = function(due) {
  var now = new Date();

  var rest = due.getTime() - now.getTime();
  var sec = Math.floor(rest / 1000 % 60);
  var min = Math.floor(rest / 1000 / 60) % 60;
  var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  var days = Math.floor(rest / 1000 / 60 / 60 / 24);
  var count = [days, hours, min, sec];

  return count;
}

var goal = new Date(2020, 6, 24);

var recalc = function() {
  var counter = countdown(goal);
  document.getElementById('day_japan').textContent = counter[0];
  document.getElementById('hour_japan').textContent = counter[1];
  document.getElementById('min_japan').textContent = counter[2];
  document.getElementById('sec_japan').textContent = counter[3];
  refresh();
}

var refresh = function() {
  setTimeout(recalc, 1000);
}
recalc();