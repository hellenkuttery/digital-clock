function clock(){
    const hour=document.getElementById("hour");
    const minutes=document.getElementById("minute");
    const seconds=document.getElementById("second");
    const time_show=document.getElementById("time-const");

    var h=new Date().getHours();
    var m=new Date().getMinutes();
    var s=new Date().getSeconds();
    
    var pre=h>=12 ? "PM" : "AM";

    if (h>12){
       h=h-12; 
    }
    h=(h<10) ? "0"+h : h;
    m=(m<10) ? "0"+m : m;
    s=(s<10) ? "0"+s : s;
    
    hour.innerHTML=h;
    minutes.innerHTML=m;
    seconds.innerHTML=s;
    time_show.innerHTML=pre;

}
var   interval=setInterval(clock,1000)